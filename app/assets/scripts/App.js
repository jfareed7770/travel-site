//var Person = require("./modules/Person");  possible because of webpack
/*import Person from "./modules/Person";  // possible because of Babel

var john = new Person("John Doeeee", "brown");
john.greet();

var mary = new Person("Mary Jane", "pink");
mary.greet();
*/

import MobileMenu from "./modules/MobileMenu";

var mobileMenu = new MobileMenu();
