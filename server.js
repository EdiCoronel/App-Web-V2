const express = require('express');
const cors = require('cors');
const app = express();
const leyData = require('./ley.json'); // Asegúrate de que este archivo existe

app.use(cors());

app.get('/api/ley', (req, res) => {
  res.json(leyData);
});

const PORT = process.env.PORT || 5000;

// Exporta la aplicación para que Vercel pueda usarla
module.exports = app;

// Opcional: Si deseas ejecutar localmente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}