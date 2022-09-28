const mongoose = require('mongoose');

const sareeSchema = new mongoose.Schema({
    Name:  { type: String, required: true },
    Description:  { type: String, required: true },
    Price:  { type: String, required: true },
    Image:  { type: String, required: true },
    isProductAvailable: Boolean
},
{timestamps:true }
);

const Saree = mongoose.model('Saree', sareeSchema);

module.exports = Saree;