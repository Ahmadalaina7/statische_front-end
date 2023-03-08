let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = parseInt(prompt("Hoeveel autos wilt u kwijt in de parkeergarage?"));
    alert(uitleg)
    if (gewenste_aantal_autos > 80){
        aantal_verdiepingen = Math.ceil((gewenste_aantal_autos - 80) / 120);
        let antwoord = "U heeft " + aantal_verdiepingen + " verdiepingen nodig om het gewenste aantal autos kwijt te kunnen.";;
        document.getElementById("antwoord").innerText = antwoord;
        console.log("Om het gewenste aantal autos kwijt te kunnen heb ik", aantal_verdiepingen ,"verdiepingen nodig.");
        alert(antwoord)
    }
    else if(gewenste_aantal_autos <= 80){
        verdiepingen = "0"
        let antwoord = "U heeft " + verdiepingen + " verdiepingen nodig omdat alle autos passen op begane grond.";;
    document.getElementById("antwoord").innerText = antwoord;
    console.log("Om het gewenste aantal autos kwijt te kunnen heb ik", verdiepingen ,"verdiepingen nodig omdat alle autos passen op begane grond.");
    alert(antwoord)
    }
