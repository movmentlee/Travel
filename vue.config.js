const express = require('express')
const app = express()
var appData = require('./src/data/index.json')
var homeData = appData
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
    }
  }
}
