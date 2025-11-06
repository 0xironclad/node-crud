import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import pool from "./config/db.js";

const app = express()
app.use(cors())
app.use(express.json())

const port = 3000

app.get("/", async (req, res) => {
    const db_name = await pool.query("SELECT current_database();")
    res.json({
        message: "Hello World!",
        db_name: db_name.rows[0].current_database
    })
})


app.listen(port, () => {
    console.log(`\nServer is running on port ${port}`)
})
