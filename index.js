const express = require('express');
const path = require('path');

const app = express();

// motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// rutas
app.get('/', (req, res) => res.render('pages/planetas'));
app.get('/mercurio', (req, res) => res.render('pages/mercurio'));
app.get('/venus', (req, res) => res.render('pages/venus'));
app.get('/tierra', (req, res) => res.render('pages/tierra'));
app.get('/marte', (req, res) => res.render('pages/marte'));
app.get('/jupiter', (req, res) => res.render('pages/jupiter'));
app.get('/saturno', (req, res) => res.render('pages/saturno'));
app.get('/urano', (req, res) => res.render('pages/urano'));
app.get('/neptuno', (req, res) => res.render('pages/neptuno'));

// puerto Render
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('Servidor corriendo en puerto', PORT);
});
