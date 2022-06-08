
const email = prompt('Qual è la tua email?', 'm96francesco@gmail.com');

// La tua Array contente le email
const emailAttendibili = ['pasqualino45@icloud.com','m96francesco@gmail.com', 'pippo@outlook.com', 'gattinifelici@libero.it', 'antoniolatrippa.caseificio@live.it'];
// Controlla tramite ciclo for l'array delle email attendibili.
let rightEmail = false;
for(let i = 0; i < emailAttendibili.length; i++) {

    const thisEmail = emailAttendibili[i];

    if ( thisEmail === email ) {
        rightEmail = true;
    }
}

// Se l'email rientra come corretta alert che dice "email corretta" altrimenti "Hai sbagliato email"
if (rightEmail) {
    alert( "l'email è corretta");
} else {
    alert ('Hai sbagliato email');
}

