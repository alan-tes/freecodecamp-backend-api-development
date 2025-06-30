let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

console.log('a');

app.get('/', (req, res) => {
res.send('a');
})

app.post('/library', (req, res) => {
const firstname = req.body.firstname
const lastname = req.body.lastname
res.json({name: firstname+' '+lastname});
})




































 module.exports = app;
