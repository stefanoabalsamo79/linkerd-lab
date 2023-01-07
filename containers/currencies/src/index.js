const express = require('express')
const app = express()
const axios = require('axios')

const PORT = process.env.PORT || 8080

const { 
  CURRENCIES_NAME_SERVICE_SERVICE_HOST, 
  CURRENCIES_NAME_SERVICE_SERVICE_PORT_HTTP,
  CURRENCIES_CODE_SERVICE_SERVICE_HOST, 
  CURRENCIES_CODE_SERVICE_SERVICE_PORT_HTTP,
  CURRENCIES_SYMBOL_SERVICE_SERVICE_HOST, 
  CURRENCIES_SYMBOL_SERVICE_SERVICE_PORT_HTTP,
} = process.env

const getCurrencyName = async country => {
  const url = `http://${CURRENCIES_NAME_SERVICE_SERVICE_HOST}:${CURRENCIES_NAME_SERVICE_SERVICE_PORT_HTTP}/${country}`
  const res = await axios({
    method: 'get',
    url,
    headers: {
      "Content-type": "application/json",
    },
  })
  console.log(`status: [${res.status}] data: [${JSON.stringify(res.data || {})}] url: [${url}]`)
  return res?.data?.currencyName
}

const getCurrencyCode = async country => {
  const url = `http://${CURRENCIES_CODE_SERVICE_SERVICE_HOST}:${CURRENCIES_CODE_SERVICE_SERVICE_PORT_HTTP}/${country}`
  const res = await axios({
    method: 'get',
    url,
    headers: {
      "Content-type": "application/json",
    },
  })
  console.log(`status: [${res.status}] data: [${JSON.stringify(res.data || {})}] url: [${url}]`)
  return res?.data?.currencyCode
}

const getCurrencySymbol = async country => {
  const url = `http://${CURRENCIES_SYMBOL_SERVICE_SERVICE_HOST}:${CURRENCIES_SYMBOL_SERVICE_SERVICE_PORT_HTTP}/${country}`
  const res = await axios({
    method: 'get',
    url,
    headers: {
      "Content-type": "application/json",
    },
  })
  console.log(`status: [${res.status}] data: [${JSON.stringify(res.data || {})}] url: [${url}]`)
  return res?.data?.currencySymbol
}

app.get('/:country', async (req, res) => {
  const country = req.params.country;
  console.log(`GET /${country}`)
  const name = await getCurrencyName(country)
  const code = await getCurrencyCode(country)
  const symbol = await getCurrencySymbol(country)
  const currency = { name, code, symbol }
  console.log(currency);
  return res.json(currency)
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})


