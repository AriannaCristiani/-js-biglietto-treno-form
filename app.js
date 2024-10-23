
//chiedere all'utente il suo nome ed il suo cognome
const userNameSurname = document.getElementsByClassName('name-surname');
console.log(userNameSurname)


//chiedere all'utente la sua età
const age = document.getElementsByClassName('age');
console.log(age);

//chiedere all'utente il numero di km da percorrere
const km = document.getElementsByClassName('km');
console.log(km)


//se l'utente inoltra dati non validi
const dataIsValid = !isNaN(km) && !isNaN(age)
const dataIsBiggerThanZero = km >= 0 && age >= 0

//impedire alla pagina di inviare i dati
const formElement = document.getElementById('form-element');
console.log(formElement);

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
})


const buttonSubmit = document.getElementById('button-submit');
console.log(buttonSubmit)


buttonSubmit.addEventListener('click', function () {
    console.log(age, km, userNameSurname)
})

//calcolare prezzo biglietto:
if (dataIsValid && dataIsBiggerThanZero) {
    const basePrice = km * 0.21
    console.log('prezzo base', basePrice)

    let discountPercentage

    if (age < 18) {
        discountPercentage = 20
    } else if (age > 65) {
        discountPercentage = 40
    } else {
        discountPercentage = 0
    }

    console.log('Percentuale sconto: ', discountPercentage)
    const discount = (basePrice * discountPercentage) / 100
    console.log('sconto: ', discount)

    const price = basePrice - discount

    //stampare il prezzo del biblietto
    const formattedPrice = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
    }).format(price)

    const humanPrice = price.toFixed(2)

    console.log('prezzo: ', humanPrice + ' €')
} else {
    // alert('I dati inseriti non solo validi')
}



