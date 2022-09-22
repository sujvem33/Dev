const express = require('express')
const app = express()
const methodOverride = require('method-override');

const pokemon = require('./models/pokemon')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'));


app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon', (req, res)=>{
    res.render('Index.jsx', {poke:pokemon})
})

app.get('/pokemon/:id', (req, res)=>{
    res.render('Show.jsx', {pokemon : pokemon[req.params.id], poke:pokemon})
})

app.delete('/pokemon/:id', (req, res)=>{
      pokemon.splice(req.params.id, 1);
     res.redirect('/pokemon'); 
});

app.get('/pokemon/:id/edit', (req, res)=>{
    res.render('Edit.jsx', {pokemon : pokemon[req.params.id], poke:pokemon})      
});

app.put('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1, req.body);
    console.log(pokemon);
        res.redirect(`/pokemon`);
    
});


app.listen(3000, (req, res) =>{
    console.log(`listening on 3000`);
    
})