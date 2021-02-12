const Monster = require('../models/monster')
const express = require('express')
const monsterController = express.Router();


//CRUD

//Create
monsterController.post('/', async (req,res) => {
    try {
        const newMonster = await Monster.create(req.body)
        res
            .status(200)
            .json(newMonster)
    } catch (error) {
        console.error(error)
        res
            .status(400)
            .json(error)
    }
})

//Read
monsterController.get('/', async (req,res) => {
    try {
        const foundMonster = await Monster.find({})
        res
            .status(200)
            .json(foundMonster)
    } catch (error) {
        res
            .status(400)
            .json(error)
    }
})

module.exports = monsterController;