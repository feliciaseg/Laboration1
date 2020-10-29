
window.onload = stepOne

function stepOne() {
    let chooseDoor = prompt("Spelet börjar med att du står framför 3 dörrar. Vilken väljer du? 1, 2 eller 3? ");
    
    if (chooseDoor==1) {
        //Väljer dörr 1
        alert ("Du stiger innan för dörren, men det finns inget golv och du faller 50m och dör omedelbart. The End.");  
        restartGame();  
    }
    else if (chooseDoor==2) {
        //Väljer dörr 2
        alert ("Innanför dörren finns en haj som slukar dig hel. The End.");
        restartGame();
    }
    else if (chooseDoor==3)  {
        stepTwo();
    } 
    else {
        alert("Felaktigt svar. Svara '1', '2' eller '3'");
        stepOne();
    }
}

function stepTwo () {
    //Väljer dörr 3
    alert ("Du kommer in i ett kolsvart rum.");

    let lightSwitch = prompt("Vill du tända lampan? Ja eller nej?");  
    if (lightSwitch == "nej", "Nej") {
        alert ("Du förlitar dig på ditt mörkerseende, som tyvärr inte är så bra. Du tar ett steg in i rummet, snubblar över en tegelsten och slår huvudet i en annan tegelsten. Du dör på fläcken. The End.");
        restartGame();
    }
    else if(lightSwitch == "ja", "Ja") {
        alert ("Du hittar lampknappen på höger sida av dörren och tänder lampan. Rummet är fullt av tegelstenar, men längst in står också en liten liten ponny.");
        stepThree();
    }
    else {
        alert("Felaktigt svar. Svara 'ja' eller 'nej'");
        stepTwo();
    }
}

function stepThree () {
    let petPony = prompt ("Vill du klappa ponnyn?");
    if (petPony == "nej", "Nej") {
            alert ("Du står kvar på behörigt avstånd och tittar på ponnyn.");
            stepFour ();
        }
      
        else if (petPony == "ja", "Ja") {
            alert (" Du går fram och klappar ponnyn. Det känns mysigt.");
            stepFour ();
        }
        
        else {
        alert("Felaktigt svar. Svara 'ja' eller 'nej'");
        stepThree();
        }

    }

function stepFour () {
        let wannaLeave = prompt("Vill du lämna rummet?");
        if (wannaLeave == "ja", "Ja") {
            alert ("Du bestämmer dig för att lämna det konstiga rummet. Precis när du ska gå hör du ett gnäggande....");
            stepFive();
        }
        
        else if (wannaLeave == "nej", "Nej") {
            alert("Ponnyn blir irriterad av att du nu bara stått och stirrat på den i 40 min och attackerar dig. Du dör. The End.");
            restartGame();
        }

        else {
            alert("Felaktigt svar. Svara 'ja' eller 'nej'");
            stepFour();
        }
      
    }


function stepFive () {
        let bringPony = prompt ("Vill du ta med dig ponnyn ur rummet?");
        if (bringPony == "ja", "Ja") {
            alert ("Du tar med dig ponnyn ut ur rummet. Sekunden efter ni kommit ut exploderar hela rummet. Ni klarade er! 🥇 👫 ❤️ 🐴 ");
            restartGame();
        }
        else if (bringPony == "nej", "Nej")   {
            alert ("Du går ut ur rummet och lämnar den gnäggande ponnyn pakom dig. När du kommer ut exploderar hela rummet, och ponnyn med det. Du klarade dig.... men till vilket pris? 🥇 😰  💔 🐴 ");
            restartGame();
        }

        else {
            alert ("Felaktigt svar. Svara 'ja' eller 'nej'");
            stepFive();
        }

    }

    function restartGame () {
        let playAgain = prompt ("Vill du spela igen?");
        if (playAgain == "nej", "Nej") {
            alert ("Tack för att du spelade!");
        }
        
        else if (playAgain == "ja", "Ja")  {
            alert ("Då kör vi igen!");
            stepOne ();
        }
    
        else {
            alert ("Felaktigt svar. Svara 'ja' eller 'nej' ");
            restartGame();
        }
        
    
    }

  

    
  
