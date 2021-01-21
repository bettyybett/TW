
//-------------------------------------------------
//exercitiul 1 regexp
function validate()
{
	//=====TELEFON====
  var nr_tel = document.getElementById('telefon').value;
  var regex_telefon = new RegExp("[0][7][2-8][0-9]{7}");
  var rez_telefon = regex_telefon.test(nr_tel);
  if(nr_tel=="")
	  document.getElementById("rezultat_telefon").innerHTML="Introduceti un numar de telefon";
  else 
	  if(rez_telefon==false)
	  document.getElementById("rezultat_telefon").innerHTML="Telefonul introdus este incorect"
  else document.getElementById("rezultat_telefon").innerHTML="";
  //=====SITE====
  var site_info = document.getElementById('site').value;
  var regex_site = new RegExp("w{3}[.]([a-z0-9]{3,})[.][com]");
  var rez_site = regex_site.test(site_info);
    if(site_info=="")
	  document.getElementById("rezultat_site").innerHTML="Introduceti site-ul dvs.";
  else if(rez_site==false)
	  document.getElementById("rezultat_site").innerHTML ="Site-ul introdus este incorect";
   else document.getElementById("rezultat_site").innerHTML="";
   //=====CNP====
  var cnp_info = document.getElementById('cnp').value;
  var regex_cnp = new RegExp("[1-2][0-9]{12}");
  var rez_cnp = regex_cnp.test(cnp_info);
   if(cnp_info=="")
	  document.getElementById("rezultat_cnp").innerHTML="Introduceti CNP-ul dvs.";
  else if(rez_cnp==false)
	  document.getElementById("rezultat_cnp").innerHTML ="CNP-ul introdus este incorect";
   else document.getElementById("rezultat_cnp").innerHTML="";
   //=====SERIE====
  var serie_info = document.getElementById('serie_buletin').value;
  var regex_serie = new RegExp("[A-Z][A-Z][0-9]{6}");
  var rez_serie = regex_serie.test(serie_info);
   if(serie_info=="")
	  document.getElementById("rezultat_serie").innerHTML="Introduceti seria buletinului dvs.";
  else 
	if(rez_serie==false)
	  document.getElementById("rezultat_serie").innerHTML ="Seria introdusa este incorecta";
   else document.getElementById("rezultat_serie").innerHTML="";
   //=====EMAIL====
  var email_info = document.getElementById('email').value;
  var regex_email = new RegExp("([a-zA-Z0-9]{3,})[@]([a-z]{3,})[.][com]");
  var rez_email = regex_email.test(email_info);
   if(email_info=="")
	  document.getElementById("rezultat_email").innerHTML="Introduceti email-ul dvs.";
  else 
	if(rez_email==false)
	  document.getElementById("rezultat_email").innerHTML ="Email-ul introdus este incorect";
   else document.getElementById("rezultat_email").innerHTML="";
}
//-------------------------------------------------
//exercitiul 2 calcul varsta
function varsta(){
	

	var an_utilizator = document.getElementById('anul').value;
	var luna_utilizator =  document.getElementById('luna').value;
	var zi_utilizator = document.getElementById('ziua').value;
	var d=new Date();
	var luna_curenta = d.getMonth() + 1;
	var an_curent=d.getFullYear();
	var ziua_curenta=d.getDate();
	var ora = d.getHours();
	var min= d.getMinutes();
	var sec = d.getSeconds();
	var rez1;
	if(luna_curenta<luna_utilizator)
		rez1= Math.abs(12-luna_utilizator+luna_curenta);
	else rez1=luna_curenta-luna_utilizator;
	var rez2;
	if(luna_curenta<luna_utilizator)
		rez2 = an_curent-an_utilizator -1;
	else rez2 = an_curent-an_utilizator;
	var rez3;
	if(ziua_curenta<zi_utilizator)
		rez3 = 30-parseInt(zi_utilizator)+ziua_curenta;
	else rez3= ziua_curenta-zi_utilizator;
	var varsta = "Varsta ta este: "+rez2+" ani, "+ rez1+ " luni, "+rez3+ " zile, "+ora+" ore, "+min+" minute, "+ sec+" secunde.";
	document.getElementById("rezvarsta").innerHTML = varsta;
	
}
function interval()
{
	var interv=setInterval(varsta,1000)
}
//-------------------------------------------------
//exercitiul 3 titlu setTimeout

