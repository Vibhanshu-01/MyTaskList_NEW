const mytasks = require("./routes/mytasks")
const signUp = require("./routes/signUp")
const signIn = require("./routes/signIn")
const express = require ("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()
const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/mytasks" , mytasks)
app.use("/api/signup", signUp)
app.use("/api/signin", signIn)
app.get("/" , (req, res)=>{
    res.send("welcome to my tasklist api ")
})

const connection_string = process.env.CONNECTION_STRING
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})

mongoose.connect(connection_string , {
    useNewURLParser : true , 
    useunifiedTopology : true ,
})
.then(() => console.log("MongoDB connection established"))
.catch((error) => console.error("MongoDB connection failed:" , error.message))