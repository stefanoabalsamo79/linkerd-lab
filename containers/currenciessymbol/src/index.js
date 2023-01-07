const express = require('express')
const app = express()

const { currenciesSymbol } = require('./currenciesSymbol')

const PORT = process.env.PORT || 8080

app.get('/:country', (req, res) => {
  const country = req.params.country;
  console.log(`GET /${country}`)
  return res.json({ currencySymbol: currenciesSymbol[country] })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})


