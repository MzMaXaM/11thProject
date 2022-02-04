const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res)=>{
  res.send('<h1>Hello World!</h1>')
})

app.get('/restaurants', (req, res)=>{
  const filePath = path.join(__dirname, 'views', 'restaurants.html')
  res.sendFile(filePath)
})

app.listen(3322)