const justFood = (numberOfPeople) => {
    const price = 1090
    let message = document.querySelector("#paragraph")
    let result = price * numberOfPeople
    message = `<h2>Vaše objednávka jídla Just Food pro ` +
    numberOfPeople +
    ` osob Vás vyjde na ` +
    result +
    ` korun. </h2>`
    document.body.innerHTML=message
} 

const yourMama= (numberOfPeople) => {
    const price = 3450
    let message = document.querySelector("#paragraph")
    let result = price * numberOfPeople
    message = `<h2>Vaše objednávka jídla Your Mama pro ` +
    numberOfPeople +
    ` osob Vás vyjde na ` +
    result +
    ` korun. </h2>`
    document.body.innerHTML+=message
} 

const flavourMama= (numberOfPeople) => {
    const price = 5500
    let message = document.querySelector("#paragraph")
    let result = price * numberOfPeople
    message = `<h2>Vaše objednávka jídla Flavour Mama pro ` +
    numberOfPeople +
    ` osob Vás vyjde na ` +
    result +
    ` korun. </h2>`
    document.body.innerHTML+=message
} 

justFood(6)
flavourMama(70)