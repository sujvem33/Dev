const express = require('express')
const app = express()
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Coord = require('./models/coords.js'); 
const Dress = require('./models/dresses.js'); 
const Lehenga = require('./models/lehengas.js'); 
const Saree = require('./models/sarees.js'); 
const Suit = require('./models/suits.js'); 
const User = require("./models/users.js");
const Cart = require("./models/cart.js");
const bcrypt = require("bcrypt");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const cors = require('cors');

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
app.use(express.json())
app.use(cors());


const store = new MongoStore({
  mongoUrl: process.env.MONGO_URI,
  collection: 'sessions',
  stringify: false
});

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: store,
}))

//--------------------------------User Routes--------------------

app.get("/userlogin", (req, res)=>{
      res.render('Userlogin')
});

app.get("/userlogin/signup", (req, res) => {
  res.render("Signup");
});

app.get("/userlogin/login", (req, res) => {
  res.render("Login");
});


app.post("/userlogin/signup", async (req, res) => {
  // encrypt password
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  // create the New user
  User.create(req.body)
    .then((user) => {
      // redirect to login page
      res.redirect("/userlogin/login");
    })
    .catch((error) => {
      // send error as json
      console.log(error);
      res.json({ error });
    });
});

app.post("/userlogin/login", async (req, res) => {
  const { username, password } = req.body;
  // search for the user
  User.findOne({ username })
    .then(async (user) => {
      // check if user exists
      if (user) {
        // compare password
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          // redirect to fruits page if successful
          res.redirect("/");
        } else {
          // error if password doesn't match
          res.json({ error: "password doesn't match" });
        }
      } else {
        // send error if user doesn't exist
        res.json({ error: "user doesn't exist" });
      }
    })
    .catch((error) => {
      // send error as json
      console.log(error);
      res.json({ error });
    });
});






//------------------------------Cart Route--------------

app.get("/cart",  (req, res) => {
    res.render("cart")
})

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
            Name: 'Sera',
            Description : 'Yellow & White Printed Two-Piece',
            Price : '₹1379',
            Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15006958/2021/8/3/95baf9d7-c9d4-48d6-b3fe-46a4e3d13f4c1627996163324YellowPrintedTwoPieceJumpsuitSet1.jpg',
            isProductAvailable:true,
            
        },
        {
            Name: 'Ahalyaa',
            Description : 'Women Black & Golden Solid Top with Skirt & Ethnic Jacket',
            Price : '₹1567',
            Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9088427/2021/12/17/5bcf22fe-7f36-4fe8-8557-013c78fdc4111639733739779-Ahalyaa-Women-Black--Golden-Solid-Top-with-Skirt--Ethnic-Jac-1.jpg',
            isProductAvailable:false,
        },
        {
          Name: 'Libas',
          Description : 'Women Stylish Blue Printed Top with Trousers',
          Price : '₹701',
          Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17553034/2022/4/4/e5209171-8ecd-440d-abae-8dd5f63eceb41649065841827-Libas-Women-Co-Ords-8331649065841468-2.jpg',
          isProductAvailable:true,
          
      },
      {
        Name: 'DIVYANK',
        Description : 'Women Pretty Pink Printed Top with Palazzos',
        Price : '₹1199',
        Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16877552/2022/2/10/cf842e07-32b7-4421-9f61-052c8b3058e21644493778327-Women-Multicolor-Printed-jumpsuit-6151644493777492-2.jpg',
        isProductAvailable:true,
        
    }

],(err,data)=>{
    res.redirect('/coords')
})
})


app.get('/dresses/seed', (req,res)=> {
    Dress.create([
        {
            Name: 'Azira',
            Description : 'Women Blue Printed Peplum Pure Cotton Top',
            Price : '₹794',
            Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2019/8/17/6462741b-a5b0-42fa-94ef-8a37ca42ce7a1566020245079-1.jpg',
            isProductAvailable:true,
            
        },
        {
            Name: 'Anouk',
            Description : 'Blue Pure Cotton Bandhani Printed V-Neck Flared Sleeves Kaftan Kurti',
            Price : '₹539',
            Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16897458/2022/2/21/4bbb9435-ed5b-4732-897d-ce89209d39961645443802885-Anouk-Women-Kurtas-5621645443802441-5.jpg',
            isProductAvailable:true,
        },
        {
          Name: 'Rain & Rainbow',
          Description : 'Women Green & Pink Floral Printed Sequinned Pure Cotton Kurti',
          Price : '₹988',
          Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17606376/2022/4/4/7fd8e8fe-963a-4601-bc9a-4806a356cb131649073184276-Rain--Rainbow-Women-Kurtis-8521649073183773-1.jpg',
          isProductAvailable:true,
      },
      {
        Name: 'Sangria',
        Description : 'Green Floral High-Low Pure Cotton Top With Bell Sleeves',
        Price : '₹759',
        Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8420329/2022/7/21/4719c3bd-495d-4d9c-b3d9-8e4ff53306021658380631175-Sangria-Green-Floral-High-Low-Pure-Cotton-Top-With-Bell-Slee-1.jpg',
        isProductAvailable:false,
    }

],(err,data)=>{
    res.redirect('/dresses')
})
})


