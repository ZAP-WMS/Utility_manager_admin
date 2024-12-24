const mongoose = require('mongoose');
const CounterSchema = mongoose.Schema({
  courierNumber: {
    type: Number,
    default: 0,
  },
});

module.exports=mongoose.model('CourierCounter',CounterSchema);