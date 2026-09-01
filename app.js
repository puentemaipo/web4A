
import express from 'express'

const app = express()

// RUTAS => ROUTES => ROUTER
app.get('/', (req, res) => {
  res.send('Hello World!!!!@@@@@')
})

app.get('/contacto', (req, res) => {
    res.send('Página de contacto!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})