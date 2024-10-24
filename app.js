
//chiedere all'utente il suo nome ed il suo cognome
const userNameSurname = document.getElementById('name-surname');
//console.log(userNameSurname)


//chiedere all'utente la sua età
const age = document.getElementById('age');
//console.log(age);

//chiedere all'utente il numero di km da percorrere
const km = document.getElementById('km');
//console.log(km)



//impedire alla pagina di inviare i dati
const formElement = document.getElementById('form-element');
//console.log(formElement);

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log(userNameSurname.value)

    const ageValue = age.value
    console.log(ageValue)
    const kmValue = parseInt(km.value)
    console.log(kmValue)

    const dataIsValid = !isNaN(kmValue)
    const dataIsBiggerThanZero = kmValue >= 0 


    if (dataIsValid && dataIsBiggerThanZero) {
        const basePrice = kmValue * 0.21
        console.log('prezzo base', basePrice)

        let discountPercentage

        if (ageValue === 'under18') {
            discountPercentage = 20 
        } else if (ageValue === 'over65') {
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





        const userName = document.getElementById('user-name')
        //console.log(userName)
    
        userName.innerHTML = `<p id="user-name"><strong>${userNameSurname.value}</strong></li>`;
    
        const OnSalePrice = document.getElementById('sale')
        //console.log(OnSalePrice)
        
        OnSalePrice.innerHTML = `<p id="sale">${discountPercentage}</p>`;
    
        const carriage = document.getElementById('carriage')
        //console.log(carriage)

        //carriage.innerHTML = `<p id="carriage">${}</p>`;
    
        const ipCode = document.getElementById('ip-code')
        //console.log(ipCode)

        //ipCode.innerHTML = `<p id="ip-code">${}</p>`;
    
        const finalTicketPrice = document.getElementById('ticket-final-price')
        //console.log(finalTicketPrice)

        finalTicketPrice.innerHTML = `<p id="ticket-final-price">${humanPrice}</p>`;
    
    } else {
        // alert('I dati inseriti non solo validi')
    }




   

})









