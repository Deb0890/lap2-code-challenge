const express = require('express');
const router = express.Router();

const Entry = require('../models/entries')

//Get all entries route
router.get('/', async (req, res) => {
    try {
        const entries = await Entry.all
        res.json({entries})
    } catch(err) {
        res.status(500).json({err})
    }
})

//Get one entry route
router.get('/:id', async (req, res) => {
    try {
        const entry = await Entry.findById(parseInt(req.params.id))
        res.json(entry)
    } catch(err) {
        res.status(404).json({err})
    }
})

//create entry route
router.post('/', async (req, res) => {
    try {
        const entry = await Entry.create(req.body.title, req.body.name, req.body.story)
        res.json(entry)
    } catch(err) {
        res.status(404).json({err})
    }
})

module.exports = router;