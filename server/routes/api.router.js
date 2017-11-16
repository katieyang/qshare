const express = require('express');
const router = express.Router();

router.get('/rides', (req,res,next)=>{

	  	req.db.query("SELECT * FROM rides", function (err, result, fields) {
	  	
	  	//Add profile pic link to each json object
	  	for(var i = 0; i < result.length; i++){
	  		var obj = result[i];
	  		obj.ProfilePicture = 'http://graph.facebook.com/'+obj.userid+'/picture?type=small'

	  		var sqldate = obj.departDate.toString();
		  	//Convert SQL dates to readable dates	
			// Split timestamp into [ Y, M, D, h, m, s ]
			var t = sqldate.split(/[- :]/);
			//console.log(t);

			// Apply each element to the Date function
			var d = t[0] + ', ' + t[1] + " " + t[2] + " - " + t[4] + ":" + t[5];

			obj.readableDate = d;
			// -> Wed Jun 09 2010 14:12:01 GMT+0100 (BST)*/
	  	}

	  	res.send(result);
	    if (err) throw err;
	    
	});
});

router.post('/rides', (req,res,next)=>{
	console.log("Inside rides post endpoint");
	console.log(req.body);
	res.send("Attempt made to post to DB");
});

module.exports = router;