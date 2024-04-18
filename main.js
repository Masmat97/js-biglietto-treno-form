const age = prompt("Inserisci la tua età");
console.log(`Anni: ${age}`);

const km = prompt("Inserisci il numero di km da percorrere")
console.log(`km: ${km}`);

const prezzo = 0.21;
console.log(`prezzo: ${prezzo}`);



const prezzoBiglietto = prezzo * km;
console.log(`prezzoBiglietto: ${prezzoBiglietto}`);
document.getElementById("biglietto").innerHTML = `prezzoBiglietto: ${prezzoBiglietto}`



if (age < 18)  {
    console.log(`Applico lo sconto del 20%`);
   
    const finalPrice = prezzoBiglietto * 0.8;
    console.log(`Prezzo sconato del 20%:`, finalPrice);
    document.getElementById("biglietto").innerHTML = `Prezzo sconato del 20%:`, finalPrice

}


else if (age > 65)  {
    console.log(`Applico lo sconto del 40%`);
   

    const finalPrice = prezzoBiglietto * 0.6;
    console.log(`Prezzo sconato del 40%:`, finalPrice);
    document.getElementById("biglietto").innerHTML = `Prezzo sconato del 40%:`, finalPrice

}
