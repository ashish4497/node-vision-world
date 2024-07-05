// server.js
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const sampleRoute = require('./routes/sampleRoutes');
const userRoute = require('./routes/userRoutes');
const mongoose = require('mongoose');


const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

//DB connection
const uri = process.env.MONGO_URI;
console.log(uri,"ututu");
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// const dbUrl = 'mongodb+srv://ashish1210:vashisht@1210@cluster0.be3qukx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// mongoose.connect(dbUrl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
// .then((result)=> console.log('connect to the server'))
// .catch((err) => console.log(err))



// Routes
app.use('/', sampleRoute);
app.use('/user', userRoute);

// Error Handling Middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Start the server
const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
