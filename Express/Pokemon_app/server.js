const express = require('express')
const app = express()
const methodOverride = require('method-override');

const pokemon = require('./models/pokemon')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// app.use(methodOverride('_method'));
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));


app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon', (req, res)=>{
    res.render('Index.jsx', {pokemon})
})

app.get('/pokemon/:id', (req, res)=>{
    res.render('Show.jsx', {pokemons : pokemon[req.params.id]})
})

app.delete('/pokemon/:id', (req, res)=>{
      pokemon.splice(req.params.id, 1);
     res.redirect('/pokemon'); 
});



app.listen(3000, (req, res) =>{
    console.log(`listening on 3000`);
    
})