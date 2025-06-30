let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

console.log('a');

app.get('/', (req, res) => {
res.send('a');
})

app.post('/name', (req, res) => {
const firstname = req.body.first
const lastname = req.body.last
res.json({name: firstname+' '+lastname});
})




































 module.exports = app;
