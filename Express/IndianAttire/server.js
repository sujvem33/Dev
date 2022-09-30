const express = require('express')
const app = express()
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Coord = require('./models/coords.js'); 
const Dress = require('./models/dresses.js'); 
const Lehenga = require('./models/lehengas.js'); 
const Saree = require('./models/sarees.js'); 
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



//------------------------------HomePage Route--------------
app.get('/', (req, res)=>{
    res.render('Home')
})


//-------------------New Route------------------------------------
app.get('/coords/new', (req, res) =>{
    res.render('New', {type:"coords"})
})

app.get('/dresses/new', (req, res) =>{
    res.render('New', {type:"dresses"})
})

app.get('/lehengas/new', (req, res) =>{
    res.render('New', {type:"lehengas"})
})

app.get('/sarees/new', (req, res) =>{
    res.render('New', {type:"sarees"})
})

app.get('/suits/new', (req, res) =>{
    res.render('New', {type:"suits"})
})

//--------------------Post Routes------------------------------

app.post('/coords',(req, res) => {
    if(req.body.isProductAvailable === "on"){
        req.body.isProductAvailable = true;
    }
    else{
        req.body.isProductAvailable = false;
    }
    Coord.create(req.body, (err, createdProduct) => {
        console.log(err);
    })
    res.redirect('/coords')
})

app.post('/dresses',(req, res) => {
    if(req.body.isProductAvailable === "on"){
        req.body.isProductAvailable = true;
    }
    else{
        req.body.isProductAvailable = false;
    }
    Dress.create(req.body, (err, createdProduct) => {
        console.log(err);
    })
    res.redirect('/dresses')
})

app.post('/lehengas',(req, res) => {
    if(req.body.isProductAvailable === "on"){
        req.body.isProductAvailable = true;
    }
    else{
        req.body.isProductAvailable = false;
    }
    Lehenga.create(req.body, (err, createdProduct) => {
        console.log(err);
    })
    res.redirect('/lehengas')
})

app.post('/sarees',(req, res) => {
    if(req.body.isProductAvailable === "on"){
        req.body.isProductAvailable = true;
    }
    else{
        req.body.isProductAvailable = false;
    }
    Saree.create(req.body, (err, createdProduct) => {
        console.log(err);
    })
    res.redirect('/sarees')
})

