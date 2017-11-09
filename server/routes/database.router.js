const express = require('express');
const router = express.Router();

//Connect to DB
const mysql = require('mysql');

const attachDBConnection = getDBConnection();

router.use(attachDBConnection);

function getDBConnection(){
	//------------------- Single database connection -------------
	const con = mysql.createConnection({
		  host: "qshare-mysql.cbdnvr3ldjvu.ca-central-1.rds.amazonaws.com",
		  user: "team_a",
		  password: "qtma_qshare",
		  database: "qshare_database"
	  });

	  con.connect((err) => {
	  	if (err) throw err;
	  	console.log('Connected to DB');
	  });
	  //-------------------------------------------------------------

	  return function attachDBConnection (req,res,next) {
	  	req.db = con;
	  	next();
	  };
}

module.exports = router;
	