const readlineSync = require('readline-sync');

var player1 = "Ati"

function entry(player) {
    ways = ['jobb', 'bal'];
    var way = readlineSync.keyInSelect(ways, "Jobb vagy bal?");
    console.log('Te most ' + ways[way] + ' jaraton haladsz tovabb.');
    if (way === 0) {
        jobb(player);
    } else if(way === 1) {
        bal(player)
    } else {
        end()
    }
}

function jobb(player) {
    minerals = ['arany', 'gyemant', 'vas', 'pulyka'];
    var mineral = readlineSync.keyInSelect(minerals, "A jobb jarat egy banya lesz, mit akarsz banyaszni?");

    var eszkoz = readlineSync.question('Mivel akarsz banyaszni? ');
    switch (mineral) {
        case 0: 
            arany(player, eszkoz)
        default: 
        end()
    }
}
function bal(player) {
    ways1 = ['erdo', 'kikerul'];
    var way1 = readlineSync.keyInSelect(ways1, "Egy erdo elott allsz, valasz hogy kikerulod vagy keresztul mesz rajta.");
    console.log('Te most ' + ways1[way1] + ' jaraton haladsz tovabb.');
    if (way1 === 0) {
        erdo(player)
    } else if (way1 === 1) {
        kikerul(player)  
    } else {
        end()
    }
}

function kikerul(player) {
    ways2 = ['enter', 'masikut'];
    var way2 = readlineSync.keyInSelect(ways2, "Egy elhagyatott hazhoz ertel enter vagy kikerulod?");
    console.log('Te a ' + ways2[way2] + 'valasztottad.');
    if (way2 === 0 ) {
        enter(player)
    } else if (way2 === 1){
        masikut(player)
    } else {
        erdo()
    }
}

function enter(player) {
    equipments = ['csakany', 'fakja'];
    var equipments = readlineSync.keyInSelect(equipments, "a hazban talalsz egy csakanyt es a fakjat, de nem bírodel oket egyszerre, valasztanod kell melyiket equipeld.");
    switch (equipments) {
        case 0:
        var inventory = 'csakany'
        case 1:
        var inventory = 'fakja'
        default:
    }
}

function erdo(player) {
    console.log("szamodra itt veget ert a kaland! eltevedtel es ehenhaltal.");
}
function csakany(player, mivel) {
    console
}

function end() {
    console.log("End of the game");
}


// entry point of the game
entry(player1)