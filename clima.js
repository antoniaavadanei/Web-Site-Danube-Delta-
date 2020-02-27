window.onload=function()
{	
	

	var col =document.getElementsByClassName("impar");
		var i;
		for (i = 0; i < col.length; i++) {
			col[i].style.color = "#cc5200";
		}
	var col2 =document.getElementsByClassName("par");
		var i;
		for (i = 0; i < col2.length; i++) {
			col2[i].style.color = "#ff8533";
		}
	
	///date    ///toString
	var d1=new Date();
	var month_cur=d1.getMonth()+1;
	var month_cur2="0"+month_cur;
	var a=d1.getDate().toString()+"."+ month_cur2.toString()+"." + d1.getFullYear().toString();
	document.getElementById("date_cur").innerHTML = a;
	
	
	var date=(d1.getDate()+6)%30;
	if (date<7)
		var month_next=month_cur+1;
	else
		var month_next=month_cur;
	var month_next="0"+month_next;
	var b=date+"."+ month_next.toString()+"." + d1.getFullYear().toString();
	document.getElementById("date_next").innerHTML = b;
	
	
	
	
	//getComputedStyle ///classList
	var buton=document.getElementById("impar");
	buton.onclick=function ()
	{
	var elem = document.getElementById("impar");
	var prop = window.getComputedStyle(elem, null).getPropertyValue("color");
	alert(prop);
	
	document.getElementById("impar").classList.add('new');
    document.getElementById("impar").classList.remove('tare');
	var el = document.getElementsByClassName("new")[0];
	var prop2 = window.getComputedStyle(el, null).getPropertyValue("color");
	alert(prop2);
	
	}
	
	
	///addEvent true
	document.getElementById("myP2").addEventListener("click", function() {
		var obj=document.getElementById("mmove");
		var xP=window.scrollX + document.getElementById("mmove").getBoundingClientRect().left;
		alert("moved left");
		var xPos=xP-100-467;///picture size
		var transl="translate3d(" +xPos +"px,"+ "0px,0)";
		obj.style.transform=transl;
		
		
		}, true);

	document.getElementById("myDiv2").addEventListener("click", function() {
		var obj=document.getElementById("mmove");
		var xPi=window.scrollX + document.getElementById("mmove").getBoundingClientRect().left;
		alert("moved right");
		var xPosi=xPi+100;
		var trans="translate3d(" +xPosi +"px,"+ "0px,0)";
		obj.style.transform=trans;
		
		}, true);
}
