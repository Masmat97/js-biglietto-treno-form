const kmInput = document.getElementById('km');
const ageInput = document.getElementById('age');



// const calcButton = document.getElementById('calc-button');

// calcButton.addEventListener('click', function () {

//     const km = kmInput.value;
//     const age = ageInput.value;

//     const costPerKm = 0.21;
//     const basePrice = km * costPerKm;
//     console.log(`Prezzo base biglietto`, basePrice);

//     let finalPrice = basePrice;

//     if (age < 18) {
//         console.log('Applico lo sconto del 20%');

//         finalPrice = basePrice * 0.8;
//         console.log('Prezzo scontato del 20%:', finalPrice);
//     }
//     else if (age > 65) {
//         console.log('Applico lo sconto del 40%');

//         finalPrice = basePrice * 0.6;
//         console.log('Prezzo scontato del 40%:', finalPrice);
//     }

//     console.log('Prezzo finale', finalPrice.toFixed(2));
// });





const priceForm = document.querySelector('form');

priceForm.addEventListener('submit', function (prova) {
    prova.preventDefault();
    

    const calcButton = document.getElementById('calc-button');

    calcButton.addEventListener('click', function () {

        const km = kmInput.value;
        const age = ageInput.value;

        const costPerKm = 0.21;
        const basePrice = km * costPerKm;
        console.log(`Prezzo base biglietto`, basePrice);

        let finalPrice = basePrice;

        if (age < 18) {
            console.log('Applico lo sconto del 20%');

            finalPrice = basePrice * 0.8;
            console.log('Prezzo scontato del 20%:', finalPrice);
        }
        else if (age > 65) {
            console.log('Applico lo sconto del 40%');

            finalPrice = basePrice * 0.6;
            console.log('Prezzo scontato del 40%:', finalPrice);
        }
        
        document.getElementById("biglietto").innerHTML = 'Prezzo del biglietto:' + finalPrice.toFixed(2) + '€';
        // document.getElementById('km').value = '';
        // document.getElementById('age').value = '';
        
    });
});