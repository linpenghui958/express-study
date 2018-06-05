const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  console.log('mw1')
  next('router')
})

router.get('/', (req, res, next) => {
  console.log('mw2')
  next()
})

module.exports = router