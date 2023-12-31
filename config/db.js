const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL); // process.env is how access the variables in the .env file
	
// shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

db.on('error', function(err) {
	console.log(err, 'soemthing')
})