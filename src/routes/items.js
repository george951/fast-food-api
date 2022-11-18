const express = require("express")
const itemRouter = express.Router()
const {
    getAllItems,
    getOneItem, 
    createOneItem,
    deleteOneItem,
    editOneItem
} = require("../controllers/items")

itemRouter.route("/").get(getAllItems).post(createOneItem)
itemRouter.route("/:id").get(getOneItem).delete(deleteOneItem).patch(editOneItem)

module.exports = itemRouter