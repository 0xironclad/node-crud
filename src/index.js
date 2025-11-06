import express from "express";
import cors from "cors";

const app = express()
app.use(cors())
app.use(express.json())

const port = 3000

app.get("/", (req, res) => {
    res.json({
        message: "Hello World!"
    })
})


app.listen(port, () => {
    console.log(`\nServer is running on port ${port}`)
})
