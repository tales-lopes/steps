console.log("Toggle Tabs JavaScript.");

hist_btn = document.querySelector("#hist");
met_btn = document.querySelector("#met");
vis_btn = document.querySelector("#vis");

historia = document.querySelector("#historia");
metas = document.querySelector("#metas");
visao = document.querySelector("#visao");

console.log(historia.style.display);

hist_btn.addEventListener("click", () =>{
	hist_btn.style.backgroundColor = "white";
	met_btn.style.backgroundColor = "#e5e5e5";
	vis_btn.style.backgroundColor = "#e5e5e5";

	historia.style.display = "flex";
	metas.style.display = "none";
	visao.style.display = "none";

})

met_btn.addEventListener("click", () =>{
	met_btn.style.backgroundColor = "white";
	vis_btn.style.backgroundColor = "#e5e5e5";
	hist_btn.style.backgroundColor = "#e5e5e5";

	metas.style.display = "flex";
	visao.style.display = "none";
	historia.style.display = "none";
})
vis_btn.addEventListener("click", () =>{
	vis_btn.style.backgroundColor = "white";
	met_btn.style.backgroundColor = "#e5e5e5";
	hist_btn.style.backgroundColor = "#e5e5e5";

	visao.style.display = "flex";
	metas.style.display = "none";
	historia.style.display = "none";
})