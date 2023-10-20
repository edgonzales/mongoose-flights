const FlightModel = require("../models/flight");

module.exports = {
    index,
    new: newFlight
}

async function index(req, res){
    try{
        const allFlights = await FlightModel.find({});
        res.render('flights/index', {allFlights: allFlights});
        console.log(allFlights, '<------All flghts info');
    
      } catch(err) {
        res.send(err);
      }
}

function newFlight(req, res) {
  res.render("flights/new");
}