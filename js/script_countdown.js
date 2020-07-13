clock = document.querySelectorAll(".time");
input_data = document.querySelector(".calendar");
btn = document.querySelector("#send");

clock_output = new Array(4);

function show_values() {

    if(String(clock[0].classList.value).includes("disabled")){
        for(var i = 0; i < clock.length; i++) {
            clock[i].classList.remove("disabled");
        }     
    }    
}

btn.addEventListener("click", () => {    
    wanted_time = new Date(input_data.value).getTime(); 
    
    setInterval (() => {
    current_time = new Date().getTime();

    difference = wanted_time - current_time;
            
    clock_output[0] = Math.floor(difference / (60 * 60 * 24 * 1000));
    clock_output[1] = Math.floor((difference % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000));
    clock_output[2] = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
    clock_output[3] = Math.floor((difference % (60 * 1000))/ 1000);;
    
    for(var i = 0; i < clock.length; i++){
        clock[i].childNodes[1].textContent = clock_output[i];
    }   
    
    if(clock_output[0] != undefined)
        show_values();            
}, 1000);    
})