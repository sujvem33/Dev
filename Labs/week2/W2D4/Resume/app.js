const resume = {
    Summary : {Info : "blahbalhbalh"},
    TechnicalSkills : {Info : "jhujbhj"},
    Education : {Info : "ieuhjnm"},
    ProExperience : {Info : "gvbnm"}
}
const clickbutton = (str) => {

    let display = document.querySelector(".infobox")
    display.innerHTML= `<h1>${resume[str].Info}</h1>`
    console.log(display.innerHTML);

    let click = document.querySelectorAll('.info1')
    for(let i=0; i < click.length ; i++){
        click[i].classList.toggle('info2');
    }
}
   

