let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
res.send('a');
})




































 module.exports = app;
