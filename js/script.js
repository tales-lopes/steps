function cor (){
	valor = Number(document.querySelector("#number p").innerHTML);

	if(valor > 0){
		document.querySelector("#number p").style.color = "#254F8D";
	}
	else if(valor < 0){
		document.querySelector("#number p").style.color = "#FF0101";
	}
	else{
		document.querySelector("#number p").style.color = "#453C3C";
	}
}

function aumentar(){
	valor = document.querySelector("#number p").innerHTML;
	valor = Number(valor) + 1;
	document.querySelector("#number p").innerHTML = valor;	
	cor();
}

function diminuir(){
	valor = document.querySelector("#number p").innerHTML;
	valor = Number(valor) - 1;
	document.querySelector("#number p").innerHTML = valor;
	cor();
}

function zerar(){
	document.querySelector("#number p").innerHTML = 0;
	cor();
}

cor();