
window.onload = stepOne
    
function stepOne() {
    let chooseDoor = prompt("Framför dig har du 3 dörrar. Vilken väljer du? 1, 2 eller 3? ");
    
    if (chooseDoor== 1) {
        //Väljer dörr 1
        alert ("Du stiger innan för dörren, men det finns inget golv och du faller 50m och dör omedelbart. The End.");    
    }
    else if (chooseDoor ==2) {
        //Väljer dörr 2
        alert ("Innanför dörren finns en haj som slukar dig hel. The End.");
    }
    else if (chooseDoor ==3)  {
        stepTwo()
    } 
    else {
        alert('felaktigtsvar.....')
        stepOne()
    }
}

function stepTwo ()
    //Väljer dörr 3
    alert ("Du kommer in i ett kolsvart rum.")

    let lightSwitch = prompt("Vill du tända lampan? Ja eller nej?");  
    if (lightSwitch == "nej", "Nej") {
        alert ("Du förlitar dig på ditt mörkerseende, som tyvärr inte är så bra. Du tar ett steg in i rummet, snubblar över en tegelsten och slår huvudet i en annan tegelsten. Du dör på fläcken. The End.");
    }
    else if(lightSwitch == "ja", "Ja") {
        alert ("Du hittar lampknappen på höger sida av dörren och tänder lampan. Rummet är fullt av tegelstenar, men längst in står också en liten liten ponny.");
        stepThree()
    }
    else {
        alert("Felaktigt svar...")
        stepTwo()
    }

function stepThree ()
    let petPony = prompt ("Vill du klappa ponnyn?");
    if (petPony == "nej", "Nej") {
            alert ("Du står kvar på behörigt avstånd och tittar på ponnyn." )
        }
        // Valen över och under leder båda till nästa fråga........
        else if (petPony == "ja") {
            alert (" Du går fram och klappar ponnyn. Det känns mysigt.")
        }

        let wannaLeave = prompt("Vill du lämna rummet?")
        if (wannaLeave == "ja") {
            alert ("Du bestämmer dig för att lämna det konstiga rummet. Precis när du ska gå hör du ett gnäggande....")
        }
        
        else {
            alert("Ponnyn blir irriterad av att du nu bara stått och stirrat på den i 40 min och attackerar dig. Du dör. The End.")
        }
        //Avsluta och Play Again??
    


        let bringPony = prompt ("Vill du ta med dig ponnyn ur rummet?")
        if (bringPony == "ja" ) {
            alert ("Du tar med dig ponnyn ut ur rummet. Sekunden efter ni kommit ut exploderar hela rummet. Ni klarade er!")
        }
        else {
            alert ("Du går ut ur rummet och lämnar den gnäggande ponnyn pakom dig. När du kommer ut exploderar hela rummet, och ponnyn med det. Du klarade dig.... men till vilket pris?😰 🐴")
        }


       
    }
}

    
