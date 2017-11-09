const express = require('express');
const path = require('path');
const app = express();

const port = 8080;

//Middleware (order important) // express has next built in
app.use('/',express.static(path.join(__dirname,'../client/src/public/')));

app.get('/rides', (req,res,next)=>{
	//Connect to DB
	var mysql = require('mysql');

	var con = mysql.createConnection({
	  host: "qshare-mysql.cbdnvr3ldjvu.ca-central-1.rds.amazonaws.com",
	  user: "team_a",
	  password: "qtma_qshare",
	  database: "qshare_database"
	});

	con.connect(function(err) {
	  	if (err) throw err;
	  	con.query("SELECT * FROM rides", function (err, result, fields) {
	  	
	  	//Add profile pic link to each json object
	  	for(var i = 0; i < result.length; i++){
	  		var obj = result[i];
	  		obj.ProfilePicture = 'http://graph.facebook.com/'+obj.userid+'/picture?type=small'
	  	}

	  	console.log(result);

	  	res.send(result);
	    if (err) throw err;
	    //console.log(fields);
	  });
	});
});

var test = require('./testDatabase');



app.use((req, res, next)=>{
	res.status(404).send('404 Page Not Found');
});

//Start server
app.listen(port,() => {
	console.log(`Server running on port: ${port}`);
	

});

