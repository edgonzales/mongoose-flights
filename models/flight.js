// DEFINING OUR MODEL
const dateFns = require('date-fns');
const mongoose = require('mongoose');

const date = Date.now();
const newDate = dateFns.addYears(date, 1);

// FIRST WE DEFINE THE SCHEMA
const flightSchema = new mongoose.Schema({
	airline: {
        type: String,
        enum: ['American', 'United', 'Southwest', 'Korean Air']
    },
	airport: {
        type: String,
        enum: ['SNA', 'LAX', 'PHX', 'ONT'],
        default: 'SNA'
    },
	flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: newDate
    }
})
// THEN WE COMPILE THE SCHEMA INTO THE MODEL AND EXPORT IT to be used in the controllers!
module.exports = mongoose.model('Flight', flightSchema);  //< the result of that line of code is the model, and we are exporting it
// this creates a movies collection on your mongodbatlas database