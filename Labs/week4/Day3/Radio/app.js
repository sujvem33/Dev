const radio = {stations:
                            [
                                { name:"My Soundtrack", 
                                songs:[{title:"Sweet Caroline",artist:"Neil Diamond"}, 
                                {title:"Darling Nikki",artist:"Prince"}]},
                    
                                {name:"Country Haat Radio", 
                                songs:[{title:"Fernando",artist:"ABBA"}, 
                                    {title:"Mickey",artist:"Toni Basil"}]}, 
                    
                                {name:"Divine Sound Radio", 
                                songs:[{title:"My Sharona",artist:"The Knack"},
                                     {title:"We are Trayvon",artist:"Plies"}]}
                            ],
                
 randomStation(){
                let newstation = Math.floor(Math.random() *  radio.stations.length)
                randomNum = radio.stations[newstation]
                let newsong = Math.floor(Math.random() *  randomNum.songs.length)
                song = randomNum.songs[newsong]
                console.log(`Now Playing: ${song.title} by  ${song.artist}`)
 }           
                
}
radio.randomStation();



