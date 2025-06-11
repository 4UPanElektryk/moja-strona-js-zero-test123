const karty = [
    ["1♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠","A♠"],
    ["1♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥","A♥"],
    ["1♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦","A♦"],
    ["1♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣","A♣"],
];
const pula = document.getElementById("pula");
function akcja(){
    let pieniazki = document.getElementById("Pieniazki").value;
    pieniazki = pieniazki + Number(pula.innerHTML);
    console.log(Pieniazki);
}
