class Human {
    constructor (eyeColor, hairColor) {
       this.legs = 2
       this.arms = 2
       this.eyeColor = eyeColor
       this.hairColor = hairColor
       
    }
    
    walk () {
       console.log("im walking")
    }
    
    gotANewJob(newJob) {
      this.occupation = newJob
    }
  }
  
  const sujitha = new Human("black", "black")
  console.log(sujitha)
  sujitha.walk()
  sujitha.gotANewJob("Freelance Developer")
  console.log(sujitha)
  