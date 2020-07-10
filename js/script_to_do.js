var btn = document.querySelector(".btn_task");
var btn_limpar = document.querySelector(".limpar");
var entrada = document.querySelector(".task");

var tarefas = document.querySelector(".tarefas");
var btn_excluir = document.querySelectorAll(".excluir");

console.log(btn_excluir);

btn.addEventListener("click", () => {

	//Retirar espaços desnecessários	
	entrada.value = entrada.value.trim();	

    //Se for vazio, retorna
	if(entrada.value == "")
		return;
 
    //Pega o valor da entrada;
	var valor = entrada.value;
	//Excluir o que está na caixa de texto
    entrada.value = "";

    // Criação do item
	var item 	 = 	document.createElement("div");
	// Defino sua class
    item.className = "item";
	// Crio o conteúdo do item que é do tipo tag <p>.
    var new_para = 	document.createElement("p");
    // Para esse conteúdo adiciono um texto a ele que é o valor digitado pelo usuário.
	new_para.appendChild(document.createTextNode(String(valor)));
    // Adiciono ao item o conteúdo criado.
	item.appendChild(new_para);
    //Crio o ícone
    var icon = document.createElement("span");
    //Adiciono as classes do ícone
    icon.classList.add("material-icons", "excluir");
    // Adiciono ao ícone o texto remove, dessa forma é referenciado o ícone remove do Material Icons
    icon.appendChild(document.createTextNode("remove"));
    // Adiciono ao item o ícone criado
    item.appendChild(icon);
    //Adiciono o item à lista de tarefas
	tarefas.appendChild(item);
})

btn_limpar.addEventListener("click", () => {

	console.log(tarefas.childNodes);
	console.log(tarefas.childNodes.length);

	for (var i = tarefas.childNodes.length - 1; i >= 0; i--) {
		tarefas.removeChild(tarefas.childNodes[i]);
	}
})

btn_excluir[1].addEventListener("click", () => {
    teste = document.querySelectorAll(".excluir");
    console.log(btn_excluir);
    console.log(teste);
    document.body.style.background = "red";
})