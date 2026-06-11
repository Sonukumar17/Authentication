const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');

async function login(req,res){
  const{email,password} = req.body;
  if(!email||!password){
    return res.status(400).json({
      message :"Please fill all requirement"
    })
  }
  const isUser = await userModel.findOne({email})
  if(!isUser){
     return res.status(400).json({
      message :"User does't exist"
    })
  }
  const isMatch = await bcrypt.compare(password,isUser.password);
  if(!isMatch){
    return res.status(400).json({
      message :"Password is Incorrect"
    })
  }
  return res.status(200).json({
    message:"User logged in successfully"
  })
}

module.exports = login;