valor = document.querySelector("#number p");
// Botões
aum = document.querySelector("#aum");
zerar = document.querySelector("#zerar");
dim = document.querySelector("#dim");

function cor (){

	if(Number(valor.innerHTML) > 0){
		valor.style.color = "#254F8D";
	}
	else if(Number(valor.innerHTML) < 0){
		valor.style.color = "#FF0101";
	}
	else{
		valor.style.color = "#453C3C";
	}
}

aum.addEventListener('click', () => {
	valor.innerHTML = Number(valor.innerHTML) + 1;
	cor();
})

zerar.addEventListener('click', () => {
	valor.innerHTML = 0;
	cor();
})

dim.addEventListener('click', () => {
	valor.innerHTML = Number(valor.innerHTML) - 1;
	cor();
})

cor();