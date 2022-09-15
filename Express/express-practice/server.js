// Load express
const express = require('express');
const path = require('path');
const logger = require ('./logger')


// Create our express app
const app = express();


//set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
// app.get('/', function (req, res) {
//   res.send('<h1>Hello Express!</h1>');
// });

// app.get('/home', function (req, res) {
//     res.send('<h1>Welcome to Homepage</h1>');
//   });
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});