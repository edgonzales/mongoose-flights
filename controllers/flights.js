const FlightModel = require("../models/flight");

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function show(req, res) {
  try {
    const flightDocument = await FlightModel.findById(req.params.id);
    console.log(flightDocument, '<---- this is the flight info');
    res.render('flights/show', {flight: flightDocument});

  } catch (err) {
    
  }
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
    res.redirect("/flights"); // < this will 404 currently because
    // we haven't defined that route yet!
  } catch (err) {
    // console.log(err, '<---- this is the error')
    // res.send(err);
    // optionally
    next(err);  
  }   
}