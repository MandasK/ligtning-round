const cars = {
    make: "Ford",
    model: "Mustang",
    color: "red",
    year: "2015"
}

console.log("Car Info", cars)

let shelterPets = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

console.log("Pet names", shelterPets)

// add in lightning exercise 3

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log(`height ${wardrobe.height}`)
console.log(`manufacturer ${wardrobe.manufacturer}`)
console.log(`contents ${wardrobe.contents}`)
console.log(`depth ${wardrobe.depth}`)
console.log(`width ${wardrobe.width}`)


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}


console.log(`height ${empireStateBuilding.height}`)
console.log(`stories ${empireStateBuilding.stories}`)
console.log(`square feet ${empireStateBuilding.squareFeet}`)
console.log(`East West Length ${empireStateBuilding.eastWestLength}`)
console.log(`North South Length ${empireStateBuilding.northSouthLength}`)

const keyToLookupOne = "address"
const keyToLookupTwo ="constructionDate"
const keyToLookupThree = "cost"
const keyToLookupFour = "owner"
const keyToLookupFive = "architect"

const bulidingAddress = empireStateBuilding[keyToLookupOne]
const bulidingDate = empireStateBuilding[keyToLookupTwo]
const bulidingCost = empireStateBuilding[keyToLookupThree]
const bulidingOwner = empireStateBuilding[keyToLookupFour]
const bulidingArchitect = empireStateBuilding[keyToLookupFive]

console.log(`Address ${bulidingAddress}`)
console.log(`Date ${bulidingDate}`)
console.log(`Cost ${bulidingCost}`)
console.log(`Owner ${bulidingOwner}`)
console.log(`Architect ${bulidingArchitect}`)

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(`part time instructors ${nashvilleSoftwareSchool.instructors.partTime}`)

console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0])

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`)