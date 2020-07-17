imagens = ["images/image-1.jpg",
          "images/image-2.jpg",
          "images/image-3.jpg",
          "images/image-4.jpg",
          "images/image-5.jpg"
          ];
names = ["Tales", "Ulisses", "Raissa", "Renato", "Cauim"];
profissao = ["DATA SCIENTIST", "VENDEDOR", "ENGENHEIRA", "PROFESSOR", "GERENTE"];
resumo = [
    "Resumo do meu cargo, eu faço diversas atividades relacionadas a área de desenvolvimento web. Sou profissional há mais de 5 anos.",
    
    "Resumo do meu cargo, eu faço diversas atividades relacionadas a área de desenvolvimento web. Sou profissional há mais de 10 anos.",
    
    "Resumo do meu cargo, eu faço diversas atividades relacionadas a área de desenvolvimento web. Sou profissional há mais de 15 anos.",
    
    "Resumo do meu cargo, eu faço diversas atividades relacionadas a área de desenvolvimento web. Sou profissional há mais de 20 anos.",
    
    "Resumo do meu cargo, eu faço diversas atividades relacionadas a área de desenvolvimento web. Sou profissional há mais de 25 anos."
    ];

inicio = 0;

btn_forward = document.querySelector(".forward");
btn_backward = document.querySelector(".backward");

name_element = document.querySelector(".name");
profession_element = document.querySelector(".profession");
bio_element = document.querySelector(".bio");
image_element = document.querySelector("img");

btn_surprise = document.querySelector("#surprise button");

function next_quote () {
    if(inicio == imagens.length - 1){
        inicio = 0;
    }
    else{
        inicio++;
    }
    name_element.textContent = names[inicio];
    profession_element.textContent = profissao[inicio];
    bio_element.textContent = resumo[inicio];
    image_element.setAttribute("src", imagens[inicio]);
}

function prev_quote () {
    if(inicio == 0){
        inicio = imagens.length - 1;
    }
    else{
        inicio--;
    }
    name_element.textContent = names[inicio];
    profession_element.textContent = profissao[inicio];
    bio_element.textContent = resumo[inicio];
    image_element.setAttribute("src", imagens[inicio]);

}

function surprise_quote(){
    inicio = Math.floor(Math.random() * 5);
    
    name_element.textContent = names[inicio];
    profession_element.textContent = profissao[inicio];
    bio_element.textContent = resumo[inicio];
    image_element.setAttribute("src", imagens[inicio]);
}

btn_forward.addEventListener("click", () => {
    next_quote();
})

btn_backward.addEventListener("click", () => {
    prev_quote();
})

btn_surprise.addEventListener("click", () => {
    surprise_quote();
})

document.onkeyup = function(e){
    if(e.keyCode == 37){
        prev_quote(); 
    }
    
    if(e.keyCode == 39){
        next_quote();
    }
    
    if(e.keyCode == 83){
        surprise_quote();
    }
}