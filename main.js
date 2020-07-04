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

// Kata 1

const activeTrue = users.filter(user => user.isActive === true)


  printKata(1, activeTrue)

//Kata 2

const usersEmail = users.map(user => user.email)

printKata(2, usersEmail)

//Kata 3

const usersCompany = users.some(user => user.company === "OVATION")

printKata(3, usersCompany)

//Kata 4

const firstUserOver38 = users.find(user => user.age > 38)

printKata(4, firstUserOver38)

//Kata 5

const firstActiveUserOver38 = users
.filter(user => user.isActive === true)
.find(user => user.age > 38)

printKata(5, firstActiveUserOver38)

//Kata 6

const usersBalance = users
.filter(user => user.company === "ZENCO")
.map(user => user.balance)

printKata(6, usersBalance)

//Kata 7

const usersAge = users
.filter(user => user.tags.includes("fugiat"))
.map(user => user.age)

printKata(7, usersAge)