app.post('/suits',(req, res) => {
    if(req.body.isProductAvailable === "on"){
        req.body.isProductAvailable = true;
    }
    else{
        req.body.isProductAvailable = false;
    }
    Suit.create(req.body, (err, createdProduct) => {
        console.log(err);
    })
    res.redirect('/suits')
})
//--------------------------Edit Routes --------------------------
app.get("/coords/:id/edit", (req, res) => {
    Coord.findById(req.params.id, (err, foundProduct) => {
      console.log(err)
      if (!err) {
        res.render("Edit", {
          product: foundProduct, type : "coords"
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

  app.get("/dresses/:id/edit", (req, res) => {
    Dress.findById(req.params.id, (err, foundProduct) => {
      console.log(err)
      if (!err) {
        res.render("Edit", {
          product: foundProduct, type : "dresses"
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

  app.get("/lehengas/:id/edit", (req, res) => {
    Lehenga.findById(req.params.id, (err, foundProduct) => {
      console.log(err)
      if (!err) {
        res.render("Edit", {
          product: foundProduct, type : "lehengas"
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

  app.get("/sarees/:id/edit", (req, res) => {
    Saree.findById(req.params.id, (err, foundProduct) => {
      console.log(err)
      if (!err) {
        res.render("Edit", {
          product: foundProduct, type : "sarees"
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });


  app.get("/suits/:id/edit", (req, res) => {
    Suit.findById(req.params.id, (err, foundProduct) => {
      console.log(err)
      if (!err) {
        res.render("Edit", {
          product: foundProduct, type : "suits"
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

//----------------------------Update Route----------------------------

app.put("/coords/:id", (req, res) => {
    if (req.body.isProductAvailable === "on") {
      req.body.isProductAvailable = true;
    } else {
      req.body.isProductAvailable = false;
    }
    Coord.findByIdAndUpdate(req.params.id, req.body, (err, updatedproduct) => {
        console.log(err)
      console.log(updatedproduct);
      res.redirect(`/coords/${req.params.id}`);
    });
});


app.put("/dresses/:id", (req, res) => {
    if (req.body.isProductAvailable === "on") {
      req.body.isProductAvailable = true;
    } else {
      req.body.isProductAvailable = false;
    }
    Dress.findByIdAndUpdate(req.params.id, req.body, (err, updatedproduct) => {
        console.log(err)
      console.log(updatedproduct);
      res.redirect(`/dresses/${req.params.id}`);
    });
});


app.put("/lehengas/:id", (req, res) => {
    if (req.body.isProductAvailable === "on") {
      req.body.isProductAvailable = true;
    } else {
      req.body.isProductAvailable = false;
    }
    Lehenga.findByIdAndUpdate(req.params.id, req.body, (err, updatedproduct) => {
        console.log(err)
      console.log(updatedproduct);
      res.redirect(`/lehengas/${req.params.id}`);
    });
});


app.put("/sarees/:id", (req, res) => {
    if (req.body.isProductAvailable === "on") {
      req.body.isProductAvailable = true;
    } else {
      req.body.isProductAvailable = false;
    }
    Saree.findByIdAndUpdate(req.params.id, req.body, (err, updatedproduct) => {
        console.log(err)
      console.log(updatedproduct);
      res.redirect(`/sarees/${req.params.id}`);
    });
});


app.put("/suits/:id", (req, res) => {
    if (req.body.isProductAvailable === "on") {
      req.body.isProductAvailable = true;
    } else {
      req.body.isProductAvailable = false;
    }
    Suit.findByIdAndUpdate(req.params.id, req.body, (err, updatedproduct) => {
        console.log(err)
      console.log(updatedproduct);
      res.redirect(`/suits/${req.params.id}`);
    });
});


//-------------------------Get Routes---------------------


app.get("/coords", (req, res)=>{
    Coord.find({},(err, allCoords) =>{
        console.log(err);
        res.render('Index', {
            products : allCoords, type : "coords"
        })
    })
});

app.get("/dresses", (req, res)=>{
    Dress.find({},(err, allDresses) =>{
        console.log(err);
        res.render('Index', {
            products : allDresses, type : "dresses"
        })
    })
});

app.get("/lehengas", (req, res)=>{
    Lehenga.find({},(err, alllehengas) =>{
        console.log(err);
        res.render('Index', {
            products : alllehengas, type : "lehengas"
        })
    })
});

app.get("/sarees", (req, res)=>{
    Saree.find({},(err, allSarees) =>{
        console.log(err);
        res.render('Index', {
            products : allSarees, type : "sarees"
        })
    })
});

app.get("/suits", (req, res)=>{
    Suit.find({},(err, allSuits) =>{
        console.log(err);
        res.render('Index', {
            products : allSuits, type : "suits"
        })
    })
});

//------------------------------Seed Routes--------------------------

app.get('/coords/seed', (req,res)=> {
    Coord.create([
        {
            Name: 'Coord1',
            Description : 'good',
            Price : '30.0',
            Image : 'Image',
            isProductAvailable:true,
            
        },
        {
            Name: 'Coord2',
            Description : 'Vgood',
            Price : '20.0',
            Image : 'Image',
            isProductAvailable:false,
        }

],(err,data)=>{
    res.redirect('/coords')
})
})


app.get('/dresses/seed', (req,res)=> {
    Dress.create([
        {
            Name: 'Dress1',
            Description : 'good',
            Price : '30.0',
            Image : 'Image',
            isProductAvailable:true,
            
        },
        {
            Name: 'Dress2',
            Description : 'Vgood',
            Price : '20.0',
            Image : 'Image',
            isProductAvailable:false,
        }

],(err,data)=>{
    res.redirect('/dresses')
})
})


app.get('/lehengas/seed', (req,res)=> {
    Lehenga.create([
        {
            Name: 'Lehenga1',
            Description : 'good',
            Price : '30.0',
            Image : 'Image',
            isProductAvailable:true,
            
        },
        {
            Name: 'Lehenga2',
            Description : 'Vgood',
            Price : '20.0',
            Image : 'Image',
            isProductAvailable:false,
        }

],(err,data)=>{
    res.redirect('/lehengas')
})
})


app.get('/sarees/seed', (req,res)=> {
    Saree.create([
        {
            Name: 'Saree1',
            Description : 'good',
            Price : '30.0',
            Image : 'Image',
            isProductAvailable:true,
            
        },
        {
            Name: 'Saree2',
            Description : 'Vgood',
            Price : '20.0',
            Image : 'Image',
            isProductAvailable:false,
        }

],(err,data)=>{
    res.redirect('/sarees')
})
})





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






//--------------------Show Routes-----------------------


app.get("/coords/:id", (req, res) => {
    Coord.findById(req.params.id, (err,foundproduct) => {
        console.log(err)
      console.log("Found: ", foundproduct);
      res.render("Show", {
        product: foundproduct , type : "coords"
      });
    });
  });

  app.get("/dresses/:id", (req, res) => {
    Dress.findById(req.params.id, (err,foundproduct) => {
        console.log(err)
      console.log("Found: ", foundproduct);
      res.render("Show", {
        product: foundproduct , type : "dresses"
      });
    });
  });


  app.get("/lehengas/:id", (req, res) => {
    Lehenga.findById(req.params.id, (err,foundproduct) => {
        console.log(err)
      console.log("Found: ", foundproduct);
      res.render("Show", {
        product: foundproduct , type : "lehengas"
      });
    });
  });


  app.get("/sarees/:id", (req, res) => {
    Saree.findById(req.params.id, (err,foundproduct) => {
        console.log(err)
      console.log("Found: ", foundproduct);
      res.render("Show", {
        product: foundproduct , type : "sarees"
      });
    });
  });


  app.get("/suits/:id", (req, res) => {
    Suit.findById(req.params.id, (err,foundproduct) => {
        console.log(err)
      console.log("Found: ", foundproduct);
      res.render("Show", {
        product: foundproduct , type : "suits"
      });
    });
  });


//---------------------Delete Routes-------------------

app.delete("/coords/:id", (req, res) => {
    Coord.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/coords");
    });
});

app.delete("/dresses/:id", (req, res) => {
    Dress.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/dresses");
    });
});

app.delete("/lehengas/:id", (req, res) => {
    Lehenga.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/lehengas");
    });
});

app.delete("/sarees/:id", (req, res) => {
    Saree.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/sarees");
    });
});

app.delete("/suits/:id", (req, res) => {
    Suit.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/suits");
    });
});


//------------------------Port-------------------
app.listen(3000, () => {
    console.log('listening');
});