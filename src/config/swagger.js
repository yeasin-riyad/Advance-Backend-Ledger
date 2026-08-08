const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.3",

    info: {
      title: "Ledger API",
      version: "1.0.0",
      description: "API documentation for Bank Transaction",
    },

    servers: [
      {
        url: "https://advance-backend-ledger.onrender.com/api",
        description: "Deployment server",
      },
    ],

tags: [
  {
    name: "Auth",
    description: "Authentication APIs",
  },
  {
    name: "Accounts",
    description: "Account management APIs",
  },
  {
    name: "Transactions",
    description: "Transaction and fund transfer APIs",
  },
],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },

        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "token",
        },
      },
    },
  },

  apis: [
    "./src/docs/**/*.js",
  ],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;