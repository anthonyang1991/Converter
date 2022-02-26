
let metreEl = document.getElementById("metre-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let userInputEl;



function submit()
{
     userInputEl= document.getElementById("input-el").value;
    console.log(userInputEl);
    calculateMetre();
    calculateVolume();
    calculateMass();

}

function calculateMetre()
{
    let convertMetre = 3.28084 * userInputEl;
    metreEl.textContent = userInputEl + " metres = " + convertMetre.toFixed(3)+" feet" ;
   // console.log(metreEl.value);
   // console.log(convertMetre.toFixed(3));

}

function calculateVolume()
{       
    let convertLitre = 0.264172 * userInputEl;
    volumeEl.textContent = userInputEl+ " litres = " + convertLitre.toFixed(3)+" gallons" ;
   // console.log(metreEl.value);
   

}

function calculateMass()
{ 
    
    let convertKg =  userInputEl * 2.20462;
    massEl.textContent = userInputEl + " kilos = " + convertKg.toFixed(3) + " pounds" ;
    // console.log(metreEl.value);
   // console.log(metreEl.value);

}