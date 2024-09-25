const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const routes = require('./routes/routes.js');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/', routes);

app.listen(3002, () => {
    console.log('server initilized on http://localhost:3002');
});