const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img");
console.log(images.length)

// Botões
const ant = document.querySelector("#ant");
const prox = document.querySelector("#prox");

let counter = 0;
const size = images[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + "px)";

prox.addEventListener('click', () =>{

	slide.style.transition = "transform 0.4 ease-in-out";

	if(counter == (images.length) - 1){
		counter = 0;	
	}
	else{
		counter++;
	}
	console.log(counter);
	slide.style.transform = 'translateX(' + (-size * counter) + "px)";
});

ant.addEventListener('click', () => {

	slide.style.transition = "transform 0.4 ease-in-out"
	if(counter == 0)
		counter = (images.length) - 1;
	else
		counter--;
	console.log(counter);
	slide.style.transform = 'translateX(' + (-size * counter) + "px)";
})