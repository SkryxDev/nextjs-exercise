const express = require('express')
const router = express.Router()
const db = require("../models/user.model")

router.get('/', async (req, res) => {
    const data = await db.find()
    res.json(data)
})

router.post('/new', async (req, res) => {
    const newData = new db({
        username: req.body.username,
        job: req.body.job
    })
    newData.save()
    res.sendStatus(200)
})

router.delete('/delete/:username', async (req, res) => {
    db.deleteOne({ username: req.params.username }).catch(err => {console.log(err)})
    res.sendStatus(200)
})

module.exports = router