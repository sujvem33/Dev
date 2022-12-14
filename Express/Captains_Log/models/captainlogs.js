const mongoose = require('mongoose');

const captainLogSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    entry:  { type: String, required: true },
    isShipBroken: Boolean
},
{timestamps:true }
);

const CaptainLogs = mongoose.model('Captain', captainLogSchema);

module.exports = CaptainLogs;