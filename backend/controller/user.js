const userModel = require('../models/user.model');
const bcrypt = require('bcrypt')

async function register(req,res){
  const {fullname,email,password} = req.body;
  if(!fullname||!email||!password){
    return res.status(400).json({
      message:"Please,fill all the field"
    })
  }
  const hashedPassword = await bcrypt.hash(password,10);
  const user = await userModel.create({
    fullname,
    email,
    password:hashedPassword
  })
  return res.status(201).json({
      message:"User registered successfully"
    })
}

module.exports = register;