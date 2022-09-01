class ship {
    constructor(name, hull, firepower, accuracy){
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
}
let USSHelloWorld = new ship ("captain",20, 5, .7)
// console.log(USSHelloWorld);

function randomNumber(min, max){
    return Math.random() * (max-min) + min
}
let alienteam =[]
const newShip = () =>{
    let randomHull = randomNumber(3,6)
    let randomFirepower = randomNumber(2,4)
    let randomAccuracy = randomNumber(.6,.8)
    const alienShip = new ship("ALien",randomHull,randomFirepower, randomAccuracy)
    alienteam.push(alienShip)
}
for(let i=0; i<6;i++){
    newShip()
}
// console.log(alienteam);

function attack(attacker, target){
    if (Math.random() < attacker.accuracy ){
        console.log(`${target.name} has been hit!`);   
        target.hull -= attacker.firepower       
    }
    else {
        console.log(`${attacker.name} missed the target`)
    }
};
const attackbutton1 = document.querySelector(".attack1")  
attackbutton1.addEventListener('click', () => {
attack(USSHelloWorld, alienteam[0]);
    if(alienteam[0].hull <= 0 ){
        let alien = document.querySelector(".alien")
        alien.remove()
        alienteam.shift()
    }
    if(alienteam.length<=0){
        alert("Captain Wins the game")
        location.reload()
    }
});

const attackbutton2 = document.querySelector(".attack2")  
attackbutton2.addEventListener('click', () => {
attack(alienteam[0], USSHelloWorld);
    if(USSHelloWorld.hull <=0 ){
        alert("Alien Wins the game")
        location.reload()
    }

});

const retreatbutton = document.querySelector(".retreat")  
retreatbutton.addEventListener('click', () => {
    alert("Retreat mode ON, try again!!")
    location.reload()
});







