	window.addEventListener("scroll", function(e){
  var header = document.getElementById("menu");
var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});






document.getElementById('hmenii').addEventListener("click", Open);
function Open() {
	document.getElementById('hamburgerr').style.display = "block";
}
document.getElementById('mclose').addEventListener("click", ZaklOpen);
function ZaklOpen() {
	document.getElementById('hamburgerr').style.display = "none";
}
	document.getElementById('pocetnaa').addEventListener("click", ZaklOpenn);
	document.getElementById('ekologijaa').addEventListener("click", ZaklOpenn);
	document.getElementById('energijaa').addEventListener("click", ZaklOpenn);
	document.getElementById('reciklazaa').addEventListener("click", ZaklOpenn);
	document.getElementById('bacanjehranee').addEventListener("click", ZaklOpenn);
	document.getElementById('organizacijee').addEventListener("click", ZaklOpenn);
	function ZaklOpenn() {
		document.getElementById('hamburgerr').style.display = "none";
}



  
window.onscroll = function () {funkt()};


document.getElementById("ekologija").addEventListener("mouseover", mouseOver);
document.getElementById("ekologija").addEventListener("mouseout", mouseOut);
function mouseOver() {
 document.getElementById("ekologija").style.background = "rgb(57,194,108)";
    document.getElementById("ekologija").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
    document.getElementById("ekologija").style.borderRadius = "11px";
}
function mouseOut() {
  if (document.documentElement.scrollTop < 600 || document.documentElement.scrollTop > 1100)  {
  document.getElementById("ekologija").style.background = "transparent";
}
}

document.getElementById("energija").addEventListener("mouseover", mouseOverr);
document.getElementById("energija").addEventListener("mouseout", mouseOutt);
function mouseOverr() {
 document.getElementById("energija").style.background = "rgb(57,194,108)";
    document.getElementById("energija").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
    document.getElementById("energija").style.borderRadius = "11px";
}
function mouseOutt() {
  if (document.documentElement.scrollTop <= 1101 || document.documentElement.scrollTop >= 1850)  {
  document.getElementById("energija").style.background = "transparent";
}
}

document.getElementById("reciklaza").addEventListener("mouseover", mouseOverr1);
document.getElementById("reciklaza").addEventListener("mouseout", mouseOutt1);
function mouseOverr1() {
 document.getElementById("reciklaza").style.background = "rgb(57,194,108)";
    document.getElementById("reciklaza").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
    document.getElementById("reciklaza").style.borderRadius = "11px";
}
function mouseOutt1() {
  if (document.documentElement.scrollTop <= 1850 || document.documentElement.scrollTop >= 2480)  {
  document.getElementById("reciklaza").style.background = "transparent";
}
}

document.getElementById("bacanjehrane").addEventListener("mouseover", mouseOverr2);
document.getElementById("bacanjehrane").addEventListener("mouseout", mouseOutt2);
function mouseOverr2() {
 document.getElementById("bacanjehrane").style.background = "rgb(57,194,108)";
    document.getElementById("bacanjehrane").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
    document.getElementById("bacanjehrane").style.borderRadius = "11px";
}
function mouseOutt2() {
  if (document.documentElement.scrollTop <= 2480 || document.documentElement.scrollTop >= 3100)  {
  document.getElementById("bacanjehrane").style.background = "transparent";
}
}

document.getElementById("organizacije").addEventListener("mouseover", mouseOverr3);
document.getElementById("organizacije").addEventListener("mouseout", mouseOutt3);
function mouseOverr3() {
 document.getElementById("organizacije").style.background = "rgb(57,194,108)";
    document.getElementById("organizacije").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
    document.getElementById("organizacije").style.borderRadius = "11px";
}
function mouseOutt3() {
  if (document.documentElement.scrollTop <= 3100 || document.documentElement.scrollTop > 31000)  {
  document.getElementById("organizacije").style.background = "transparent";
}
}
document.getElementById("pocetna").addEventListener("mouseover", mouseOverr4);
document.getElementById("pocetna").addEventListener("mouseout", mouseOutt4);
function mouseOverr4() {
 document.getElementById("pocetna").style.background = "rgb(57,194,108)";
    document.getElementById("pocetna").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
    document.getElementById("pocetna").style.borderRadius = "11px";
}
function mouseOutt4() {
  if (document.documentElement.scrollTop > 600 || document.documentElement.scrollTop >= 1100)  {
  document.getElementById("pocetna").style.background = "transparent";
}
}
console.log(document.documentElement.scrollTop);

