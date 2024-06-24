let nome = prompt('inserisci il tuo nome');
let surname = prompt('inserisci il tuo cognome');
let fav_color = prompt('inserisci il tuo colore preferito');

let full_string = `${nome} ${surname} ${fav_color} 23`
document.getElementById('template_literal').innerHTML = full_string