var color = ["#2EFC99", "#FF0101", "#453C3C", "#254F8D", "orange", "#D9FFED"];

var position = 0;

function change_color(){
	document.body.style.backgroundColor = color[position];
	if(position == color.length - 1){
		position = 0;
	} else{
		position++;
	}
}