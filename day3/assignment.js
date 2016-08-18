// var name = prompt('what is your name?');
// name = capitlize(name);
// // console.log(name);
//
// function capitalizeFirstLetter(name) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
//
// capitalizeFirstLetter();
var name = "maria";

function capitalize() {
    return name[0].toUpperCase() + name.slice(1);
}

var capitalizedName = capitalize();
console.log(capitalizedName);
