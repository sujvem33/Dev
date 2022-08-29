(function() {
	const wheel = document.querySelector('.sa');
	const startButton = document.querySelector('.spin');
	const display = document.querySelector('.display');
	const music = document.querySelector(".spin")
	

	
	
	let deg = 0;
	let zoneSize = 45; 
  
	const displaytext = {
	  1: "Congratulations, you won $100",
	  2: "Congratulations, you won $200",
	  3: "Congratulations, you won $300",
	  4: "Congratulations, you won $400",
	  5: "Congratulations, you won $600",
	  6: "Congratulations, you won $800",
	  7: "Congratulations, you won $900",
	  8: "Congratulations, you won $1000",
	}
  
	const handleWin = (actualDeg) => {
	  const winningText = Math.ceil(actualDeg / zoneSize);
	  display.innerHTML = displaytext[winningText];
	}
	startButton.addEventListener('click', () => {
		
	  display.innerHTML = "";
	  startButton.style.pointerEvents = 'none';
	  deg = Math.floor(3000 + Math.random() * 3000);
	  wheel.style.transition = 'all ease 1s';
	  wheel.style.transform = `rotate(${deg}deg)`;
	  wheel.classList.add('blur');
	  
	});
  
	wheel.addEventListener('transitionend', () => {
		wheel.classList.remove('blur');
	  startButton.style.pointerEvents = 'auto';
	  wheel.style.transition = 'none';
	  const actualDeg = deg % 360;
	  wheel.style.transform = `rotate(${actualDeg}deg)`;
	  handleWin(actualDeg);
	});

	music.addEventListener("click", function(){
	document.getElementById("myAudio").play();
});
})();
  

