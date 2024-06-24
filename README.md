@qui
Ciao ragazzi,
esercizio di oggi: (insicurissimo) password generator
nome repo: js-pwdgen-wannabe
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
Come prima cosa da oggi realizzate un file README.md in cui scrivete il testo dell'esercizio e la sua scomposizione in sotto problemi. Alla realizzazione del file README.md corrisponde un push obbligatorio.
Oggi non avete un numero minimo di push da eseguire ma da domani sì.
Bonus: se volete potete dare uno stile alla pagina.
Buon lavoro!

soluzione

problema 1 "chiedi all'utente il suo nome"
1.dichiaro una variabile per il nome
2.assegno a questa variabile, il valore recuperato tramite un primo propmt

problema 2 "chiedi all'utente il suo cognome"
1.dichiaro una variabile per il cognome
2.assegno a questa variabile, il valore recuperato tramite un secondo propmt

problema 3 "chiedi all'utente il suo colore preferito"
1.dichiaro una variabile per il colore preferito
2.assegno a questa variabile, il valore recuperato tramite un terzo propmt

problema 4 "scrivi sulla pagina nomecognomecolorepreferito23"
1.dichiaro una variabile "full_string"
2.assegno a questa variabile i valori delle altre variabili dentro una stringa
2.creo l'id "template_literal" all'interno dell'html
4.richiamo l'id "template_literal" con document.getElementById('template_literal').innerHTML
5.assegno a "document.getElementById('template_literal').innerHTML" la variabile "full_string"

