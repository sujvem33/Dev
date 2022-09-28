const mongoose = require('mongoose');

const suitSchema = new mongoose.Schema({
    Name:  { type: String, required: true },
    Description:  { type: String, required: true },
    Price:  { type: String, required: true },
    Image:  { type: String, required: true },
    isProductAvailable: Boolean
},
{timestamps:true }
);

const Suit = mongoose.model('Suit', suitSchema);

module.exports = Suit;