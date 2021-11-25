const mongoose = require('mongoose')

const apartmentSchema = new mongoose.Schema({

    flatNo:{
    type:Number,
    unique:true
    },
    floorno: Number,
    bedRoomSize: String,
    ownerName: String,
    occupied: {
        type: Boolean,
        default: false
    },
    billPaid: {
        type: Boolean,
        default: false
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId, ref:"user"
    }
})

module.exports = mongoose.model('apartment', apartmentSchema);