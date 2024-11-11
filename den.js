function ziskejDen(){
let den = document.getElementById('den').value 
let mesic = document.getElementById('mesic').value
let rok = document.getElementById('rok').value
let denD= new Date(rok,mesic-1,den)
let x = denD.getDay()
let dny =['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota']
let hledane = dny[x]
document.getElementById('denD').innerText='Hledaný text je '+hledane
}
ziskejDen()