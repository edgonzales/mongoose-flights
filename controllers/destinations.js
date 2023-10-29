const FlightModel = require('../models/flight')

module.exports = {
    create
}

async function create(req, res){
    try {
        // first find the doc by the req id
        const flightDoc = await FlightModel.findById(req.params.id)
        console.log(flightDoc, '<---- destination doc');
        console.log(req.body, '<--- contents of the form');
        flightDoc.destinations.push(req.body);
        await flightDoc.save();
        console.log(flightDoc);
        res.redirect(`/flights/${flightDoc._id}`);
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}