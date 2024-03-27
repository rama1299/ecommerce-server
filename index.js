require("dotenv").config();
const express = require('express')
const morgan = require('morgan')
const indexRouter = require('./routes/index.js')
const errorHandler = require('./middlewares/errorHandler.js')
const app = express()
const port = process.env.PORT

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', indexRouter)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });