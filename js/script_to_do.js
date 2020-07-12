var btn = document.querySelector(".btn_task");
var btn_limpar = document.querySelector(".limpar");
var entrada = document.querySelector(".task");

var tarefas = document.querySelector(".tarefas");
var btn_excluir = document.querySelectorAll(".excluir");
var item_risco = document.querySelectorAll(".item");

function write_task () {
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

    item.addEventListener('click', () => {
        item.classList.toggle("risco");
    })
    
    icon.addEventListener('click', () => {
        tarefas.removeChild(item);
    })
}

function clear_tasks(){
    console.log(tarefas.childNodes);
	console.log(tarefas.childNodes.length);

	for (var i = tarefas.childNodes.length - 1; i >= 0; i--) {
		tarefas.removeChild(tarefas.childNodes[i]);
	}
}

btn.addEventListener("click", () => {
    write_task();
})

btn_limpar.addEventListener("click", () => {
    clear_tasks();
})

entrada.addEventListener("keyup", (event) => {
    
    if(event.keyCode === 13) {
        write_task();
    }
})

document.onkeyup = function(e) {
    
    if(e.altKey && e.which == 76){
        clear_tasks();
    }
};