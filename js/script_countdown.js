clock = document.querySelectorAll(".time");
input_data = document.querySelector(".calendar");
console.log(input_data);

clock_output = new Array(4);

wanted_time = new Date("Jul 12, 2021").getTime();

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
}, 1000);