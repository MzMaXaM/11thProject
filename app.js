const express = require('express')
const uuid = require('uuid')

const path = require('path')
const app = express()

const util = require('./util/restaurant-data')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/restaurants', (req, res) => {
  const storedRestaurants = util.getRestaurants()

  res.render('restaurants', {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants
  })
})

app.get('/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id
 
  const storedRestaurants = util.getRestaurants()

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render('restaurantDetail', {
        restaurant: restaurant
      })
    }
  }

  res.status(404).render('404')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/confirm', (req, res) => {
  res.render('confirm')
})

app.get('/recommend', (req, res) => {
  res.render('recommend')
})

app.post('/recommend', (req, res) => {
  const restaurant = req.body
  restaurant.id = uuid.v4()

  const storedRestaurants = util.getRestaurants()

  storedRestaurants.push(restaurant)
  util.setRestaurants(storedRestaurants)

  res.redirect('/confirm')
})

app.use((req, res)=>{
  res.status(404).render('404')
})

app.listen(3322)