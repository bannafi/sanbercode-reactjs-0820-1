// Soal 1
var num = 0

while (num <=20) {
  if (num === 0) {
      console.log("LOOPING PERTAMA")
  } else {
    console.log(num + " " + "- I love coding")
  }
  num += 2
}

while (num > 0) {
  if (num === 22) {
      console.log("LOOPING KEDUA")
  } else {
    console.log(num + " " + "- I will become a frontend developer")
  }
  num -= 2
}

// Soal 2
for(var angka = 1; angka <= 20; angka++) {
  if (angka % 2 !== 0 && angka % 3 === 0) {
    console.log(angka + " " + "- I Love Coding")
  } else if (angka % 2 !== 0) {
    console.log(angka + " " + "- Santai")
  } else {
    console.log(angka + " " + "- Berkualitas")
  }
}

// Soal 3
var hash = "#######"

for (var i=7; i>0; i--) {
  console.log(hash.substr(i-1))
}

// Soal 4
var kalimat="saya sangat senang belajar javascript"

var kata = kalimat.split(" ");

console.log(kata)

// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

daftarBuah.sort()

console.log(daftarBuah.join("\n"))