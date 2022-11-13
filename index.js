const path = require('path')
const express = require('express')
const javelin = require('./back/javelin.js');
const app = express()
const hostname = '127.0.0.1';
const port = 3000;


app.use(function (req, res, next) {
    date = new Date(Date.now())
    console.log('Time:', date.toLocaleDateString(), date.toLocaleTimeString(), "; url :", req.url);
    next(); // sans cette ligne on ne pourra pas poursuivre.
})
app.use("/static", express.static(path.join(__dirname, '/static')))

app.get('/', (req, res) => {
    res.redirect(301, '/static/index.html')
})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
