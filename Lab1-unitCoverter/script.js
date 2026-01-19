function toFahrenheit(){
    const celcius = document.getElementById('celsius').value
    const fahrenheit = document.getElementById('fahrenheit')

    const cel = parseFloat(celcius)
    const fah = (cel * (9/5)) + 32
    fahrenheit.value = fah.toFixed(2)
}

function toPound(){
    const kilograms = document.getElementById('kilogram').value
    const pounds = document.getElementById('pound')

    const kg = parseFloat(kilograms)
    const pound = kg * 2.205
    pounds.value = pound.toFixed(2)
}

function toMile(){
    const kilometers = document.getElementById('kilometer').value
    const miles = document.getElementById('mile')

    const km = parseFloat(kilometers)
    const mile = km / 1.609
    miles.value = mile.toFixed(2)
}

window.toFahrenheit = toFahrenheit
window.toPound = toPound
window.toMile = toMile

