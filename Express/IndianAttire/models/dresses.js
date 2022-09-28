const mongoose = require('mongoose');

const dressSchema = new mongoose.Schema({
    Name:  { type: String, required: true },
    Description:  { type: String, required: true },
    Price:  { type: String, required: true },
    Image:  { type: String, required: true },
    isProductAvailable: Boolean
},
{timestamps:true }
);

const Dress = mongoose.model('Dress', dressSchema);

module.exports = Dress;