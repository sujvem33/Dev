const express = require('express');
const app = express();
const ejs = require('ejs')
app.set('view engine', ejs)


//Magic 8 Ball
const answers = ["It is certain", 
"It is decidedly so",
 "Without a doubt", 
 "Yes definitely",
 "You may rely on it", 
 "As I see it yes", 
 "Most likely", 
 "Outlook good","Yes",
  "Signs point to yes", 
  "Reply hazy try again", 
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now", 
  "Concentrate and ask again",
  "Don't count on it", 
  "My reply is no", 
  "My sources say no",
  "Outlook not so good", 
"Very doubtful"]



app.get('/magic', (req, res) => {
    res.send('Ask a question in the url')
});
app.get('/magic/:question', (req, res) => {
    let randomAnswer = answers[Math.floor(Math.random()*answers.length)]
    res.send('<h1>' + req.params.question + "?" + randomAnswer + '</h1>')
    
});



//greeting
app.get('/', (req, res) => {
    res.send('Hello, Sujitha')
});

app.get('/greeting', (req, res) => {
    res.send('Hello, S')
});

app.get('/greeting/:name', (req, res) => {
    res.send('Hello there,' + req.params.name)
});


//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let total = parseInt(req.params.total)
    let tip = parseInt(req.params.tipPercentage)
    let tipTotal = (total/(100/tip)).toString();
    res.send(tipTotal)
});

//fibbonacci
app.get('/fibonacci/:num/', (req, res) => {
    let fib =[0,1]
    for(i=2; i <100 ; i++){
        newFib = fib[i-1] + fib[i-2]
        fib.push(newFib)
    }
    let message = 0
    fib.forEach(el =>{
    if(parseInt(req.params.num) === el){
        message += 1
        
    }
})
    if(message > 0){
        res.send("Very good, it is fibbonacci")
    }
    else {
        res.send("I can tell this is not a fibbonacci number")
    }
})




app.listen(3000,() => {
    console.log('listening');
});