const data = require("../data.json")
const fs = require('fs')



exports.index = function(req,res){
    return res.render("admin/listing", {recipes: data.recipes})
}

exports.create = function(req,res){

    return res.render("admin/create")
}

exports.post = function(req,res){
    const keys = Object.keys(req.body)

    const filteredKeys = keys.filter(function(key){
        return key !=='information'
    })

    for(key of filteredKeys){
        if(req.body[key] == ""){
            return res.send(`Preencha o campo (${key}) para continuar!`)
        }
    }
    
    let id = 1
    const lastRecipe = data.recipes[data.recipes.length - 1]
    
    if(lastRecipe){ id = lastRecipe.id + 1}

    const recipe = {
        ...req.body,
        id
    }

    data.recipes.push(recipe)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) res.send("Write error!")

        return res.redirect("/admin/recipes")
    })
}

exports.show = function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = data.recipes[Number(recipeIndex)]

    if(!recipe){
        return res.send("Recipe not founded!")
    }

  
    return res.render("admin/recipe", {recipe});
}

exports.edit = function(req,res){
    const recipeIndex = req.params.index;

    if(!recipeIndex){
        return res.send("Recipe not founded!")
    }
  
    return res.render("admin/edit", {recipe: data.recipes[recipeIndex]})
}

exports.put = function(req,res){
    const { id } = req.body
    let recipeIndex = 0
    
    const foundRecipe = data.recipes.find(function(recipe, index){
        if(recipe.id == id){

        recipeIndex = index

        return true
        }
    })

    const recipe = {
        ...foundRecipe,
        ...req.body
    }

    data.recipes[recipeIndex] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write error!")

        return res.redirect(`/admin/recipes/${recipeIndex}`)
    })
}

exports.delete = function(req,res){
    const { id } = req.body

    const filteredRecipes = data.recipes.filter(function(recipe){
        return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write error!")

        return res.redirect("/admin/recipes")
    })
}