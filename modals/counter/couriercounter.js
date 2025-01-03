const mongoose = require('mongoose');
const CounterSchema = mongoose.Schema({
  courierNumber: {
    type: Number,
    default: 0,
  },
},{
  versionKey: false
});

module.exports=mongoose.model('CourierCounter',CounterSchema);