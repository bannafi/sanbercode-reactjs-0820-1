console.log("---SOAL 1---")
console.log("---release 0---")
class Animal {
  constructor(name) {
    this.name = name;
    this._legs = 4;
    this._cold_blooded = false;
  } 
  
  get legs() {
    return this._legs
  }
    
  set legs(leg) {
    this._legs = x;
  }
  
  get cold_blooded() {
    return this._cold_blooded
  }
  
  set cold_blooded(blood) {
    this._cold_blooded = blood;
  }
      
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

console.log("---release 1---")
// Code class Ape dan class Frog di sini
class Frog extends Animal {
  constructor(name) {
    super()
    this.name = name;
    this._cold_blooded = true;
  }
  
  jump() {
    console.log("hop hop")
  }
  
}

class Ape extends Animal {
  constructor(name) {
    super()
    this.name = name;
    this._legs = 2;
  }
  
  yell() {
    console.log("Auooo")
  }
  
}
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

console.log("---SOAL 2---")
class Clock {
  constructor({ template }) {
    this._timer;
    this._template = template;
  }
  
  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = (this._template)
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }
  
  stop() {
    clearInterval(this._timer);  
  }
  
  start() {
    this.render.bind(this);
    this._timer = setInterval(this.render.bind(this), 1000);
  }
  
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  