function funkt() {
 if (window.innerHeight >= 700) { 

  if (document.documentElement.scrollTop > 600) {
    document.getElementById("pocetna").style.background = "transparent";
    
  } else if (document.documentElement.scrollTop < 600) {
    document.getElementById("pocetna").style.background = "rgb(57,194,108)";
    document.getElementById("pocetna").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
    document.getElementById("pocetna").style.borderRadius = "11px";
 
  }
  if (document.documentElement.scrollTop > 600) {
    document.getElementById("ekologija").style.background = "rgb(57,194,108)";
    document.getElementById("ekologija").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
    document.getElementById("ekologija").style.borderRadius = "11px";


  }if (document.documentElement.scrollTop < 600) {
     document.getElementById("ekologija").style.background = "transparent";
}
if (document.documentElement.scrollTop > 1100) {
  document.getElementById("ekologija").style.background = "transparent";

}if(document.documentElement.scrollTop > 1101){
  document.getElementById("energija").style.background = "rgb(57,194,108)";
   document.getElementById("energija").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
   document.getElementById("energija").style.borderRadius = "11px";
}if(document.documentElement.scrollTop > 1850){
document.getElementById("energija").style.background = "transparent";
}
if (document.documentElement.scrollTop < 1099) {
  document.getElementById("energija").style.background = "transparent";
}
if (document.documentElement.scrollTop > 1850) {
  document.getElementById("reciklaza").style.background = "rgb(57,194,108)";
  document.getElementById("reciklaza").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
  document.getElementById("reciklaza").style.borderRadius = "11px";
}if (document.documentElement.scrollTop < 1850) {
  document.getElementById("reciklaza").style.background = "transparent";
}if (document.documentElement.scrollTop > 2480) {
  document.getElementById("reciklaza").style.background = "transparent";
}if (document.documentElement.scrollTop > 2481) {
  document.getElementById("bacanjehrane").style.background = "rgb(57,194,108)";
   document.getElementById("bacanjehrane").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
   document.getElementById("bacanjehrane").style.borderRadius = "11px";
 }if (document.documentElement.scrollTop < 2481) {
 document.getElementById("bacanjehrane").style.background = "transparent";
 }if (document.documentElement.scrollTop > 3100) {
 document.getElementById("bacanjehrane").style.background = "transparent";
 }if (document.documentElement.scrollTop > 3100) {
 document.getElementById("organizacije").style.background = "rgb(57,194,108)";
 document.getElementById("organizacije").style.background = "linear-gradient(120deg, rgba(57,194,108,0.5) 28%, rgba(13,131,226,0.5) 95%)";
 document.getElementById("organizacije").style.borderRadius = "11px";
 }if (document.documentElement.scrollTop < 3100) {
document.getElementById("organizacije").style.background = "transparent";
 }
}
}



let api = "http://api.airvisual.com/v2/city?city=Mostar&state=federation-of-b-h&country=bosnia-herzegovina&key=9aad6d8a-c216-4aef-9282-b7c0cdc6a347";
	
	fetch(api)
	.then(function(response){
		const data = response.json();
		console.log(data);
		return data;

})
	.then(function(data){
   	const {city} = data.data;
   	const {aqius} = data.data.current.pollution;
   	switch(true){
   		case (aqius<50): 
   			document.getElementById('tekst').innerText ="Kvaliteta zraka " + city + ": " + aqius + " US AQI";
   			document.getElementById('tekst').style.color = "";
   		
   		break;
   		case (aqius<100): 
   			document.getElementById('tekst').innerText ="Kvaliteta zraka " + city + ": " + aqius + " US AQI";
   			document.getElementById('tekst').style.color = "";
   		
   		break;
   		case (aqius<151):
   			document.getElementById('tekst').innerText ="Kvaliteta zraka " + city + ": " + aqius+  " US AQI";
   			document.getElementById('tekst').style.color = "";
   		
   		break;
   		case (aqius<200):
   			document.getElementById('tekst').innerText ="Kvaliteta zraka " + city + ": " + aqius + " US AQI";
   			document.getElementById('tekst').style.color = "";
   		
   		break;
   		case (aqius>200):
   			document.getElementById('tekst').innerText ="Kvaliteta zraka " + city + ": " + aqius + " US AQI";
   			document.getElementById('tekst').style.color = "";
   		
   		break;
   	}

   	

   });


function lokacija() {

	if("geolocation" in navigator){
	navigator.geolocation.getCurrentPosition(setPosition, showError);

}
function setPosition(position){
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;

	getAir(latitude, longitude);
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      document.querySelector(".tekst").innerText = "Odbili ste lokaciju, ne možemo učitati kvalitetu zraka.";
      break;
    case error.POSITION_UNAVAILABLE:
    document.querySelector(".tekst").innerText = "Vaša lokacija je nedostupna.";
      break;
    case error.TIMEOUT:
    document.querySelector(".tekst").innerText = "Lokaciji je potrebno previše vremena za odgovor.";
      break;
    case error.UNKNOWN_ERROR:
    document.querySelector(".tekst").innerText = "Desila se misteriozna greška.";
      break;
  }
}

function getAir(latitude, longitude){
	let api = "http://api.airvisual.com/v2/nearest_city?lat=" + latitude + "&" + longitude + "&key=9aad6d8a-c216-4aef-9282-b7c0cdc6a347";
	
	fetch(api)
	.then(function(response){
		const data = response.json();
		console.log(data);
		return data;

})
	.then(function(data){
   	const {city} = data.data;
   	const {aqius} = data.data.current.pollution;
   	switch(true){
   		case (aqius<50): 
   			document.getElementById('tekst').innerText ="Kvaliteta zraka " + city + ": " + aqius + " US AQI";
   			document.getElementById('tekst').style.color = "";
   		
   		break;
   		case (aqius<100): 
   			document.getElementById('tekst').innerText ="Kvaliteta zraka " + city + ": " + aqius + " US AQI";
   			document.getElementById('tekst').style.color = "";
   		
   		break;
   		case (aqius<151):
   			document.getElementById('tekst').innerText ="Kvaliteta zraka " + city + ": " + aqius+  " US AQI";
   			document.getElementById('tekst').style.color = "";
   		
   		break;
   		case (aqius<200):
   			document.getElementById('tekst').innerText ="Kvaliteta zraka " + city + ": " + aqius + " US AQI";
   			document.getElementById('tekst').style.color = "";
   		
   		break;
   		case (aqius>200):
   			document.getElementById('tekst').innerText ="Kvaliteta zraka " + city + ": " + aqius + " US AQI";
   			document.getElementById('tekst').style.color = "";
   		
   		break;
   	}

   	

   });

};
}


let mapOptions = {
    center:[51.958, 9.141],
    zoom:10
}


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.Marker([51.958, 9.141]);
marker.addTo(map);