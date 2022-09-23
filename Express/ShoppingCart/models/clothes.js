const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
    Name:  { type: String, required: true },
    Description:  { type: String, required: true },
    Price:  { type: String, required: true },
    Category :{type: String, Default:"clothes"},
    isAvailable: Boolean
},
{timestamps:true }
);

const Clothes = mongoose.model('Clothes', clothesSchema);

module.exports = Clothes;