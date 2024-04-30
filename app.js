const express = require('express')
const app = express()
const port = 3001
const mongoose = require("mongoose")
const cors = require('cors')

const DBNAME = "smaki"
const URI = `mongodb+srv://Smaki_Maki:fYGv3Xj4Vm4Bvyhc@cluster0.rirhovr.mongodb.net/${DBNAME}`


const pizzaRouter = require("./routes/pizzaRoutes")
const sushiRouter = require("./routes/sushiRoutes")
const drinksRouter = require("./routes/drinksRoutes")
const salatRouter = require("./routes/salatRoutes")
const snekRouter = require("./routes/snekRoutes")
const setsRouter = require("./routes/setsRoutes")

app.use(cors())
app.use('/api/pizza', pizzaRouter)
app.use('/api/sushi', sushiRouter)
app.use('/api/drinks', drinksRouter)
app.use('/api/salat', salatRouter)
app.use('/api/snek', snekRouter)
app.use('/api/sets', setsRouter)

async function main() {
    try {
        await mongoose.connect(URI)
        console.log(`DB Connection successfully`)
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (err) {
        return console.log(err)
    }
}

main()

process.on("SIGINT", async () => {
    await mongoose.disconnect()
    console.log("Disconnect is successfully !")
    process.exit()
})
