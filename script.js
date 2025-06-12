const karty = [
    ["1♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠","A♠"],
    ["1♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥","A♥"],
    ["1♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣","A♣"],
    ["1♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦","A♦"],
];
let equipment = [];
let pula = document.getElementById("pula");
let pieniazki = document.getElementById("Pieniazki");
const tutorial = document.getElementById("coRobic");
const eq = document.getElementById("eq");
const blat = document.getElementById("blat");
const money = document.getElementById("money");
let moneyAmmount = 100;
money.innerHTML="kasa: " + 100;
let hajs = 0;
let krok = 0;
function pozyczka(){
    moneyAmmount= moneyAmmount+100;
    money.innerHTML="kasa: " + 100;
}
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
        const newCard = document.createElement('section');
        newCard.classList.add('card');
        newCard.innerHTML = equipment[0];
        eq.appendChild(newCard);
        const newCardTwo = document.createElement('section');
        newCardTwo.classList.add('card');
        newCardTwo.innerHTML = equipment[1];
        eq.appendChild(newCardTwo);
        tutorial.innerHTML = "Wylosowano karty, wpisz sumkę";
        console.log(equipment);
    } else if (krok==1){
        pieniazki = document.getElementById("Pieniazki").value;
        hajs = Number(pieniazki) + hajs;
        if (pieniazki>0 && Number(pieniazki)<moneyAmmount){
            pula.innerHTML="Obecnie w puli:" + hajs;
            moneyAmmount=moneyAmmount-Number(pieniazki);
            money.innerHTML = "kasa: " + moneyAmmount;
            krok++;
        }
    } else if (krok==2){

        i = Math.floor(Math.random()*14);
        j = Math.floor(Math.random()*4);
        equipment[2] = karty[j][i];
            for (let j =0; j<equipment.length; j++){
                equipment.forEach(element => {
                let i = 1;
                if (equipment[i]==equipment[i-j]){
                    i = Math.floor(Math.random()*14);
                    j = Math.floor(Math.random()*4);
                    equipment[i] = karty[j][i];
                }
            });
        }


        tutorial.innerHTML = "Podano pierwszą kartę, podbijasz?";
        const newCard = document.createElement('section');
        newCard.classList.add('card');
        newCard.innerHTML = equipment[2];
        blat.appendChild(newCard);

        pieniazki = document.getElementById("Pieniazki").value;
        if (pieniazki>0 && Number(pieniazki)<moneyAmmount){
            pula.innerHTML="Obecnie w puli:" + hajs;
            moneyAmmount=moneyAmmount-Number(pieniazki);
            money.innerHTML = "kasa: " + moneyAmmount;
        }

        krok++;
    } else if (krok==3){
        i = Math.floor(Math.random()*14);
        j = Math.floor(Math.random()*4);
        equipment[3] = karty[j][i];
            for (let j =0; j<equipment.length; j++){
                equipment.forEach(element => {
                let i = 1;
                if (equipment[i]==equipment[i-j]){
                    i = Math.floor(Math.random()*14);
                    j = Math.floor(Math.random()*4);
                    equipment[i] = karty[j][i];
                }
            });
        }
        tutorial.innerHTML = "Podano kolejną kartę, podbijasz?";
        const newCard = document.createElement('section');
        newCard.classList.add('card');
        newCard.innerHTML = equipment[3];
        blat.appendChild(newCard);
        krok++;
    } else if (krok==4){
        i = Math.floor(Math.random()*14);
        j = Math.floor(Math.random()*4);
        equipment[4] = karty[j][i];
            for (let j =0; j<equipment.length; j++){
                equipment.forEach(element => {
                let i = 1;
                if (equipment[i]==equipment[i-j]){
                    i = Math.floor(Math.random()*14);
                    j = Math.floor(Math.random()*4);
                    equipment[i] = karty[j][i];
                }
            });
        }
        const newCard = document.createElement('section');
        newCard.classList.add('card');
        newCard.innerHTML = equipment[4];
        blat.appendChild(newCard);

        i = Math.floor(Math.random()*14);
        j = Math.floor(Math.random()*4);
        equipment[5] = karty[j][i];
            for (let j =0; j<equipment.length; j++){
                equipment.forEach(element => {
                let i = 1;
                if (equipment[i]==equipment[i-j]){
                    i = Math.floor(Math.random()*14);
                    j = Math.floor(Math.random()*4);
                    equipment[i] = karty[j][i];
                }
            });
        }
        tutorial.innerHTML = "kolejne karty, podbijasz?";
        const newCardTwo = document.createElement('section');
        newCardTwo.classList.add('card');
        newCardTwo.innerHTML = equipment[5];
        blat.appendChild(newCardTwo);

        if (pieniazki>0 && Number(pieniazki)<moneyAmmount){
            pula.innerHTML="Obecnie w puli:" + hajs;
            moneyAmmount=moneyAmmount-Number(pieniazki);
            money.innerHTML = "kasa: " + moneyAmmount;
        }
        krok++;
    } else if (krok==5){
        i = Math.floor(Math.random()*14);
        j = Math.floor(Math.random()*4);
        equipment[6] = karty[j][i];
            for (let j =0; j<equipment.length; j++){
                equipment.forEach(element => {
                let i = 1;
                if (equipment[i]==equipment[i-j]){
                    i = Math.floor(Math.random()*14);
                    j = Math.floor(Math.random()*4);
                    equipment[i] = karty[j][i];
                }
            });
        }
        tutorial.innerHTML = "Podano ostatnią kartę! Kliknij w przycisk Akcji by wzrócić pieniądze!";
        const newCard = document.createElement('section');
        newCard.classList.add('card');
        newCard.innerHTML = equipment[6];
        blat.appendChild(newCard);

        krok++;
    } else if (krok==6){
        let para = false;
        for (let i = 0; i < equipment.length; i++) {
            for (let j = i + 1; j < equipment.length; j++) {
                if (equipment[i] && equipment[j] && equipment[i].charAt(0) === equipment[j].charAt(0)) {
                    tutorial.innerHTML = "PARA!, kliknij by zagrać jeszcze raz!";
                    moneyAmmount=moneyAmmount + hajs*1.5;
                    money.innerHTML = "kasa: " + moneyAmmount;
                    para = true;

                    i = equipment.length; 
                    break;
                }
                if(para) break;
            }
            if(para) break;
        }
        if (!para){
            tutorial.innerHTML = "nic, kliknij by zagrać jeszcze raz!";
            moneyAmmount=moneyAmmount + hajs*0.75;
        }
        blat.innerHTML='';
        eq.innerHTML='';
        krok = 0;
    }
}
