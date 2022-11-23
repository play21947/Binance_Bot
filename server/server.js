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


app.post("/api/sign_up", (req, res) => {
    let email = req.body.email
    let password = req.body.password

    dbcon.query("SELECT * FROM users WHERE email = ?", [email], (err, user)=>{
        if(err) throw err

        if(user.length > 0){
            res.json({inserted: false})
        }else{
            dbcon.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, password], (err, inserted)=>{
                if(err) throw err

                res.json({inserted: true})
            })
        }
    })
})


app.post("/api/sign_in", (req, res)=>{
    let email = req.body.email
    let password = req.body.password

    dbcon.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, user)=>{
        if(err) throw err

        if(user.length > 0){
            res.json({success: true})
        }else{
            res.json({success: false})
        }
    })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})