// bring in the requires
const express = require(`express`)
const yo = require(`./routes/yo/yo`)

const PORT = 3010

// create the app
const app = express()

// set up the route yo, so that all calls to /api/yo go to the yo route
app.use(`/api/yo`, yo.router)


app.use(express.json())



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})




