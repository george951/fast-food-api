const Items = require("../models/schema")

const getAllItems = async (req, res) => {
    try {
        const items = await Items.find()
        res.status(200).json({items})
    } catch(error) {
        res.status(501).json({msg: error})
    }
}
const getOneItem = async (req, res) => {
    try {
        const {id:itemID} = req.params
        const item = await Items.findOne({_id:itemID})
        if (!item) {
            return res.status(404).json({msg: "There is no item with this ID"})
        }
        res.status(200).json({ item })
    } catch(error) {
        res.status(501).json({msg: error})
    }
}
const createOneItem = async (req, res) => {
    try {
        const item = await Items.create(req.body)
        res.status(201).json({item})
    } catch(error) {
        res.status(501).json("msg: error")
    }
}
const deleteOneItem = async (req, res) => {
    try {
        const {id:itemID} = req.params
        const item = await Items.findOneAndDelete({ _id:itemID })
        res.status(410).json({item})
    } catch(error) {
        res.status(500).json({msg:error})
    }
}
const editOneItem = async (req, res) => {
    try {
        const {id:itemID} = req.params
        const item = await Items.findOneAndUpdate({ _id:itemID },req.body, {
            new: true,
            runValidators:true
        })
        if (!item) {
            return res.status(404).json({msg:"There is no item with this ID"})
        }
        res.status(201).json({ item })
    } catch(error) {
        res.status(500).send({ msg:error })
    }
}


module.exports = {
    getAllItems,
    getOneItem,
    createOneItem,
    deleteOneItem,
    editOneItem
}