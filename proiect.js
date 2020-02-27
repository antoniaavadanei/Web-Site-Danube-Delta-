var d;
window.onload=function()
{
	
	//set interval cu 3 pram, clearinterval
	var myVar = setInterval(myTimer, 1000,"Ora actuala:");
	var b=document.getElementById("b");
	var b2=document.getElementById("b2");
	function myTimer(param) {
		d = new Date();
		var t = d.toLocaleTimeString();
		document.getElementById("t").innerHTML=param;
		document.getElementById("demo").innerHTML = t;
	} 
	b.onclick=function(){
		clearInterval(myVar);
		
	}
		
	b2.onclick=function()
		{
			if(b.checked==false)
				alert("The time is already turned on!Please refresh the page and Click on the other radio input ");
			b.checked=false;
			var myVar2 = setInterval(myTimer, 1000,"Ora actuala:");
			function myTimer(param) {
				d = new Date();
				var t = d.toLocaleTimeString();
				document.getElementById("t").innerHTML=param;
				document.getElementById("demo").innerHTML = t;
			} 
	
			b.onclick=function(){
				b2.checked=false;
				clearInterval(myVar2);
			}
		}
	

	///localStorage+parse+stringify
	var a=document.getElementById("anc");
	a.onclick=function()
	{ 	var d=new Date();
		myObj = { "date":d.getDate(), "month":d.getMonth()+1, "year":d.getFullYear(),"hour":d.getHours(),"minutes":d.getMinutes(),"seconds":d.getSeconds() };
		myJSON = JSON.stringify(myObj);
		localStorage.setItem(a.href,myJSON);
	}
	a.onmouseover=function()
	{
	text = localStorage.getItem(a.href);
	obj = JSON.parse(text);
	var p=document.getElementById("para"); 
	if(obj.minutes<10 && obj.seconds<10)
		p.innerHTML="<strong>Data ultimei accesari:    </strong>" +obj.date+"."+obj.month+"."+obj.year+"  <strong> Ora:  </strong> "+obj.hour+":0"+obj.minutes+":0"+obj.seconds;
		else if(obj.minutes<10)
			p.innerHTML="<strong>Data ultimei accesari:    </strong>" +obj.date+"."+obj.month+"."+obj.year+"  <strong> Ora:  </strong> "+obj.hour+":0"+obj.minutes+":"+obj.seconds;
			else if (obj.seconds<10)
				p.innerHTML="<strong>Data ultimei accesari:    </strong>" +obj.date+"."+obj.month+"."+obj.year+"  <strong> Ora:  </strong> "+obj.hour+":"+obj.minutes+":0"+obj.seconds;
				else
					p.innerHTML="<strong>Data ultimei accesari:    </strong>" +obj.date+"."+obj.month+"."+obj.year+"  <strong> Ora:  </strong> "+obj.hour+":"+obj.minutes+":"+obj.seconds;
	}
	
	
	
	
	
	

///appendChild
	var a=document.getElementById("add_img");
	a.onclick=function()
	{
		var i=document.createElement("img");
		i.src="http://1.bp.blogspot.com/-VM-El6hPpEI/Uw42OaJJ3LI/AAAAAAAAAJM/M5IXlCsyt-0/w1200-h630-p-k-no-nu/harta_delta_dunarii.jpg";
		 document.getElementById("ad_img").appendChild(i);
		i.style.width="500px";
		i.style.height="auto";
		i.onclick=function()
		{
			i.remove();
		}
		
	}
	var http=require('http');
	server.listen(7000); // serverul este pornit si asculta cereri la portul 7000 al masinii locale
	console.log ('Serverul creat asteapta cereri la http://localhost:7000/');
		
}


