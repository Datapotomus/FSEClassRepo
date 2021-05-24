//This is how you make a class.

//Constructor function
function Person(name, age, height, hairColor, gender, weight){
  this.name = name; //the end name is to what is passed in.
  this.age = age;
  this.height = height;
  this.hairColor = hairColor;
  this.gender = gender;
  this.weight = weight;


}
Person.prototype.eat = function(){
  this.weight += 5;
}

Person.prototype.run = function(){
  this.weight -= 5;
}


let matt = new Person("Matt", 35, "5ft 11in", "brown", "male", 250);
let sally = new Person("Sally", 35, "6ft", "brown", "female", 140);
console.log(matt);
sally.run();
console.log(sally);
