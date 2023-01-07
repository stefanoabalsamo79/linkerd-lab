const express = require('express')
const app = express()

const { languages } = require('./languages')

const PORT = process.env.PORT || 8080
const ERROR_FREQUENCY = Number(process.env.ERROR_FREQUENCY || 1000)

let callCounter = 0
app.get('/:country', (req, res) => {
  callCounter++
  const country = req.params.country
  console.log(`GET /${country}`)
  if(callCounter < ERROR_FREQUENCY) return res.json({ language: languages[country] })
  else {
    callCounter = 0
    return res.status(500).json({ language: languages[country] })
  }
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})