var i = 0;
var speed = 100;
var ttl="Welcome to my work";
var j = ttl.length/2;
var lung=ttl.length;
var prima_jum=new String();
var doua_jum=new String();
prima_jum=ttl.slice(0,j);
doua_jum=ttl.slice(j,ttl.length);

function titlu()
{
	if (i < ttl.length/2) {
		document.getElementById("titlu").textContent += this.prima_jum.charAt(i);
		i++;
		setTimeout(titlu, speed);	
		document.getElementById("titlu1").textContent += this.doua_jum.charAt(doua_jum.length-i);
	}
}
//-------------------------------------------------
//exercitiul 4 text settimeout
var cnt = 0;
var speed = 300;
var cul_1="Purple: Means Royalty, nobility, spirituality, ceremony, mysterious, transformation, wisdom, enlightenment, cruelty, honor, arrogance, mourning, temperance.";
var cul_split=cul_1.split(" ");
var res;
function culori_mov()
{
	if(cnt<cul_split.length)
	{
	res=cul_split[cnt]+" ";
	
	document.getElementById("purple").textContent += res;
	cnt++;
	setTimeout(culori_mov, speed);
    }
    //alert(document.getElementById("titlu").textContent);
	/*if (cnt < cul_1.length) {
    document.getElementById("purple").textContent += cul_1.charAt(cnt);
    cnt++;
    setTimeout(culori, speed);
		
	}*/
	
		
	
}

var c = 0;
var speed = 300;
var cul_2="Turquoise symbolizes calm. Teal symbolizes sophistication. Aquamarine symbolizes water. Lighter turquoise has a feminine appeal.";
var cul2_split=cul_2.split(" ");
var r;
function culori_turq()
{
	if(c<cul2_split.length)
	{
	r=cul2_split[c]+" ";
	
	document.getElementById("turquoise").textContent += r;
	c++;
	setTimeout(culori_turq, speed);
    }
	
}
//-------------------------------------------------
//exercitiul 5 fundalul
function bkground()
{var culoare_fundal = document.getElementById("bkg").value;
 var regex_cul = new RegExp("[#]([a-zA-Z0-9]{6})");
 var rez_cul = regex_cul.test(culoare_fundal);
 if(rez_cul==true)
	document.body.style.background = culoare_fundal;
else
	alert("culoare invalida")
}

//-------------------------------------------------
//exercitiul 6 animatie


var earth = new Image();
function init() {
  earth.src = 'bulb.png';

  requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.clearRect(0, 0, 300, 300); // stergem canvasul

  ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
  ctx.save();
  ctx.translate(100, 100);

  //timpul cu care se misca in cerc
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 15) * time.getSeconds() + ((2 * Math.PI) / 15000) * time.getMilliseconds());
  ctx.drawImage(earth, -12, -12,100,100);
  ctx.restore();
  ctx.stroke();

  requestAnimationFrame(draw);
}
init();
//-------------------------------------------------
//exercitiul 7 ravase
var string_array = [];
string_array = string_array.concat("Ar trebui sa verifici culoarea mov, poate ti se potriveste!");
string_array = string_array.concat("Poti schimba culoarea fundalului cum vrei tu!");
string_array = string_array.concat("Hei! Calculeaza-ti varsta la sectiunea 'Vasta utilizatorului'.");
string_array = string_array.concat("Ar trebui sa verifici sectiunea culoarii turcoaz!");
string_array = string_array.concat("Hei! Sper sa iti placa titlul meu interesant!");
function ravase()
{
	res = string_array[Math.floor(Math.random()*string_array.length)];
	document.getElementById("ravase").innerHTML = res;
}
//-------------------------------------------------
//window on load ul
window.onload = function()
{	ravase();
	titlu();
	culori_mov();
	culori_turq()
	
	
}
