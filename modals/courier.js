let mongoose=require('mongoose');
const Schema = mongoose.Schema;
const mongooseSequence = require('mongoose-sequence');
const CourierSchema = new Schema(
  {
    courierId:{
        type: Number,
    },
    date:{
      type: String,
      required:[true,'date is required']
    },
    from:{
        type:String,
        required:[true,'from where courier is comed is important']
       
    },
    to:{
        type:String,
        required:[true,'which one is recieved is important']

    },
    content:{
        type:String,
        required:[true,'type of content is required']

    },
    courierAgency:{
        type:String,
        required:[true,'courier agency is important']

    },
    airWaybill:{
        type:String,
        required:[true,'courier agency is important']
        
    },
    approved:{
        type:String,
        default:""
       
    },
    recieved:{
        type:String,
        default:""
       
    },
   
  },
  {
    versionKey: false
}
 
);

CourierSchema.plugin(mongooseSequence(mongoose), { inc_field: 'courierId' });
const Courier= mongoose.model("Courier", CourierSchema);
module.exports=Courier;
