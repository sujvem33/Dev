const movie = {
    Synopsis1 : {displayInfo : "Finding Nemo is a 2003 American computer-animated comedy-drama adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures. Directed by Andrew Stanton with co-direction by Lee Unkrich, the screenplay was written by Stanton, Bob Peterson, and David Reynolds from a story by Stanton. The film stars the voices of Albert Brooks, Ellen DeGeneres, Alexander Gould, Willem Dafoe, and Geoffrey Rush. It tells the story of an overprotective clownfish named Marlin who, along with a regal blue tang named Dory, searches for his missing son Nemo. Along the way, Marlin learns to take risks and comes to terms with Nemo taking care of himself."},
    Trailer1  : {displayInfo : '<iframe width="560" height="315" src="https://www.youtube.com/embed/O1BoLmwd1G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    Synopsis2 : {displayInfo : "La La Land is a 2016 American romantic musical comedy-drama film written and directed by Damien Chazelle. It stars Ryan Gosling and Emma Stone as a struggling jazz pianist and an aspiring actress, respectively, who meet and fall in love while pursuing their dreams in Los Angeles. John Legend, Rosemarie DeWitt, Finn Wittrock, and J. K. Simmons appear in supporting roles"},
    Trailer2 : {displayInfo : '<iframe width="560" height="315" src="https://www.youtube.com/embed/0pdqf4P9MB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    Synopsis3 : {displayInfo : "Wonder Woman is a 2017 superhero film based on the DC Comics character of the same name. Produced by Warner Bros. Pictures, Atlas Entertainment and Cruel and Unusual Films, and distributed by Warner Bros. Pictures, it is the fourth installment of the DC Extended Universe, the first film of the Wonder Woman trilogy within the shared universe, and a prequel/spin-off to Batman v Superman: Dawn of Justice. Directed by Patty Jenkins and written by Allan Heinberg from a story by Heinberg, Zack Snyder and Jason Fuchs, Wonder Woman stars Gal Gadot in the title role, alongside Chris Pine, Robin Wright, Danny Huston, David Thewlis, Connie Nielsen and Elena Anaya. It is the second live action theatrical film featuring Wonder Woman following her debut in Batman v Superman: Dawn of Justice. In Wonder Woman, the Amazon princess Diana sets out to stop World War I, believing the conflict was started by the longtime enemy of the Amazons, Ares, after American pilot and spy Steve Trevor crash-lands on their island Themyscira and informs her about it."},
    Trailer3 : {displayInfo :'<iframe width="560" height="315" src="https://www.youtube.com/embed/5HUlW21v1fQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}

}


const clickbutton = (str) => {

    let display = document.querySelector(".displayhere")
    display.innerHTML= `${movie[str].displayInfo}`
    console.log(display.innerHTML);

}