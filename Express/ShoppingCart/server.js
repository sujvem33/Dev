const express = require('express')
const app = express()
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Clothes = require('./models/clothes.js'); 
const Shoes = require('./models/shoes.js');
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
    res.send('Welcome to Shopping Cart!')
})

app.get("/clothes", (req, res)=>{
    Clothes.find({},(err, allClothes) =>{
        console.log(err);
        res.render('Index', {
            products : allClothes, type : "clothes"
        })
    })
});

app.get("/shoes", (req, res)=>{
    Shoes.find({},(err, allShoes) =>{
        console.log(err);
        res.render('Index', {
            products : allShoes, type : "shoes"
        })
    })
});





app.get('/clothes/seed', (req,res)=> {
    Clothes.create([
        {
            Name: 'Crop top',
            Description : 'good',
            Price : '30.0',
            Category : 'clothes',
            isAvailable:true,
            
        },
        {
            Name: 'Skirt',
            Description : 'Vgood',
            Price : '20.0',
            Category : 'clothes',
            isAvailable:true,
            
        }
        

],(err,data)=>{
    res.redirect('/clothes')
})
})

app.get('/shoes/seed', (req,res)=> {
    Shoes.create([
        {
            Name: 'Shoe1',
            Description : 'good',
            Price : '30.0',
            Category : 'shoes',
            isAvailable:true,
            
        },
        {
            Name: 'Shoe2',
            Description : 'Vgood',
            Price : '50.0',
            Category : 'shoes',
            isAvailable:true,
            
        }
        

],(err,data)=>{
    res.redirect('/shoes')
})
})




app.get('/clothes/new', (req, res) =>{
  res.render('New', {category:"clothes"})
})

app.get('/shoes/new', (req, res) =>{
  res.render('New', {category:"shoes"})
})

app.post('/clothes',(req, res) => {
    if(req.body.isAvailable === "on"){
        req.body.isAvailable = true;
    }
    else{
        req.body.isAvailable = false;
    }
    Clothes.create(req.body, (err, createdProduct) => {
        console.log(err);
    })
    res.redirect('/clothes')
})

app.post('/shoes',(req, res) => {
  if(req.body.isAvailable === "on"){
      req.body.isAvailable = true;
  }
  else{
      req.body.isAvailable = false;
  }
  Shoes.create(req.body, (err, createdProduct) => {
      console.log(err);
  })
  res.redirect('/shoes')
})

app.get("/clothes/:id/edit", (req, res) => {
    Clothes.findById(req.params.id, (err, foundproduct) => {
      console.log(err)
      if (!err) {
        res.render("Edit", {
          product: foundproduct
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

  app.get("/shoes/:id/edit", (req, res) => {
    Shoes.findById(req.params.id, (err, foundproduct) => {
      console.log(err)
      if (!err) {
        res.render("Edit", {
          product: foundproduct, type : "shoes"
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

app.put("/clothes/:id", (req, res) => {
    if (req.body.isAvailable === "on") {
      req.body.isAvailable = true;
    } else {
      req.body.isAvailable = false;
    }
    Clothes.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
        console.log(err)
      console.log(updatedProduct);
      res.redirect(`/clothes/${req.params.id}`);
    });
  });
  

app.delete("/clothes/:id", (req, res) => {
    Clothes.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/clothes");
    });
  });
  app.delete("/shoes/:id", (req, res) => {
    Shoes.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/shoes");
    });
  });

app.get("/clothes/:id", (req, res) => {
    Clothes.findById(req.params.id, (err,foundproduct) => {
        console.log(err)
      console.log("Found: ", foundproduct);
      res.render("Show", {
        product: foundproduct
      });
    });
  });
app.get("/shoes/:id", (req, res) => {
    Shoes.findById(req.params.id, (err,foundproduct) => {
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