const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Auth = require('./auth');
const path = require('path');
const cors = require('cors')




app.use(bodyParser())
app.use(cors())


app.get('/login',(req, res) => {
    res.sendFile(path.join(__dirname,"public/login.html"))
})

app.post('/login', (req, res )=> {
    let data = {
        username: req.body.username,
        password: req.body.password
    }
    console.log(data)
    if(data.username.trim() === '' || data.password.trim() === '') return res.status(400).json({error:"should not to be empty"})
    let token = jwt.sign(data.username,'secret text')
    res.json({token})
  
})

app.get('/profile',Auth , (req, res) => {
    res.json(`welcome ${req.user}`)
    
})

app.listen(5000,()=> console.log('start'))