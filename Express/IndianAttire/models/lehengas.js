const mongoose = require('mongoose');

const lehengaSchema = new mongoose.Schema({
    Name:  { type: String, required: true },
    Description:  { type: String, required: true },
    Price:  { type: String, required: true },
    Image:  { type: String, required: true },
    isProductAvailable: Boolean
},
{timestamps:true }
);

const Lehenga = mongoose.model('Lehenga', lehengaSchema);

module.exports = Lehenga;