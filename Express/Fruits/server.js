const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI).then( () => {
    console.log('connected to mongo');
  });

const Fruit = require('./models/fruit.js');   
const fruits = require('./models/fruits')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

// app.get('/fruits/', (req, res) => {
//     res.send(fruits);
// });


app.get('/fruits', function(req, res){
    res.render('Index', { fruits: fruits });
}); 


app.get('/fruits/new', (req, res) => {
    res.render('New');
});

app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true; 
    } else { 
        req.body.readyToEat = false; 
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.send(createdFruit);
    });
});


app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('Show', {fruit:fruits[req.params.indexOfFruitsArray]});
}); 

// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// });




app.listen(3000, () => {
    console.log('listening');
});