var express = require('express');
var jsonValidator = require('jsonschema').Validator;
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var userSchema = { id: '/User', type: 'object', properties: { username: { type: 'string' }, email: { type: 'string', format: 'email' }, votes: { type: 'integer' } }, required: ['username', 'email', 'votes'] };
var itemSchema = { id: '/Item', type: 'object', properties: { price: { type: 'number' }, width: { type: 'integer' }, height: { type: 'integer' }, added: { type: 'string', format: 'date-time' }, seller: { $ref: '/User' }, image: { type: 'string', format: 'uri' } }, required: ['price', 'width', 'height', 'added', 'seller'] }
var validator = new jsonValidator()
validator.addSchema(userSchema, '/User');

app.post('/validate', function (req, res) {
    if (req.get('Content-Type') != 'application/json') {
        res.status(401).send('Invalid header format'); return;
    }
    try { validator.validate(req.body, itemSchema, { throwError: true }); }
    catch (error) { res.status(401).end('Invalid body format: ' + error.message); return; }
    res.status(200).send('Valid request format');
});

app.listen(8000, function () { console.log('Validation app listening on port 8000'); });