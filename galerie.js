window.onload=function()
{
	var obj=document.getElementById("move");
	var cont=document.getElementsByClassName("bod")[0];
	
	cont.onlick=addEventListener('click',move,false);
	function move(e)
	{
		var xPos=e.clientX-295;///margins
		var yPos=e.clientY-430;
		var trans="translate3d(" +xPos +"px,"+ yPos+ "px,0)";
		obj.style.transform=trans;
	}
	document.querySelector("#id-checkbox").addEventListener("click", function(event) {

		 if (document.getElementById("check").checked) {
			event.stopPropagation();
		}
	}, false);
				
				
				///am o galerie de imagini cu poze+descriere
				///cand dau click pe descriere, poza impreuna cu imaginea dispar amandoua
				///merge si cu var si cu let
				/// -----LET-------
				
	var col=document.getElementsByClassName("desc");
	alert("Click pe descrierea unei poze pentru a face intreaga imaginea sa dispara!");
	for(let im of col)
	{
		im.onclick=function()
		{
			im.parentElement.style.display = 'none';
			
		}
	
	}
	
	
    var bb=document.getElementById("bb");
	bb.onclick=function() {
		var x = document.getElementById("name").value;
		document.getElementById("name").value=" ";
		document.getElementById("demo").innerHTML += x+"<br>";
	}
}

