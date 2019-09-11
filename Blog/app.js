const express = require('express');
const app = express();
const api = require('./api')

app.use('/', api)

app.listen(8000, () => console.log('Listening on port 8000'))