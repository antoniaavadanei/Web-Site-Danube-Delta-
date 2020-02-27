window.onload=function()
{
	///array
	var pesti, text;
	pesti = ["Sipul",
		"Cleanul mic",
		"Salaul vargat",
		"Fasa mare",
		"Cleanul dungat"];

text = "<ol>";
pesti.forEach(myFunction);
text += "</ol>";
document.getElementsByClassName("tabel")[0].innerHTML = text;
console.log(text);
function myFunction(value) {
  text += "<li>" + value + "</li><br>";
} 

}