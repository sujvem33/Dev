class cat{
    constructor (gender, eyeColor, furrColor, name ){
        this.gender = gender
        this.eyeColor = eyeColor
        this.furrColor = furrColor
        this.name = name
        
    }

    walk() {
        console.log(`${this.name} is walking`)
        console.log(this.x);
    }
    purr(){
     
        console.log(`${this.name} meows`)
    }
    eat(){
        console.log(`${this.name} eats cat food`)
    }

}
const soup =new cat("female", "blue", "brown", "soup")
console.log(soup)
soup.walk()
soup.purr()
soup.eat()
const fluffy = new cat("male", "brown", "white", "fluffy")
console.log(fluffy)
fluffy.walk()
fluffy.purr()
fluffy.eat()
