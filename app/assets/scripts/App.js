//var Person = require("./modules/Person");  possible because of webpack
/*import Person from "./modules/Person";  // possible because of Babel

var john = new Person("John Doeeee", "brown");
john.greet();

var mary = new Person("Mary Jane", "pink");
mary.greet();
*/

import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"),"60%");
