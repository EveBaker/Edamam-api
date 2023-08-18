import express, { query } from "express";
import axios from "axios";
import cors from "cors";
import "dotenv/config";

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/recipies/:chicken', async (req, res) => {
    const response = await axios.get(
        `https://api.edamam.com/search?q=chicken&app.id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
    )
})

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})

