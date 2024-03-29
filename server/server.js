const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./config/config');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/usuario',  (req, res) => {
  res.json('get usuario')
})

app.post('/usuario',  (req, res) => {
  let body = req.body;
  
  res.json({
      body
  })
})

app.put('/usuario',  (req, res) => {
  res.json('put usuario')
})

app.delete('/usuario',  (req, res) => {
  res.json('delete usuario')
})
 
app.listen(process.env.PORT, ()=>{
    console.log(`escuchando puerto :`, process.env.PORT);
})