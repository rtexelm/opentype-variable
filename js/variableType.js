




(function() {

	// let voice = document.getElementsByTagName("span");
	let voice = document.getElementById("voice");

	console.log("voice:" + voice);
	// voice.forEach((element) => console.log(element));

	// voice.forEach((i) => {
	// 	console.log(i);
	// 	newLetter(i);
	// });

	// let span_v = document.getElementById("span_v");
	// let span_o = document.getElementById("span_o");
	// let span_i = document.getElementById("span_i");
	// let span_c = document.getElementById("span_c");
	// let span_e = document.getElementById("span_e");

	// setTimeout(() => {
	//   console.log("Beep.");
	// }, "1000");

	// span_v.addEventListener("mouseover", newLetter);

	newLetter(voice);

	function newLetter(letter){	

		let wdth = Math.round(Math.random()*120); 
		let wght = Math.round(Math.random()*800); 

		console.log(wdth);
		console.log(wght);
		console.log("'wdth'" + wdth + ", 'wght'" + wght);

		console.log("newLetter:" + letter);
		
		// letter.style.color = "white";

		letter.style.fontVariationSettings = "'wdth'" + wdth + ", 'wght'" + wght;

		// voice.style.fontVariationSettings = "'wdth'" + wdth + ", 'wght'" + wght;


		//font-variation-settings: "wdth" 120, "wght" 800;
	}



})();