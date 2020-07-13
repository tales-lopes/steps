btn = document.querySelectorAll(".material-icons");

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
