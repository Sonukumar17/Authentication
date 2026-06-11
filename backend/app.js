const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

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

const port = process.env.PORT;
app.listen(port,(req,res)=>{
  console.log(`Server is  http://localhost:${port}`)
})