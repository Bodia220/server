const express = require('express')
const app = express()
const port = 3001
const mongoose = require("mongoose")
const cors = require('cors')

const DBNAME = "smaki"
const URI = `mongodb+srv://Smaki_Maki:fYGv3Xj4Vm4Bvyhc@cluster0.rirhovr.mongodb.net/${DBNAME}`


const pizzaRouter = require("./routes/pizzaRoutes")

app.use(cors())
app.use('/api/pizza', pizzaRouter)

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
