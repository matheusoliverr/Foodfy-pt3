const data = require("../data.json")

exports.index = function(req,res){
    return res.render("foodfy", {recipes: data.recipes})
}

exports.show = function (req, res) {
    const recipeIndex = req.params.index;
  
    return res.render("recipe", {recipe: data.recipes[recipeIndex]})
}

exports.about = function(req,res){
    return res.render("about")
}

exports.list = function(req,res){
    return res.render("recipes", {recipes: data.recipes})
}