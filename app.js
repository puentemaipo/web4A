const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

// CONFIGURAR EJS
app.set('view engine', 'ejs');

// ARCHIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, 'public')));


// RUTAS

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/servicios', (req, res) => {
  res.render('servicios');
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros');
});

app.get('/contacto', (req, res) => {
  res.render('contacto');
});



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
