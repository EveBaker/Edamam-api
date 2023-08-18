import express from "express";
import axios from "axios";
import cors from "cors";
import "dotenv/config";

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})

