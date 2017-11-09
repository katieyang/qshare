const express = require('express');
const router = express.Router();

const dbrouter = require('./database.router');
const apirouter = require('./api.router');

router.use('/api', dbrouter, apirouter);

router.use((req, res, next)=>{
	res.status(404).send('404 Page Not Found');
});

module.exports = router;