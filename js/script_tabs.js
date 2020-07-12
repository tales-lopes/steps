btn = document.querySelectorAll(".material-icons");
console.log(btn);
var i;

for(i = 0; i < btn.length; i++){
    const pos = i;
    btn[pos].addEventListener("click", () => {
        btn[pos].parentElement.nextElementSibling.classList.toggle("empty");
        if(btn[pos].textContent == "add_circle_outline")
            btn[pos].textContent = "remove_circle_outline";
        else
            btn[pos].textContent = "add_circle_outline";
    })
}
