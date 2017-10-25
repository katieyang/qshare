const express = require('express');
const path = require('path');
const app = express();

const port = 8080;

//Middleware (order important) // express has next built in
app.use('/',express.static(path.join(__dirname,'../client/src/public/')));

app.use('/abc',(req, res, next) =>{
	console.log('test log');
	res.status(200).send('some info');
});

//Ways to pass information with params or query
app.get('/users/:user',(req,res,next)=>{
	res.send(req.params.user + ' ' + req.query.q);
});

app.use((req, res, next)=>{
	res.status(404).send('404 Page Not Found');

});



//Start server
app.listen(port,() => {
	console.log(`Server running on port: ${port}`);
});

