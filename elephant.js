const Elephant = function (name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
};

Elephant.prototype.trumpet = function () {
  console.log(this.name + " the elephant goes phrRRRRRRR!!");
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
  tricks = this.tricks;
  tricks.push(trick);
  this.tricks = tricks;
};

//instance method?
Elephant.prototype.play = function () {
  const play = this.tricks[Math.floor(Math.random() * tricks.length)];
  console.log(this.name + " is " + play);
};

// class method?
Elephant.paradeHelper = function (elephant) {
  console.log(elephant.name + " is trotting by!");
};

// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

// let herd = [ellie, charlie, kate, micah];

// herd.forEach(Elephant.paradeHelper);
