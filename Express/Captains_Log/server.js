const express = require('express')
const app = express()
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const CaptainLogs = require('./models/captainlogs.js'); 
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


app.get('/', (req, res)=>{
    res.send('Welcome to the Captains Log!')
})

app.get("/captainlogs", (req, res)=>{
    CaptainLogs.find({},(err, allLogs) =>{
        console.log(err);
        res.render('Index', {
            captainlogs : allLogs
        })
    })
});

app.get('/captainlogs/seed', (req,res)=> {
    CaptainLogs.create([
        {
            title: 'Log1',
            entry : 'blahblahblah',
            isShipBroken:true,
        },
        {
            title: 'Log2',
            entry : 'yeahyeahyeah',
            isShipBroken:false,
        }

],(err,data)=>{
    res.redirect('/captainlogs')
})
})

app.get('/captainlogs/new', (req, res) =>{
    res.render('New', {})
})

app.post('/captainlogs',(req, res) => {
    if(req.body.isShipBroken === "on"){
        req.body.isShipBroken = true;
    }
    else{
        req.body.isShipBroken = false;
    }
    CaptainLogs.create(req.body, (err, createdLog) => {
        console.log(err);
    })
    res.redirect('/captainlogs')
})

app.get("/captainlogs/:id/edit", (req, res) => {
    CaptainLogs.findById(req.params.id, (err, foundLog) => {
      console.log(err)
      if (!err) {
        res.render("Edit", {
          captainlog: foundLog,
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

app.put("/captainlogs/:id", (req, res) => {
    if (req.body.isShipBroken === "on") {
      req.body.isShipBroken = true;
    } else {
      req.body.isShipBroken = false;
    }
    CaptainLogs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
        console.log(err)
      console.log(updatedLog);
      res.redirect(`/captainlogs/${req.params.id}`);
    });
  });
  

app.delete("/captainlogs/:id", (req, res) => {
    CaptainLogs.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/captainlogs");
    });
  });

app.get("/captainlogs/:id", (req, res) => {
    CaptainLogs.findById(req.params.id, (err,foundLog) => {
        console.log(err)
      console.log("Found: ", foundLog);
      res.render("Show", {
        captainlog: foundLog,
      });
    });
  });


app.listen(3000, () => {
    console.log('listening');
});