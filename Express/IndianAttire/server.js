const express = require('express')
const app = express()
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Suit = require('./models/suits.js'); 
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

app.get("/suits", (req, res)=>{
    Suit.find({},(err, allSuits) =>{
        console.log(err);
        res.render('Index', {
            products : allSuits, type : "suits"
        })
    })
});



app.get('/suits/seed', (req,res)=> {
    Suit.create([
        {
            Name: 'Suit1',
            Description : 'good',
            Price : '30.0',
            Image : 'https://i0.wp.com/thehandloomproject.in/wp-content/uploads/2022/03/63C511FB-7DF2-43EC-BFA0-40CFEBFE994A-scaled.jpeg?resize=1024%2C1024&ssl=1',
            isProductAvailable:true,
            
        },
        {
            Name: 'Suit2',
            Description : 'Vgood',
            Price : '20.0',
            Image : 'yes',
            isProductAvailable:false,
        }

],(err,data)=>{
    res.redirect('/suits')
})
})

app.get("/suits/:id", (req, res) => {
    Suit.findById(req.params.id, (err,foundproduct) => {
        console.log(err)
      console.log("Found: ", foundproduct);
      res.render("Show", {
        product: foundproduct
      });
    });
  });

app.listen(3000, () => {
    console.log('listening');
});