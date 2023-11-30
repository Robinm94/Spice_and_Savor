var $ = function(id) { return document.getElementById(id);};

var storeRecipe = function(recipe_type) {
    var href_parts = window.location.href.split("/").reverse()
    var recipe_location = href_parts[1] + "/" + href_parts[0];
    if(localStorage.getItem(recipe_type)){
        localStorage.setItem(recipe_type, recipe_location + "|" + localStorage.getItem(recipe_type));
    } else {
        localStorage.setItem(recipe_type, recipe_location);
    }
    var recipe_set = new Set(localStorage.getItem(recipe_type).split("|"));
    localStorage.setItem(recipe_type, [...recipe_set].join("|"));
};

var saveRecipe = function() {
    var recipe_type = "savedrecipes";
    storeRecipe(recipe_type);
    alert("Recipe saved successfully!");
};

var recentRecipes = function() {
    var recipe_type = "recentrecipes";
    storeRecipe(recipe_type);
    localStorage.setItem(recipe_type, localStorage.getItem(recipe_type).split("|").slice(0, 5).join("|"));
};

window.onload = function() {
    $('print_button').onclick = () => {window.print()};
    $('save-recipe-button').onclick = saveRecipe;
    recentRecipes();
};