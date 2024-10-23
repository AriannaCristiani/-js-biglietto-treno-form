
//chiedere all'utente il suo nome ed il suo cognome
const userNameSurname = document.getElementById ('name-surname');
//console.log(userNameSurname)


//chiedere all'utente la sua età
const age = document.getElementById ('age');
//console.log(age);

//chiedere all'utente il numero di km da percorrere
const km = document.getElementById ('km');
//console.log(km)


//se l'utente inoltra dati non validi
const dataIsValid = !isNaN(km) && !isNaN(age)
const dataIsBiggerThanZero = km >= 0 && age >= 0

//impedire alla pagina di inviare i dati
const formElement = document.getElementById('form-element');
//console.log(formElement);

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log(userNameSurname.value)
    console.log(km.value)
    console.log(age.value)


})


const buttonSubmit = document.getElementById('button-submit');
//console.log(buttonSubmit)



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



