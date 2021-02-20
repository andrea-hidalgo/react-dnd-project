const Monster = require('../models/monster')
const express = require('express');
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

//Destroy
monsterController.delete('/:id', async (req,res) => {
    try {
        const foundMonster = await Monster.findByIdAndDelete(req.params.id)
        res
            .status(200)
            .json(foundMonster)
    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

//Update 
monsterController.put('/:id', async (req, res) => {
    console.log(req.body)
    try {
        const foundMonster = await Monster.findByIdAndUpdate(req.params.id, req.body, { new:true })
        res
            .status(200)
            .json(foundMonster)
    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})


module.exports = monsterController;