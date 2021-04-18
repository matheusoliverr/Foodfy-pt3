const express = require('express')
const routes = express.Router()
const recipes = require("./controllers/recipes")
const admin = require("./controllers/admin")

routes.get("/", recipes.index)
routes.get("/recipes/:index", recipes.show)
routes.get("/about", recipes.about)
routes.get("/recipes", recipes.list)


routes.get("/admin/recipes", admin.index)
routes.get("/admin/recipes/create", admin.create)
routes.get("/admin/recipes/:index", admin.show)
routes.get("/admin/recipes/:index/edit", admin.edit)

routes.post("/admin/recipes", admin.post)
routes.put("/admin/recipes", admin.put)
routes.delete("/admin/recipes", admin.delete)

module.exports = routes