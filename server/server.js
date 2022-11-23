const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const dbcon = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'binance'
})


app.get("/api/test", (req, res) => {
    res.json({ status: 200 })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})