let datum = new Date()
let den = datum.getDate()
let mesic = datum.getMonth()+1
let rok = datum.getFullYear()
let dny = ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]
let x = datum.getDay()
document.getElementById("datum").innerText="Dnes je "+dny[x]+" "+den+". "+mesic+". "+rok

function cas(){
let datum = new Date()
let hodina = datum.getHours()
let minuta = datum.getMinutes()
let sekunda = datum.getSeconds();

if(minuta<10)
	minuta = "0"+minuta
if(sekunda<10)
	sekunda = "0"+sekunda


document.getElementById("cas").innerText="Je právě "+hodina+":"+minuta+":"+ sekunda
setTimeout("cas()",1000)
}
cas()

function pozdrav(){
	let cas = new Date()
	let hodina = cas.getHours()
	if ((hodina>5)&&(hodina<=9))
		document.getElementById('pozdrav').innerText="Dobré ráno"
	else if ((hodina>=9)&&(hodina<11))
		document.getElementById('pozdrav').innerText="Dobré dopoledne"
	else if ((hodina>=11)&&(hodina<13))
		document.getElementById('pozdrav').innerText="Dobré poledne"
	else if ((hodina>=13)&&(hodina<18))
		document.getElementById('pozdrav').innerText="Dobré odpoledne"
	else if ((hodina>=18)&&(hodina<21))
		document.getElementById('pozdrav').innerText="Dobrý večer"
	else
		document.getElementById('pozdrav').innerText="Dobrou noc"
}
pozdrav()
