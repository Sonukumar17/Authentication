const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ClickJacking Finder API",
      version: "1.0.0",
      description: "API for checking authentication vulnerabilities",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // path to route files
};

module.exports = swaggerJsdoc(options);