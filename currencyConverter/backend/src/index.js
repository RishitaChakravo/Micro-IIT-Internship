
import dotenv from "dotenv"
import express from "express"
import cors from "cors"

dotenv.config()

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN
}))
app.use(express.json())

let currentCurrency = "INR"

app.post('/api', (req, res) => {
    currentCurrency = req.body.message;
    console.log("Updated CurrentCurrency:", currentCurrency)
    res.json({success:true, message:"Currency updated"})
})

app.listen(process.env.PORT || 8000, (req, res) => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})

app.get('/api', async (req, res) => {
    try{
        if(!currentCurrency) {
            return res.status(400).json({error : "Currency not set"})
        }
        let response  = await fetch(`${process.env.API_URL}/${process.env.API_KEY}/latest/${currentCurrency}`)
        let data = await response.json()
        res.json(data.conversion_rates)
    } catch(error){
        console.log("Error in exchange rates:", error)
        res.status(500).json({error:"Internal server ERROR"})
    }
})