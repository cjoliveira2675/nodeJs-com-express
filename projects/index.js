var express = require('express')
var router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/', (req, res) => {
  res.sendFile(`${basePath}/projects.html`)
})

module.exports = router
