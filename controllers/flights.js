const FlightModel = require("../models/flight");

module.exports = {
    index,
    new: newFlight,
    create
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

async function create(req, res){
  try {
    const flightDoc = await FlightModel.create(req.body);
    // put it in the database, then respond client
    console.log(flightDoc, " <0 this is the movie created in db");
    res.redirect("/flights/index"); // < this will 404 currently because
    // we haven't defined that route yet!
  } catch (err) {
    // console.log(err, '<---- this is the error')
    // res.send(err);
    // optionally
    next(err);  
  }   
}