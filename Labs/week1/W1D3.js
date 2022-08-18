////Exercise1 
let num = 0
console.log (num)

if (num > 0)
{
    console.log("Positive")
}
if (num === 0)
{
    console.log("Neither")
}
else{
    console.log("Negative")
}



//Exercise2

let userage = 20
console.log(userage)

if (userage >= 18)
{
    console.log("Grant access") 
}
else{
    console.log("Access denied")
}

//Exercise Nestedif loop

let Num = 150
console.log(Num)
if (Num > 0 ){
    if (Num >100)
    {
        console.log('Given number is positive and Greater than 100') 
    }
    else 
    {
        console.log('Given number is positive and less than 100')
    }
}

else
 {
    console.log('Given number is Negative') 
 }



 //For loop 1

 for (let i=0; i < 10 ; i++ ){
 console.log(i)
 }

 //For loop 2

 for (let i=10; i >= 1 ; i-- ){
    console.log(i)
    }

//print odd numbers
for (let i=1; i <10  ; i+=2 ){
    console.log(i)
    }

//print even numbers
 for (let i=2; i <= 10  ; i+=2 ){
        console.log(i)

    }

//create a loop that outputs multiples of 3 starting at 6 ending at 60.

for (let i=6; i <= 60  ; i++ ){
    if (i % 3 === 0){
        console.log(i)
    }
    }

//Using the remainder % operator, write a for loop that iterates between 0 and 10 and prints all even numbers.
 for (let i=0; i <= 10  ; i++ ){
        if (i % 2 === 0 && i > 0){
            console.log(i)
        }
        }


//Grade Exercise
let grade = 90
if (grade >=80)
{
    console.log('You did a good job')
}
else if (grade >=70 && grade < 80)
{
    console.log('Keep trying')
}
else if (grade >=60 && grade < 70)
{
    console.log('ehhhh')
}
else if (grade >=55 && grade < 60)
{
    console.log('Not to good')
}
else
{
    console.log('Bad Grade But Youll Get Em Next Time')
}



//write a for loop for the given output: 10, 30, 50, 70, 90 20, 40, 60, 80, 100
    for (let i = 10; i <= 100; i += 20){
        console.log(i)

    if (i >= 90) {
        for (let i = 20; i <= 100; i += 20)
            console.log(i)
    }
}


 //FizzBuzz

 for (let i = 1 ; i <= 100 ; i++) {
    if(i % 3 === 0 && i % 5 === 0){
                console.log('FIZZBUZZ')
    }
    else if(i % 3 === 0 ){
        console.log('FIZZ')
    }
    else if(i % 5 === 0){

        console.log('BUZZ')
    }
    else {
        console.log(i)
    }
    
}



//# loop

for (let i = 0; i <= 7 ; i++ )
{
    console.log('#'.repeat(i))
}    



    

    
   

