const resume = {
    
    
    TechnicalSkills : {Info : "<ul><li>Operating Systems:Windows XP,10 & 11, Microsoft windows server 2003 & 2008, MAC OS, Unix/Linux Networking Protocols: Knowledge of TCP/IP & IPX/SPX</li><li>Programming Languages:HTML, CSS and javascript</li><li>Software Applications:Microsoft Office Packages, Github, Visual Studio</li></ul>"},
    Education : {Info : "<ul><li>Bachelor’s of Computer Science  Engineering | JNTU, Hyderabad( 07/2011 – 05/2015)</li></ul>"},
    ProExperience : {Info : "QA Tester | EPAM SYSTEMS INDIA PVT LTD | Hyderabad, India	(07/2015- 04/2021)<ul><li>Project 1:  BlackBerry (ISVs and Technology) - 06/2018-04/2021</li><li>Project 2:  LOWE’S-AQAF (Architecture Quality Assurance Framework) - 01/2018-05/2018</li><li>Project 3:  EDMC (Education Management Corporation) - 07/2017-12/2018</li><li>Project 4:  SNL (Savings and Loans) - 10/2015-06/2017</li></ul>"}
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
   

