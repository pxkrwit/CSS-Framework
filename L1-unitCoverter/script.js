function temperature(){
    const celcius = document.getElementById('celsius').value
    const fahrenheit = document.getElementById('fahrenheit')

    if(!celcius){
        alert('Please enter the number')
        return
    }

    const cel = parseFloat(celcius)
    const fah = (cel * (9/5)) + 32
    fahrenheit.value = fah.toFixed(2)
}

function weight(){
    const kilograms = document.getElementById('kilo').value
    const pounds = document.getElementById('pounds')

    if(!kilograms){
        alert('Please enter the number')
        return
    }

    const kg = parseFloat(kilograms)
    const pound = kg * 2.205
    pounds.value = pound.toFixed(2)
}

function distance(){
    const kilometers = document.getElementById('km').value
    const miles = document.getElementById('miles')

    if(!kilometers){
        alert('Please enter the number')
        return
    }

    const km = parseFloat(kilometers)
    const mile = km / 1.609
    miles.value = mile.toFixed(2)
}

window.toFahrenheit = temperature
window.toPound = weight
window.toMile = distance

