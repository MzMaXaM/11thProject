const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res)=>{
  const filePath = path.join(__dirname, 'views', 'index.html')
  res.sendFile(filePath)
})

app.get('/restaurants', (req, res)=>{
  const filePath = path.join(__dirname, 'views', 'restaurants.html')
  res.sendFile(filePath)
})

app.get('/about', (req, res)=>{
  const filePath = path.join(__dirname, 'views', 'about.html')
  res.sendFile(filePath)
})

app.get('/confirm', (req, res)=>{
  const filePath = path.join(__dirname, 'views', 'confirm.html')
  res.sendFile(filePath)
})

app.get('/recommend', (req, res)=>{
  const filePath = path.join(__dirname, 'views', 'recommend.html')
  res.sendFile(filePath)
})

app.listen(3322)