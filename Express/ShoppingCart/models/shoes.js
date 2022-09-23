const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
    Name:  { type: String, required: true },
    Description:  { type: String, required: true },
    Price:  { type: String, required: true },
    Category :{type: String, Default:"shoes"},
    isAvailable: Boolean
},
{timestamps:true }
);

const Shoes = mongoose.model('Shoes', shoesSchema);

module.exports = Shoes;