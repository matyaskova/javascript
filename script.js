let datum = new Date()
let den = datum.getDate()
let mesic = datum.getMonth()+1
let rok = datum.getFullYear()
document.write("Dnes je "+den+". "+mesic+". "+rok)
let hodina = datum.getHours()
let minuta = datum.getMinutes()
let sekunda = datum.getSeconds()
document.write("Je právě "+hodina+":"+minuta+":"+ sekunda)