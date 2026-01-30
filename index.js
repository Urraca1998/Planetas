const express = require('express');
const app = express();
const path = require('path');

// motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// ruta principal
app.get('/mercurio', (req, res) => {
    res.render('pages/mercurio');
    console.log('pagina planeta cargada');
});
app.get('/venus', (req, res) => {
    res.render('pages/venus');
    console.log('pagina planeta cargada');
});
app.get('/tierra', (req, res) => {
    res.render('pages/tierra');
    console.log('pagina planeta cargada');
});
app.get('/marte', (req, res) => {
    res.render('pages/marte');
    console.log('pagina planeta cargada');
});
app.get('/jupiter', (req, res) => {
    res.render('pages/jupiter');
    console.log('pagina planeta cargada');
});
app.get('/saturno', (req, res) => {
    res.render('pages/saturno');
    console.log('pagina planeta cargada');
});
app.get('/Urano', (req, res) => {
    res.render('pages/Urano');
    console.log('pagina planeta cargada');
});
app.get('/Neptuno', (req, res) => {
    res.render('pages/Neptuno');
    console.log('pagina planeta cargada');
});
app.get('/', (req, res) => {
    res.render('pages/planetas');
    console.log('pagina planeta cargada');
});

const server = app.listen(4000, () => {
    console.log('listen to port 4000');
    console.log('Hola mundo');
});