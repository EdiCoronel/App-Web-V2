const express = require('express');
const cors = require('cors');
const app = express();
const leyData = require('./ley.json'); // Asegúrate de que este archivo existe

app.use(cors());

app.get('/api/ley', (req, res) => {
  res.json(leyData);
});

// Exporta la app para que Vercel pueda usarla
module.exports = app;