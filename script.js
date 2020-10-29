

let chooseDoor = prompt("Framför dig har du 3 dörrar. Vilken väljer du? 1, 2 eller 3? ")

    if (chooseDoor== 1) {
        alert ("Du stiger innan för dörren, men det finns inget golv och du faller 50m och dör omedelbart. The End.");
}

    else if(chooseDoor== 2) {
        alert ("Du kommer in i ett kolsvart rum.")
            let lightSwitch = prompt("Vill du tända lampan? ja eller nej?")
       
                if (lightSwitch == "nej")
                    alert ("Du förlitar dig på ditt mörkerseende, som tyvärr inte är så bra. Du tar ett steg in i rummet, snubblar över en tegelsten och slår huvudet i en annan tegelsten. Du dör på fläcken. The End.")

                else if (lightSwitch == "ja")
                    alert ("Du hittar lampknappen på höger sida av dörren och tänder lampan. Rummet är fullt av tegelstenar, men längst in står också en liten liten ponny.")

                    let petPony = prompt ("Vill du klappa ponnyn?")

                    if (petPony == "nej")
                    alert ("Du står kvar på behörigt avstånd och tittar på ponnyn." )

                    if (petPony == "ja")
                    alert (" Du går fram och klappar ponnyn. Det känns mysigt.")
}


    else {
        alert ("Innanför dörren finns en haj som slukar dig hel. The End.")

}




