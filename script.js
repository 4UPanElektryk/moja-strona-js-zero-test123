const karty = [
    ["1♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠","A♠"],
    ["1♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥","A♥"],
    ["1♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦","A♦"],
    ["1♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣","A♣"],
];
let equipment = [];
let pula = document.getElementById("pula");
let pieniazki = document.getElementById("Pieniazki");
let hajs = 0;
let krok = 0;
function akcja(){
    if (krok==0){
        krok++;
        let i = Math.floor(Math.random()*14);
        let j = Math.floor(Math.random()*4);
        equipment[0] = karty[j][i];
        i = Math.floor(Math.random()*14);
        j = Math.floor(Math.random()*4);
        equipment[1] = karty[j][i];
        while (equipment[1]==equipment[0]){
            i = Math.floor(Math.random()*14);
            j = Math.floor(Math.random()*4);
            equipment[1] = karty[j][i];
        }
        console.log(equipment);
    } else if (krok==1){
        pieniazki = document.getElementById("Pieniazki").value;
        hajs = Number(pieniazki) + hajs;
        console.log(hajs);
        krok++;
    }
}
