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