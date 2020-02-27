window.onload=function()
{
	///children
	var t=document.getElementById("b");
	var colors=["#1aff8c","#00e673","#00cc66","#00994d", "#008040","#006633"];
  b.onclick=function() {
  var c = document.getElementById("schimba_cul").children;
  var i;
  for (i = 0; i < c.length; i++) 
	{
	 if(c[i].tagName!=="IMG")
	 
		c[i].style.color = colors[i]; 
	 

	}

}

	///math
	var buton2=document.getElementsByName('but2');
	var vec=["https://www.animalzoo.ro/wp-content/uploads/2015/08/cainele-enot.jpg",
		"http://hotelultimafrontiera.com/wp-content/uploads/2016/09/143.jpg",
		"http://www.puf-stuf.ro/blog/wp-content/uploads/2014/03/fauna-deltei-dunarii-animale-common-otter-on-grass1.jpg",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9r6qzir-d9yecRBKUtBVeICSoSQs4CTGz-f66Y3af4BDFDzm&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHa7D2_Uc7NcTAy9EGNGs85KoREpv6W7HlQiUMqnPtih51MFiSg&s",
		"https://storage0.dms.mpinteractiv.ro/media/401/321/5108/11532203/1/nevastuica-cover.jpg?width=618",
		"http://4.bp.blogspot.com/-8vWBcGQ0HmI/VmVsz3R9ICI/AAAAAAAAB0I/3tXSYwR2ZmM/s1600/lynx.jpg",
		"https://cdn.knd.ro/media/521/2863/35040/17360492/3/kanal-d-2017-1031-1930-23.jpg?width=1200&height=630",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtnDqvVHuipVHWfEki_bdIeodwNNIX-NS3x0rVZv-nCNUwFpecw&s"];
	buton2[0].onclick=function()
	{
	var i=document.createElement("img");
	
	var rand=Math.floor(Math.random() * vec.length);

		i.src=vec[rand];
		document.getElementById("ad_img").appendChild(i);
		i.style.width="300px";
		i.style.height="300px";
	
	///array
	for(let i=rand;i<=vec.length-2;i++)
		vec[i]=vec[i+1];
	
	vec.pop();
	
	if(vec.length==0)
		vec=["https://www.animalzoo.ro/wp-content/uploads/2015/08/cainele-enot.jpg",
		"http://hotelultimafrontiera.com/wp-content/uploads/2016/09/143.jpg",
		"http://www.puf-stuf.ro/blog/wp-content/uploads/2014/03/fauna-deltei-dunarii-animale-common-otter-on-grass1.jpg",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9r6qzir-d9yecRBKUtBVeICSoSQs4CTGz-f66Y3af4BDFDzm&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHa7D2_Uc7NcTAy9EGNGs85KoREpv6W7HlQiUMqnPtih51MFiSg&s",
		"https://storage0.dms.mpinteractiv.ro/media/401/321/5108/11532203/1/nevastuica-cover.jpg?width=618",
		"http://4.bp.blogspot.com/-8vWBcGQ0HmI/VmVsz3R9ICI/AAAAAAAAB0I/3tXSYwR2ZmM/s1600/lynx.jpg",
		"https://cdn.knd.ro/media/521/2863/35040/17360492/3/kanal-d-2017-1031-1930-23.jpg?width=1200&height=630",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtnDqvVHuipVHWfEki_bdIeodwNNIX-NS3x0rVZv-nCNUwFpecw&s"];
	
	
	}
  
	
	
}
