const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const connectDB = require('./db/db')
connectDB();
const userRoutes = require('./routes/user.routes')
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
  res.send('Server is running...')
})
app.use('/user/',userRoutes);


const port = process.env.PORT;
app.listen(port,(req,res)=>{
  console.log(`Server is  http://localhost:${port}`)
})