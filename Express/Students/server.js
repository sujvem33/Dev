const express = require('express')
const app = express()
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Student = require('./models/students.js'); 
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
    res.send('Welcome to the Students portfolio!')
})

app.get("/students", (req, res)=>{
    Student.find({},(err, allStudents) =>{
        console.log(err);
        res.render('Index', {
            students : allStudents
        })
    })
});

app.get('/students/seed', (req,res)=> {
Student.create([
        {
            name: 'Sujitha',
            gpa : '3.0',
            isPassing:true,
        },
        {
            name: 'Siva',
            gpa : '4.0',
            isPassing:false,
        }

],(err,data)=>{
    res.redirect('/students')
})
})

app.get('/students/new', (req, res) =>{
    res.render('New', {})
})

app.post('/students',(req, res) => {
    if(req.body.isPassing === "on"){
        req.body.isPassing = true;
    }
    else{
        req.body.isPassing = false;
    }
    Student.create(req.body, (err, createdStudent) => {
        console.log(err);
    })
    res.redirect('/students')
})

app.get("/students/:id/edit", (req, res) => {
    Student.findById(req.params.id, (err, foundStudent) => {
      console.log(err)
      if (!err) {
        res.render("Edit", {
          student: foundStudent,
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

app.put("/students/:id", (req, res) => {
    if (req.body.isPassing === "on") {
      req.body.isPassing = true;
    } else {
      req.body.isPassing = false;
    }
    Student.findByIdAndUpdate(req.params.id, req.body, (err, updatedStudent) => {
        console.log(err)
      console.log(updatedStudent);
      res.redirect(`/students/${req.params.id}`);
    });
  });
  

app.delete("/students/:id", (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/students");
    });
  });

app.get("/students/:id", (req, res) => {
    Student.findById(req.params.id, (err,foundStudent) => {
        console.log(err)
      console.log("Found: ", foundStudent);
      res.render("Show", {
        student: foundStudent,
      });
    });
  });

app.listen(3000, () => {
    console.log('listening');
});