app.get('/lehengas/seed', (req,res)=> {
    Lehenga.create([
        {
            Name: 'Amrutam Fab',
            Description : 'White & Pink Printed Semi-Stitched Lehenga & Unstitched Blouse With Dupatta',
            Price : '₹1539',
            Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19415964/2022/8/6/a7723afd-4f50-4a49-9b70-2971f87ad5461659785808535LehengaCholi1.jpg',
            isProductAvailable:true,
            
        },
        {
            Name: 'Lavanya The Label',
            Description : 'Pink & Gold-Toned Ready to Wear Lehenga & Blouse With Dupatta',
            Price : '₹5669',
            Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19461486/2022/8/10/f914988b-df59-4880-98da-1c7154d59b6c1660135722702LavanyaTheLabelPinkGold-TonedReadytoWearLehengaBlouseWithDup1.jpg',
            isProductAvailable:true,
        },
        {
          Name: 'NEERU',
          Description : 'MULTICOLOR COLOR SILK FABRIC LEHENGA CHOLI',
          Price : '₹6669',
          Image : 'https://cdn.shopify.com/s/files/1/0646/5516/3636/products/4769dc526multicolor-2_540x.jpg?v=1657419071',
          isProductAvailable:true,
      },
      {
        Name: 'Singhania',
        Description : 'RED COLOR BANARAS FABRIC LEHENGA CHOLI',
        Price : '₹8969',
        Image : 'https://cdn.shopify.com/s/files/1/0646/5516/3636/products/47271295red-2_540x.jpg?v=1657418669',
        isProductAvailable:true,
    }

],(err,data)=>{
    res.redirect('/lehengas')
})
})


app.get('/sarees/seed', (req,res)=> {
    Saree.create([
        {
            Name: 'Vasundhara',
            Description : 'Blue & Brown Floral Printed Ruffled Ready To Wear Saree',
            Price : '₹4229',
            Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19419314/2022/8/6/35e7c375-8274-4cfc-8039-79682afdca7f1659802544690Sarees2.jpg',
            isProductAvailable:true,
            
        },
        {
            Name: 'Sangria',
            Description : 'Blue & Gold-Toned Embellished Embroidered Pure Georgette Saree',
            Price : '₹1799',
            Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19697312/2022/8/27/9517724b-1e22-4f48-a45e-1eb419ed7b8d1661608300494SareeBlouse1.jpg',
            isProductAvailable:false,
        },
        {
          Name: 'Ethnic Yard',
          Description : 'Green & Pink Woven Design Saree',
          Price : '₹1699',
          Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19769106/2022/9/3/98483770-eded-407b-b5ce-481e6b9a563e1662216604418SareeBlouse1.jpg',
          isProductAvailable:true,
          
      },
      {
        Name: 'Mitera',
        Description : 'Red Silk Blend Embroidered Saree',
        Price : '₹989',
        Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17737468/2022/4/2/c3fd3bdf-8e5e-4f48-8b6f-f0379b88632f1648884914411SangriaWomenRedSarees2.jpg',
        isProductAvailable:true,
        
    }

],(err,data)=>{
    res.redirect('/sarees')
})
})





app.get('/suits/seed', (req,res)=> {
    Suit.create([
        {
            Name: 'Ahalyaa',
            Description : 'Women Beige Floral Printed Regular Gotta Patti Kurta with Palazzos & With Dupatta',
            Price : '₹1560',
            Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg',
            isProductAvailable:true,
            
        },
        {
          Name: 'Anouk',
          Description : 'Women Olive Green Ethnic Motifs Yoke Design Kurta with Palazzos & With Dupatta',
          Price : '₹1890',
          Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14399812/2021/6/11/61ac3eaa-c553-4230-9458-28aa7bd088301623391467623-Anouk-Women-Kurta-Sets-961623391466905-11.jpg',
          isProductAvailable:true,
          
      },
      {
        Name: 'Kalini',
        Description : 'Women Blue Floral Printed Kurta with Trousers & With Dupatta',
        Price : '₹1400',
        Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18119958/2022/5/2/7989345f-3f73-4aa1-b802-4343ddee58da1651485521793KALINIWomenBlueEmbroideredPanelledKurtiwithTrousersWithDupat7.jpg',
        isProductAvailable:true,
        
    },
    {
      Name: 'Varanga',
      Description : 'Women Navy Blue & Beige Ethnic Motifs Printed Keyhole Neck Gotta Patti Kurta',
      Price : '₹1680',
      Image : 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg',
      isProductAvailable:true,
      
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