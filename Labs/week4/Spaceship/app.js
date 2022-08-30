class ship {

    constructor(hull, firepower, accuracy){
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
}
let USSHelloWorld = new ship (20, 5, .7)
console.log(USSHelloWorld);

function randomNumber(min, max){
    return Math.random() * (max-min) + min
}


let alienteam =[]
const newShip = () =>{
    let randomHull = randomNumber(3,6)
    let randomFirepower = randomNumber(2,4)
    let randomAccuracy = randomNumber(.6,.8)
    const alienShip = new ship(randomHull,randomFirepower, randomAccuracy)
    alienteam.push(alienShip)
}
for(let i=0; i<6;i++){
    newShip()
}
console.log(alienteam);

function attackalien(){
        let atackbutton = document.querySelector(".attack1")  
        atackbutton.addEventListener('click', () => {
            
    if (USSHelloWorld.accuracy < Alien1.accuracy){
        console.log('You have been hit!');       
    }
    else {
        console.log('You Missed');
    }
} 
)};




