let mongoose=require('mongoose');
const Schema = mongoose.Schema;
var valid = require('validator');
const UserSchema = new Schema(
  {
    firstName:{
      type:String,
      required:[true,'name is required'],
    },
  lastName:{
      type:String,
      required:[true,'name is required'],
    },
  email:{
      type:String,
      validate: {
          validator: function(v) {
            if (v) { // Only validate if v (email) is provided
              return valid.isEmail(v); // Validate email format
            }
            return true
          },
          message: props => `${props.value}  please provide a valid email!`
        },
    default:""
  }, 
  password:{
      type:String,
      validate: {
          validator: function(v) {
           console.log('password is',v)   
           return valid.isStrongPassword(v)
          },
          message: props => `${props.value} contains minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 `
        },
    
      required:[true,'password is required'],
  },
  mobile:{
      type:String,
      required:[true]  
  },
 role:{
  type:String,
  default:"User"
 },
 userId:{
  type:String,
  required:[true,'user id is required']

 }
   
  },
 
);

const User= mongoose.model("User", UserSchema);

module.exports=User;
