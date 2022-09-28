const mongoose = require('mongoose');

const coordSchema = new mongoose.Schema({
    Name:  { type: String, required: true },
    Description:  { type: String, required: true },
    Price:  { type: String, required: true },
    Image:  { type: String, required: true },
    isProductAvailable: Boolean
},
{timestamps:true }
);

const Coord = mongoose.model('Coord', coordSchema);

module.exports = Coord;