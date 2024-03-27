const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const adminRoute = require("./routes/adminRoute")
const categoryRoute = require("./routes/categoryRoute")

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())



const PORT = process.env.PORT
const MONGOURL = process.env.MONGO_URL


mongoose.connect(MONGOURL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port no: ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})


app.use("/admin", adminRoute)
app.use("/category",categoryRoute)