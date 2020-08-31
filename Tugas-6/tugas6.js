// Soal 1
console.log("---SOAL 1---")
const luasLingkaran = (diameter) => {
  return 1/4 * (22/7) * diameter**2
}

console.log(luasLingkaran(15));

const kelilingLingkaran = (radius) => {
  return 2 * (22/7) * radius
}

console.log(kelilingLingkaran(63))

// Soal 2
console.log("---SOAL 2---")
let kalimat = "";

const tambahKata = (kata) => {
  kalimat += `${kata} `;
}

tambahKata("saya")
tambahKata("adalah")
tambahKata("seorang")
tambahKata("frontend")
tambahKata("developer")

console.log(kalimat)


// Soal 3
console.log("---SOAL 3---")
const newFunction = function literal(firstName, lastName){
  return {
    firstName,
    lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
      return 
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName() 

// Soal 4
console.log("---SOAL 4---")
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject

// Driver code
console.log(firstName, lastName, destination, occupation)

// Soal 5
console.log("---SOAL 5")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

//Driver Code
console.log(combined)


