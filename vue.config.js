const express = require('express')
const app = express()
var appData = require('./src/data/index.json')
var appCData = require('./src/data/city.json')
var appDData = require('./src/data/detail.json')
var homeData = appData
var cityData = appCData
var detailData = appDData
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

module.exports = {
  devServer: {
    before (app) {
      app.get('/api/homeData', (req, res) => {
        res.json({
          errno: 0,
          data: homeData
        })
      })
      app.get('/api/cityData', (req, res) => {
        res.json({
          errno: 0,
          data: cityData
        })
      })
      app.get('/api/detailData', (req, res) => {
        res.json({
          errno: 0,
          data: detailData
        })
      })
    }
  }
}
