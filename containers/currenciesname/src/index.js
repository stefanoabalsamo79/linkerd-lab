const express = require('express')
const app = express()

const { currenciesName } = require('./currenciesName')

const PORT = process.env.PORT || 8080

app.get('/:country', (req, res) => {
  const country = req.params.country;
  console.log(`GET /${country}`)
  return res.json({ currencyName: currenciesName[country] })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})


