import dotenv from "dotenv"
import express from "express"
import cors from "cors"

dotenv.config()

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN
}))
app.use(express.json())

let cityName = "Delhi"

app.post('/api', async (req, res) => {
    try{
        cityName = req.body.message
        console.log(`Updated City Name :`, cityName)
        res.status(200).send({message: "City updated successfully"})
    } catch (error) {
        res.status(400)
        console.log(`Error: DATA not received`, error)
    }
})

app.get('/api', async (req, res) => {
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`)
        let data = await response.json()
        res.json(data)
    } catch (error) {
        res.status(500)
        console.log(`Error in receiving data from api`, error)
    }
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running in port: ${process.env.PORT}`)
})