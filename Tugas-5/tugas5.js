// Soal 1
console.log("---SOAL 1---")
function halo() {
  return "Halo Sanbers!"
}

console.log(halo());

// Soal 2
console.log("---SOAL 2---")
function kalikan(a, b) {
	return a * b
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)

console.log(hasilKali)

// Soal 3
console.log("---SOAL 3---")
function introduce(nama, umur, alamat, hobi) {
  return ("Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", dan saya punya hobby yaitu " + hobi + "!")
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

// Soal 4
console.log("---SOAL 4---")
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var objDaftarPeserta = {}

function arrayToObj(array, obj) {
  obj.nama = array[0];
  obj.jenis_kelamin = array[1];
  obj.hobi = array[2];
  obj.tahun_lahir = array[3];
}

arrayToObj(arrayDaftarPeserta, objDaftarPeserta)

console.log(objDaftarPeserta)

// Soal 5
console.log("--SOAL 5---")
var objSpekBuah = [
  {
    nama: "strawberry",
    warna: "merah",
    ada_bijinya: false,
    harga: 9000
  },
  {
    nama: "jeruk",
    warna: "oranye",
    ada_bijinya: true,
    harga: 8000
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    ada_bijinya: true,
    harga: 10000
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    ada_bijinya: false,
    harga: 5000
  }
]

console.log(objSpekBuah[0])

// Soal 6
console.log("--SOAL 6---")
var dataFilm = []

function tambahDataFilm(nama, durasi, genre, tahun) {
    var obj = {
      nama: nama,
      durasi: durasi,
      genre: genre,
      tahun: tahun,
    }
   
    dataFilm.push(obj)
}

tambahDataFilm("Avengers", "3 jam", "Action", 2019)
tambahDataFilm("Justice League", "2 jam", "Superhero", 2018)

console.log(dataFilm)
