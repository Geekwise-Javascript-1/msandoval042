/* string object */
// var str = 'Maria';
// console.log(str.charAt(0));
/*Method is a function */


/*trim method */
// var str = '   maria   ';
// var newStr = str.trim();
// // console.log(str.trim());
// console.log(newStr);
/******************************************/

  /*MATH OBJECTS */
  // RANDOM
  // FLOOR
  // CEIL
  //

/* round will mke your random # to the nearest whole# */
// var randNum = Math.round(Math.random() * 10 ) + 1;
// console.log(randNum );


/*floor*/
// var randNum = Math.floor(Math.random() * 10 ) + 1;
// console.log(randNum );

/********************************************/

/*DATE OBJECT*/
/*now in seconds*/
// var toDay = Date;
// console.log(toDay.now());
//
// /*today*/
// var toDay = new Date;
// console.log(toDay);
//
// /*.getDate() */
// var toDay = new Date;
// console.log(toDay.getDate());

/*getFullYear */
// var toDay = new Date('day','month','year');
//  console.log(toDay);
// console.log(toDay.toLocaleString(locale,{ month:"long" })+' '+toDay.getDate()+', '+toDay.getFullYear());


/******************************************/
/* BASIC FUNCTION */

// var firstName = "maria";
//
// function newFunction(){
//  var lastName = "Sandoval";
//   alert(name);
//   alert(lastName);
// }
// alert(lastName);
// newFunction();

/**************************************/
// var firstName = "maria";
// var birthDate = "Nov 07, 1980";
// console.log(firstName.lenght);
//
// function setBirthday(){
//   var birthday =  "Nov 07, 1980";
//
//   alert(firstName);
//   alert(birthDate);
//
// }
// newFunction();
//  var toDay =  new Date;
//  console.log(toDay.getDate());
var userFirst = prompt('your name');
var userLast = prompt('choose last name');
var userBday = prompt('birthday');
var userColor = prompt('choose color');

function setBday(uF, uL, uB, uC){
  console.log(uB);
  var bdayArr = uB.split(' ');
  console.log(bdayArr[0] + '' + bdayArr[1] + ', ' + bdayArr[2]);
  return
    uF + ' '+ uL + ' ' + bdayArr[0] + '' + bdayArr[1] + ', ' + bdayArr[2] + ' ' + '. Your Color is ' + uC;


}
console.log( setBday(userFirst, userLast, userBday, userColor));
// setBday(userFirst, userLast, userBday, userColor);
// var userName = prompt('first Name');
// var userLast = prompt('Last Name');
// var firstName = "maria";
// var lastName ="sandoval";
// // var locale = 'en-us';
//
//   function newFunction(userColor, userName, userLast){ //parameters
//     // var toDay = new Date;
//
//     // toDay.setFullYear(1997);
//     // toDay.setDate(06);
//     // toDay.setMonth(10);
//     // var fullMon = toDay.toLocaleString( locale, { month:"long"});
//     console.log(firstName
//       + ' '
//       + lastName
//       + '. '
//       + userColor);
//   }
//   setUser('userColor', 'userName', 'userLast');  //arguments
