const express = require('express');
const path = require('path');
const app = express();

const bodyparser = require('body-parser');

const port = 8080;

const router = require('./routes/index.router.js');

//Middleware for body-parser
app.use(bodyparser.json());

//Middleware (order important) // express has next built in
app.use('/',express.static(path.join(__dirname,'../client/src/public/')));

app.use(router);

//Start server
app.listen(port,() => {
	console.log(`Server running on port: ${port}`);
});

