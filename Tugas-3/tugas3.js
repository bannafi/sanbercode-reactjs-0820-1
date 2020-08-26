// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kalimat = kataPertama + " " + kataKedua.charAt(0).toUpperCase() + kataKedua.substr(1) + " " + kataKetiga + " " + kataKeempat.toUpperCase()

console.log(kalimat);

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var intPertama = parseInt(kataPertama);
var intKedua = parseInt(kataKedua);
var intKetiga = parseInt(kataKetiga);
var intKeempat = parseInt(kataKeempat);

var jumlah = intPertama + intKedua + intKetiga + intKeempat

console.log(jumlah)

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25)

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// Soal 4
var nilai = 75;

if (nilai >= 80) {
	console.log("A")
} else if (nilai >= 70) {
	console.log("B")
} else if (nilai >= 60) {
	console.log("C")
} else if (nilai >= 50) {
	console.log("D")
} else if (nilai < 50) {
	console.log("E")
}

// Soal 5
var tanggal = 9;
var bulan = 8;
var tahun = 1989;

switch(bulan) {
	case 1: { console.log(tanggal.toString() + " " + "Januari" + " " + tahun.toString()); break; }
	case 2: { console.log(tanggal.toString() + " " + "Februari" + " " + tahun.toString()); break; }
	case 3: { console.log(tanggal.toString() + " " + "Maret" + " " + tahun.toString()); break; }
	case 4: { console.log(tanggal.toString() + " " + "April" + " " + tahun.toString()); break; }
	case 5: { console.log(tanggal.toString() + " " + "Mei" + " " + tahun.toString()); break; }
	case 6: { console.log(tanggal.toString() + " " + "Juni" + " " + tahun.toString()); break; }
	case 7: { console.log(tanggal.toString() + " " + "Juli" + " " + tahun.toString()); break; }
	case 8: { console.log(tanggal.toString() + " " + "Agustus" + " " + tahun.toString()); break; }
	case 9: { console.log(tanggal.toString() + " " + "September" + " " + tahun.toString()); break; }
	case 10: { console.log(tanggal.toString() + " " + "Oktober" + " " + tahun.toString()); break; }
	case 11: { console.log(tanggal.toString() + " " + "November" + " " + tahun.toString()); break; }
	case 12: { console.log(tanggal.toString() + " " + "Desember" + " " + tahun.toString()); break; }
	defaut: { console.log('nothing'); }
}
