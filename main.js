// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
//KATA 0
//const kata1Result = users
//printKata(0, users)
//KATA 1
const kata1Result = users.filter(user => user.isActive === true)
printKata(1, kata1Result)
//KATA 2
const kata2Result = users.map(user => user.email)
printKata(2, kata2Result) 
//KATA 3
const kata3Result = users.some(user => user.company === 'OVATION')
printKata(3, kata3Result) 
//KATA 4
const kata4Result = users.find(user => user.age === 38)
printKata(4, kata4Result) 
//KATA 5
const kata5Result = users.filter(user => user.isActive === true).find(user => user.age === 38)
printKata(5, kata5Result) 
//KATA 6
const kata6Result = users.filter(user => user.company === 'ZENCO').map(user => user.balance)
printKata(6, kata6Result) 
//KATA 7
const kata7Result = users.filter(user => user.tags.includes('fugiat')).map(user => user.age)
printKata(7, kata7Result) 