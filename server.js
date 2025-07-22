// server.js
const express = require('express')
const cors = require('cors')
const { getStockOlav, getStockCba } = require('./api/api')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

// Endpoint para stock Olavarría
app.get('/api/stock_olav', (req, res) => {
  try {
    const productos = getStockOlav()
    res.json(productos)
  } catch (err) {
    res.status(500).json({ error: 'No se pudo leer stock_olav.xls' })
  }
})

// Endpoint para stock Córdoba
app.get('/api/stock_cba', (req, res) => {
  try {
    const productos = getStockCba()
    res.json(productos)
  } catch (err) {
    res.status(500).json({ error: 'No se pudo leer stock_cba.xls' })
  }
})

// Ruta básica
app.get('/', (req, res) => {
  res.send('API de Stock funcionando.')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
