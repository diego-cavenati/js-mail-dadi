// MAIL
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


// creo l'array con la mail degli autorizzati
const authorisedEmail = [
    "gianni@gmail.com",
    "luigi@gmail.com",
    "mario@gmail.com"
]

// creo la variabile con il click dell'utente
const userClick = document.getElementById("userClick");




//prendo il campo inserito dall'utente
userClick.addEventListener("click", function() {

    // prendo la mail dell'utente dal form
    const userEmail = document.getElementById("emailUser").value;

    let securityMessage = document.getElementById(`security_message`).innerHTML = "Non sei autorizzato a proseguire";

    // creo un loop per leggere tutti i valori contenuti nell'array
    for (let i = 0; i < authorisedEmail.length; i++) {
        
        let mailOk = authorisedEmail[i];
        console.log(mailOk);
        console.log(userEmail);

        // controlla che sia nella lista di chi può accedere
        if (userEmail === mailOk) {
            // stampa un messaggio appropriato sull’esito del controllo
            securityMessage = document.getElementById(`security_message`).innerHTML = "Sei autorizzato a proseguire";

        }
    }


}
)









// DADI GAME


// definisco il click
const userClickGame = document.getElementById("userClickGame");

//prendo il click
userClickGame.addEventListener("click", function() {



    // definisco numero casuale per il pc
    const pcNumber = Math.floor((Math.random()*6) + 1); 
    console.log(pcNumber);
    // definisco numero casuale per user
    const userNumber = Math.floor((Math.random()*6) + 1);
    console.log(userNumber);

    if (pcNumber > userNumber){

        console.log("hai perso");
        document.getElementById(`win_message`).innerHTML = "Hai perso!";
    
    } else if (pcNumber < userNumber) {
    
        console.log("hai vinto");
        document.getElementById(`win_message`).innerHTML = "Hai vinto!";
    
    } else {
    
        console.log("Pareggio");
        document.getElementById(`win_message`).innerHTML = "Pareggio!";
    
    }

}
)
