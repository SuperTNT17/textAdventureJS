let readlineSync = require('readline-sync')
start()

function question(){
    let answer = ''
    while (answer != 'a' && answer != 'b') {
        answer = readlineSync.question('Wat doe je? (A / B): ').toLowerCase()
    }
    return answer
}

function start(){
    console.log("Het is een lange, moeizame dag geweest, je hebt een glas melk opgewarmd en gaat in bed nog een beetje liggen lezen. De zon is al onder en de maan is verscholen achter donkere wolken, waardoor het enige licht in je slaapkamer afkomstig is van de kandelaar naast je hoofdeinde. Na een tijdje leg je het boek naast je neer, blaas je de kaars uit en sluit je je ogen, je vaag bewust zijnde van de regen die buiten op je raam klettert. Langzaam zak je weg en val je in een diepe slaap...")
    console.log("")
    console.log("Plots schrik je op van een heftige donderstoot. Je weet niet hoe laat het is, maar je ziet nog steeds geen steek, de regen is nog niet opgehouden - integendeel, het is alleen maar harder gaan regenen - en het is zelfs begonnen te onweren. Wanneer een tweede bliksemschicht je raam oplicht zie je tot je afschuw het groene hoofd van een goblin naar binnen turen. Geschokt val je uit je bed en grijp je vergeefs naar het zwaard dat op de gang en dus niet naast je bed ligt. Intussen veegt de goblin de regendruppels van het natte raam en besef je dat hij je heeft gezien. Je besluit om...")
    console.log('A. te blijven liggen. B. ...naar buiten te gaan.')
    answer = question()
    if (answer == 'a') {
        text14()
    }
    else{
        text13()
    }
}

function text13(){
    console.log("")
}

function text14(){
    console.log("je kruipt snel weer je bed in trekt je kussen over je hoofd heen en probeert de gebeurtenissen van zoeven te vergeten het zal maar je verbeelding zijn geweest vast te wijten aan het overslaan van het middageten de vorige dag verdere bliksemschichten blijven uit en je begint al enigszins te ontspannen wanneer er twee korte kloppen bij je voordeur weerklinken de kloppen blijven maar doorgaan en je beseft dat je er toch iets aan zult moeten doen je...")
    console.log("A. ...doet de deur open. B. ...gaat in de kelder schuilen.")
    answer = question()
}
