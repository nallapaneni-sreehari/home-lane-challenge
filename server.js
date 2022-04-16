const express = require('express');
const app = express();
const {authorize, generateToken} = require('./middlewares/auth');
const dataService = require('./data-service/data-service');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/data-service', authorize, dataService);

app.get('/generate-token', generateToken);


app.listen(PORT,async (err)=>{
    if (err) throw err;
    console.log(`Server started on ${PORT}`);
})