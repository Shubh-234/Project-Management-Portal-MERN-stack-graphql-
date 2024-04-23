const express = require('express');
require('dotenv').config(); 

const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const colors = require('colors');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
const app = express();

//connecting to the database
connectDB();

app.use(cors());
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:process.env.NODE_ENV === 'development',
  //meaninng the graphiql will only be enable if the enviroment is development
}));
app.listen(PORT, console.log(`Server running on port ${PORT}`));
