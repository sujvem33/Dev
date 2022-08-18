class pirate {
    constructor(name, age, hairType){
        this.name = name
        this.age = age
        this.hairType = hairType

    }
    steal(){
        console.log("Pirate steals gold");
    }
    sing(){
        console.log("pirates sing");
    }
    party(){
        console.log("pirates like to feast and party");
    }
}
const jollyRoger = [new pirate("calico jack", "30", "black"),
                    new pirate("francis drake", "20", "blue"),
                    new pirate("henry every" , "40", "brown")]
const blackPearl = [new pirate("captain jacksparrow", "25", "Red"),
                    new pirate("blacksmith will turner", "35", "black"),
                    new pirate("lawrence prince" , "38", "brown")]

for(let i=0; i < jollyRoger.length; i++){   
    console.log(jollyRoger[i].name);
    console.log(jollyRoger[i].age);
    console.log(jollyRoger[i].hairType);
}

for(let j=0; j < blackPearl.length; j++){   
    console.log(blackPearl[j].name);
    console.log(blackPearl[j].age);
    console.log(blackPearl[j].hairType);
}




