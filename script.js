const justFood = (numberOfPeople) => {
    const price = 1090
    let result = price * numberOfPeople

    const message = `Catering od Just Food pro ` +
    numberOfPeople +
    ` lidi za ` +
    result +
    ` kc.`

    return message
} 

const yourMama= (numberOfPeople) => {
    const price = 3450
    let result = price * numberOfPeople

    const message = `Catering od Your Mama pro ` +
    numberOfPeople +
    ` lidi za ` +
    result +
    ` kc.`

    return message
} 

const flavourMama= (numberOfPeople) => {
    const price = 5500
    let result = price * numberOfPeople

    const message = `Catering od Flavour Mama pro ` +
    numberOfPeople +
    ` lidi za ` +
    result +
    ` kc.`
    
    return message
} 

const createEvent = (nameOfEvent, numberOfPeople, catering) => {
    const message = `Udalost ` +
        nameOfEvent +
        ` s ` +
        catering(numberOfPeople)

    return message
}

const resultMessage = createEvent("inaugurace prezidenta", 23, flavourMama)

let paragraph = document.querySelector("#paragraph")
paragraph.innerHTML += resultMessage
