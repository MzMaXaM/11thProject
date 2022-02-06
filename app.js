const express = require('express')
const fs = require('fs')

const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render()
})

app.get('/restaurants', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'restaurants.html')
  res.sendFile(filePath)
})

app.get('/about', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'about.html')
  res.sendFile(filePath)
})

app.get('/confirm', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'confirm.html')
  res.sendFile(filePath)
})

app.get('/recommend', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'recommend.html')
  res.sendFile(filePath)
})

app.post('/recommend', (req, res) => {
  const restaurant = req.body
  const filePath = path.join(__dirname, 'data', 'restaurants.json')

  const fileData = fs.readFileSync(filePath)
  const storedRestaurants = JSON.parse(fileData)

  storedRestaurants.push(restaurant)
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants))

  res.redirect('/confirm')
})

app.listen(3322)