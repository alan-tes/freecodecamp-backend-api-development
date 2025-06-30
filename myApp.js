let express = require('express');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
res.send('a');
})

let app = express();



































 module.exports = app;
