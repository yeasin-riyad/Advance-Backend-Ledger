const express = require('express');
const cookieParser = require('cookie-parser');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const connectDB=require('./config/db');

connectDB();


const app = express();
app.use(express.json())
app.use(cookieParser())



// Swagger Documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

/**
 * - Routes required
 */
const authRouter = require("./routes/auth.routes");
const accountRouter = require("./routes/account.routes");
const transactionRoutes = require("./routes/transaction.routes");




app.get("/", (req, res) => {
    res.send("Ledger Service is up and running")
})

app.use("/api/auth", authRouter);
app.use("/api/accounts", accountRouter)
app.use("/api/transactions", transactionRoutes)



module.exports = app;