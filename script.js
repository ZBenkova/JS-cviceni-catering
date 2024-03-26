const myFunction = (price, numberOfPeople) => {
    const vysledek = price * numberOfPeople

    return vysledek

}

const justFood = (numberOfPeople) => {
    const mojePromenna = myFunction(1090, numberOfPeople)

    const message = `Catering od Just Food pro ` +
    numberOfPeople +
    ` lidi za ` +
    mojePromenna +
    ` kc.`

    return message
} 

const yourMama= (numberOfPeople) => {
    const mojePromenna = myFunction(3450, numberOfPeople)

    const message = `Catering od Your Mama pro ` +
    numberOfPeople +
    ` lidi za ` +
    mojePromenna +
    ` kc.`

    return message
} 

const flavourMama= (numberOfPeople) => {
    const mojePromenna = myFunction(6600, numberOfPeople)

    const message = `Catering od Flavour Mama pro ` +
    numberOfPeople +
    ` lidi za ` +
    mojePromenna +
    ` kc.`
    
    return message
} 

const createEvent = (nameOfEvent, numberOfPeople, catering) => {
    const cateringString = catering(numberOfPeople)
    const message = `Udalost ` +
        nameOfEvent +
        ` s ` +
    
        cateringString

    return message
}

let paragraph = document.querySelector("#paragraph")
paragraph.innerHTML += createEvent("inaugurace prezidenta", 23, flavourMama)

console.log(createEvent("inaugurace prezidenta", 23, flavourMama))

