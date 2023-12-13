$(document).ready(function () {
    function storeRecipe(recipe_type) {
        var href_parts = window.location.href.split("/").reverse()
        var recipe_location = href_parts[1] + "/" + href_parts[0];
        if (localStorage.getItem(recipe_type)) {
            localStorage.setItem(recipe_type, recipe_location + "|" + localStorage.getItem(recipe_type));
        } else {
            localStorage.setItem(recipe_type, recipe_location);
        }
        var recipe_set = new Set(localStorage.getItem(recipe_type).split("|"));
        localStorage.setItem(recipe_type, [...recipe_set].join("|"));
    };

    $("#save-recipe-button").on("click", function saveRecipe() {
        var recipe_type = "savedrecipes";
        storeRecipe(recipe_type);
        $('#success_message').css("display", "block");
        setTimeout(function () {
            $('#success_message').css("display", "none");
        }, 2000);

    });

    function recentRecipes() {
        var recipe_type = "recentrecipes";
        storeRecipe(recipe_type);
        localStorage.setItem(recipe_type, localStorage.getItem(recipe_type).split("|").slice(0, 5).join("|"));
    };

    recentRecipes();

    $("#print_button").on("click", function () {
        $("#dialog").dialog({
            width: "max-content",
            modal: true
        });
        $('input:radio[name="print_image"]').change(
            function () {
                if ($(this).is(':checked') && $(this).val() == 'print_with_image') {
                    $("img").each(
                        function () {
                            $(this).removeClass("hidden-food-img");
                        }
                    );
                }
                if ($(this).is(':checked') && $(this).val() == 'print_without_image') {
                    $("img").each(
                        function () {
                            $(this).addClass("hidden-food-img");
                        }
                    );
                }
            });
        $("#print_button_final").on("click", function () {
            $('#dialog').dialog('destroy');
            window.print();
        });
    });

});