module.exports.testModule = function (){
	console.log("Inside testModule");
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
	  	//console.log(result);
	    return result;
	    if (err) throw err;
	    //console.log(fields);
	  });
	});
}