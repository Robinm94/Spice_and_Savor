var $ = function(id) { return document.getElementById(id); };

var loadRecipes = function (load_type) {
    var url = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1);
    let load_type_element = $(load_type);
    if (localStorage.getItem(load_type)) {
        $("empty_list_" + load_type).style.display = "none";
        for (let recipe of localStorage.getItem(load_type).split("|")) {
            let recipe_title = document.createElement('h2');
            let recipe_link = document.createElement('a');
            recipe_link.href = recipe;
            let recipe_name = document.createTextNode(recipes[recipe.split("/")[1].split(".")[0]]);
            recipe_link.appendChild(recipe_name);
            recipe_title.appendChild(recipe_link);
            load_type_element.appendChild(recipe_title);
        }
    }
};

var loadRecentRecipes = function () {
    var load_type = "recentrecipes";
    loadRecipes(load_type);
}

var loadSavedRecipes = function () {
    var load_type = "savedrecipes";
    loadRecipes(load_type);
}

function clearSave(){
    localStorage.removeItem("savedrecipes");
    localStorage.removeItem("recentrecipes");
    window.location.reload();
}

window.onload = function () {
    loadRecentRecipes();
    loadSavedRecipes();
    // $("share").href += window.location.href;
}