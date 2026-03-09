const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde dist/dia-mujer/browser
app.use(express.static(path.join(__dirname, 'dist/dia-mujer/browser')));

// Todas las rutas devuelven index.html para que Angular maneje el routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/dia-mujer/browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
