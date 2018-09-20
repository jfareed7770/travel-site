/* ES5
function Person(fullName, favColor){
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function(){
    console.log("Hello, my name is "+ this.name + " and my favorite color is "+ this.favoriteColor + ".");
  }
};*/
/*Babel being used now, so can use modern js features */
class Person{
  constructor(fullName, favColor){
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet(){
    console.log("Hello, my name is "+ this.name);
  }
};

module.exports = Person;
