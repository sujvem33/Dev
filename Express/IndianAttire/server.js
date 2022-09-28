const express = require('express')
const app = express()
const mongoose = require('mongoose');
const methodOverride = require('method-override');

require('dotenv').config()


mongoose.connect(process.env.MONGO_URI).then( () => {
    console.log('connected to mongo');
  });

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.send('Welcome !')
})



app.listen(3000, () => {
    console.log('listening');
});