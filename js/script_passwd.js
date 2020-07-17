btn_ver = document.querySelector(".ver");
input_password = document.querySelector("#password_in");
bar = document.querySelector("#barra");
requisites = document.querySelectorAll("li");

low_up = 0;
low = 0;
up = 0;
num = 0;
num_flag = 0;
special = 0;
special_flag = 0;
more_8 = 0;

btn_ver.addEventListener("click", () => {
    if(input_password.type == "text"){
        input_password.setAttribute("type", "password"); 
        btn_ver.classList.remove("fa-eye-slash");
        btn_ver.classList.add("fa-eye");
    } else{
        input_password.setAttribute("type", "text");
        btn_ver.classList.remove("fa-eye");
        btn_ver.classList.add("fa-eye-slash");
    }
})

function change_requisites(num, more_8, special, low_up) {
    console.log(requisites);
    console.log(num, more_8, special, low_up);
    
    if(low_up == 1)
        requisites[0].style.color = "#00ff40";
    else 
        requisites[0].style.color = "black";
    
    if(num == 1)
        requisites[1].style.color = "#00ff40";
    else
        requisites[1].style.color = "black";
    
    if(special == 1)
        requisites[2].style.color = "#00ff40";
    else
        requisites[2].style.color = "black";
    
    if(more_8 == 1)
        requisites[3].style.color = "#00ff40";
    else
        requisites[3].style.color = "black";
}

function progress_bar(num, more_8, special, low_up){
    progresso = ((num + more_8 + special + low_up) / 4) * 100;
    console.log(progresso);
    
    console.log(bar.width);
    bar.style.width = String(progresso) + "%";
    
    switch (progresso){
        case 25:
        bar.style.backgroundColor = "red";
        break;
        case 50:
        bar.style.backgroundColor = "orange";
        break;
        case 75:
        bar.style.backgroundColor = "yellow";
        break;
        case 100:
        bar.style.backgroundColor = "#00ff40";
        break;
        default:
        bar.style.backgroundColor = "#d1d1d1";
    }
}

input_password.addEventListener("keyup", () => {
    console.log(input_password.value);
    
    var valor = input_password.value;
    var num_chr = "0123456789";
    var sym_chr = "!@#$%&*()"
    var uperlet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerlet = "abcdefghijklmnopqrstuvwxyz"
    
    if(valor.length >= 8 && more_8 == 0)
        more_8 = 1;
    else if(valor.length < 8 && more_8 == 1)
        more_8 = 0;
        
    if(low == 1 && up == 1){
        low_up = 1;
    }
    else{
        low_up = 0;
    }
    
    for(var i = 0; i < valor.length; i++){
        if(num_chr.includes(valor[i])){ 
            num = 1;
            num_flag = 1;
        }
        else if(sym_chr.includes(valor[i])){
            special = 1;
            special_flag = 1;
        }
        
        else if(uperlet.includes(valor[i])){
            low = 1;
        }
    
        if(lowerlet.includes(valor[i])){
            up = 1;
        }
    }
    
    if(low == 1 && up == 1){
        low_up = 1;
    } 
    else
        low_up = 0;
    
    if(special_flag == 0 && special == 1){
        special = 0;
    }
    
    if(num_flag == 0 && num == 1){
        num = 0;
    }
    
    progress_bar(num, more_8, special, low_up);
    change_requisites(num, more_8, special, low_up);
    
    low = 0;
    up = 0;
    special_flag = 0;
    num_flag = 0;
})