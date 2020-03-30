const express = require(`express`)
const router = express.Router()

// this will become the /api/yo endpoint
router.get(`/`, (req, res) => {
    res.send(`Hello from Yo. Happy hacking!`)
})



module.exports = {router}