const express = require('express')
const app = express()
const axios = require('axios')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { countries } = require('./countries')

const PORT = process.env.PORT || 8080

const { 
  CAPITALS_SERVICE_SERVICE_HOST, 
  CAPITALS_SERVICE_SERVICE_PORT_HTTP,
  LANGUAGES_SERVICE_SERVICE_HOST, 
  LANGUAGES_SERVICE_SERVICE_PORT_HTTP, 
  CURRENCIES_SERVICE_SERVICE_HOST, 
  CURRENCIES_SERVICE_SERVICE_PORT_HTTP 
} = process.env

const getCapital = async country => {
  const url = `http://${CAPITALS_SERVICE_SERVICE_HOST}:${CAPITALS_SERVICE_SERVICE_PORT_HTTP}/${country}`
  const res = await axios({
    method: 'get',
    url,
    headers: {
      "Content-type": "application/json",
    },
  })
  console.log(`status: [${res.status}] data: [${JSON.stringify(res.data || {})}] url: [${url}]`)
  return res?.data?.capital
}

const getLanguage = async country => {
  const url = `http://${LANGUAGES_SERVICE_SERVICE_HOST}:${LANGUAGES_SERVICE_SERVICE_PORT_HTTP}/${country}`
  const res = await axios({
    method: 'get',
    url,
    headers: {
      "Content-type": "application/json",
    },
  })
  console.log(`status: [${res.status}] data: [${JSON.stringify(res.data || {})}] url: [${url}]`)
  return res?.data?.language
}

const getCurrency = async country => {
  const url = `http://${CURRENCIES_SERVICE_SERVICE_HOST}:${CURRENCIES_SERVICE_SERVICE_PORT_HTTP}/${country}`
  const res = await axios({
    method: 'get',
    url,
    headers: {
      "Content-type": "application/json",
    },
  })
  console.log(`status: [${res.status}] data: [${JSON.stringify(res.data || {})}] url: [${url}]`)
  return res?.data
}

app.get('/countries', async (req, res) => {
  console.log('GET /')
  const payload = {}
  for (const country of countries) {
    let capital, language, currency
    try {
      capital = await getCapital(country)
      language = await getLanguage(country)  
      currency = await getCurrency(country)  
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
    payload[country] = { capital, language, currency }
  }
  return res.json(payload)
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})


