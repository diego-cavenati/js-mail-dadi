// MAIL
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


// creo l'array con la mail degli autorizzati
const authorisedEmail = [
    "gianni@gmail.com",
    "luigi@gmail.com",
    "mario@gmail.com"
]

// creo la variabile con il click dell'utente
const userClick = document.getElementById("userClick")

//prendo il campo inserito dall'utente
userClick.addEventListener("click", function() {

    // prendo la mail dell'utente dal form
    const userEmail = document.getElementById("emailUser").value;

    // creo un loop per leggere tutti i valori contenuti nell'array
    for (let i = 0; i < authorisedEmail.length; i++) {
        
        let mailOk = authorisedEmail[i];
        console.log(mailOk);
        console.log(userEmail);
        
        // controlla che sia nella lista di chi può accedere
        if (userEmail === mailOk) {
            // stampa un messaggio appropriato sull’esito del controllo
            document.getElementById(`security_message`).innerHTML = "Sei autorizzato a proseguire";

        } else {
            // stampa un messaggio appropriato sull’esito del controllo
            document.getElementById(`security_message`).innerHTML = "Non sei autorizzato a proseguire";

        }
    }

}
)

// DADI GAME
// definisco la variabile sia per il numero del computer sia er il numero dell utente


