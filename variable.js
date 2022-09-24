// 1. Create a variable.js file and declare variables and assign 
// string, boolean, undefined and null data types, Display all the value with there type.
let varNum = 1;
let varStr = "true"
let varBool = true;

let varNull = null;

console.log(typeof(varNum), varNum)
console.log(typeof(varStr), varStr)
console.log(typeof(varBool), varBool)
console.log(typeof(varNull), varNull)
console.log(typeof(varUndefined))

// 2. Declare variables to store your first name, last name, marital status, 
// country and age and display them using interploation method.

let infoObj = {
    first_name :"Mark", 
    last_name : "Zucker", 
    marital_status : "married", 
    country : "US", 
    age : 40
}

console.log(`${infoObj.first_name} ${infoObj.last_name} is ${infoObj.age} years old and ${infoObj.marital_status}`)

// 3. Decalre a varibale and assign value to it and change all the string characters 
// to capital letters using toUpperCase() method.
let city = "Bangalore";
console.log(city.toUpperCase())

// 4. Check if the string contains a word Script using includes() method.
const quote1 = 'True yoga is not about the shape of your body, but the shape of your life. Yoga is not to be performed; yoga is to be lived. Yoga does not care about what you have been; yoga cares about the person you are becoming. Yoga is designed for a vast and profound purpose, and for it to be truly called yoga, its essence must be embodied.';
const search = 'embodied';
console.log(quote1.includes(search));

// 5. Split the string into an array using split() method
const quotestr = 'True yoga is not about the shape of your body, but the shape of your life. Yoga is not to be performed; yoga is to be lived. Yoga does not care about what you have been; yoga cares about the person you are becoming. Yoga is designed for a vast and profound purpose, and for it to be truly called yoga, its essence must be embodied.';
qarr = quotestr.split(' ');
console.log(qarr)

// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const techstr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(techstr.split(','))

// 7. Use lastIndexOf to determine the position of the last occurrence of a script.
console.log(quotestr.lastIndexOf('yoga'))
console.log(qarr.lastIndexOf('yoga'))
console.log(techstr.lastIndexOf('Oracle'))
console.log(techstr.split(',').lastIndexOf('Oracle'))

// 8. Use search to find the position of the first occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'.
const becoz = 'You cannot end a sentence with because because because is a conjunction.';
console.log(becoz.search('because'))
// THis wont work: console.log(becoz.split(' ').search('because'))

//9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
const ws = 'You cannot end a sentence with because because because is a conjunction.    ';
console.log(ws + "Ends here");
console.log(ws.trim() + "Ends here after trim");

//10. Boolean value is either true or false.
// - Write three JavaScript statement which provide truthy value. Always resolves to true
// - Write three JavaScript statement which provide falsy value. Always resolves to false
if(true) {
    console.log("true is a truthy statement");
}

if (10) {
    console.log("10 or any number is a truthy statement");
}

if([]){
    console.log("[] is somehow truthy");
}

if(!false) {
    console.log("false is a falsy statement");
}

if (!0) {
    console.log("0 the only number that is a falsy statement")
}
if(!''){
    console.log("empty string is a falsy statement");
}
if(!null && !undefined){
    console.log("null and undefined is a falsy statement");
}

// 11. Figure out the result of the following comparison expression first without using console.log(). 
// After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.


console.log(4 > 3);
console.log( 4 >= 3);
console.log( 4 < 3);
console.log( 4 <= 3);
console.log( 4 == 4);
console.log( 4 === 4);
console.log( 4 != 4);
console.log( 4 !== 4);
console.log( 4 != '4');
console.log( 4 == '4');
console.log( 4 === '4');
console.log('python'.length != 'jargon'.length)

// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
let today = new Date();
console.log("the numbers of seconds elapsed from January 1, 1970 to now", Date.now());
console.log("the year today",today.getFullYear());
console.log("the month today as a number",today.getMonth());
console.log("the date today",today.getDate());
console.log("the day today as a number",today.getDay());
console.log("the hours now",today.getHours());
console.log("the minutes now",today.getMinutes());
// console.log("",today.());

//13. Write a script that prompt the user to enter base and height of the triangle and 
// calculate an area of a triangle (area = 0.5 x b x h).
const prompt = require('prompt-sync')();
let base = prompt("Enter the base value: ");
let height = prompt("Enter the height value: ");
console.log("The area of the triangle is ", 0.5*base*height);

//// Fro coder community
// let x, y;

// function solveLinEquation(a, b, c) {
//   let equation = a * x + b * y + c;

//   y = -c / b; // put x = 0
//   x = -c / a; // puy y = 0

//   console.log(x, y); 
// }
// solveLinEquation(5, 3, -30); // expected output => x = 6, y = 10 

// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
console.log("the slope between point (2, 2) and point(6,10)", ((10 - 2)/(6-2)));

// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x, y;
x = 0;
yinter = 2*x - 2;
y = 0;
xinter = (y + 2)/2;
// points are now (0, yinter) , (xinter, 0)
slope = (0 - yinter)/(xinter-0);
console.log("xinterface, yinterface, slope", xinter, yinter, slope);


// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and 
// circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let rad = prompt("Enter the raduis value: ");
console.log("Area of the circle is: ", (3.14 * rad * rad));
console.log("Circumference of the circle is: ", (2 * 3.14 * rad));

// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let hh = String(today.getHours());
let min = String(today.getMinutes());

today = mm + '/' + dd + '/' + yyyy + " " + hh + " : " + min;
console.log(today);

// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , 
// give feedback:'You are old enough to drive' but if not 18 give another feedback 
// stating to wait for the number of years he needs to turn 18.

let age = prompt('Enter your age: ');
if (age < 18) {
    console.log("Please wait for the number of years you need to turn 18")
}
else {
    console.log('You are old enough to drive')
}

// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let numint = prompt('Enter an integer: ');
if (numint % 2 == 0){
    console.log("number is even");
}
else{
    console.log("Number is odd");
}

// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
let grade = prompt('Enter the grade: ');
switch(true) {
    case (grade < 50):
        console.log("Grade : F");
        break;
    case (grade < 60):
        console.log("Grade : D");
        break;
    case (grade < 70):
        console.log("Grade : C");
        break;
    case (grade < 90):
        console.log("Grade : B");
        break;
    case (grade <= 100 ):
        console.log("Grade : A");
        break;
}


// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
let month = prompt('Enter the month: ');
switch(true) {
    case (month == "September" || month == "October" || month == "November"):
        console.log("The season is Autumn");
        break;
    case (month == "December" || month == "January" || month == "February"):
        console.log("The season is Winter");
        break;
    case (month == "March" || month == "April" || month == "May"):
        console.log("The season is Spring");
        break;
    case (month == "June" || month == "July" || month == "August"):
        console.log("The season is Summer");
        break;
}

// 22. Write a program which tells the number of days in a month.
const getDays = (year, month) => new Date(year, month, 0).getDate()
const days = getDays(2021, 2)
console.log(days)

// 23. Write a program which tells the number of days in a month, now consider leap year.
const daysleap = getDays(2020, 2)
console.log(daysleap)

// 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js
//  and store the webTechs array in to this file. Access both file in main.js file

// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log("Contains Milk?", shoppingCart.includes('Milk'));
console.log("Contains Meat?", shoppingCart.includes('Meat'));
if( !shoppingCart.includes('Meat')) {
    shoppingCart.unshift("Meat");
}
console.log(shoppingCart);
if( !shoppingCart.includes('Sugar')) {
    shoppingCart.push("Sugar");
}
console.log(shoppingCart);
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);

// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(shoppingCart);

// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log("Min",Math.min(...ages));
console.log("Max", Math.max(...ages));

const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };

console.log("Median", median(ages));
sum = ages.reduce((a, b) => a + b, 0);
avg = (sum / ages.length) || 0;
console.log("Average is", avg);
console.log("Range of ages", Math.max(...ages), "-", Math.min(...ages))
console.log("", Math.abs(Math.max(...ages) - avg));
console.log("", Math.abs(Math.min(...ages) - avg));



// 28. Use for loop to iterate from 0 to 100 and print only prime numbers
let primeArr = [2]
let num = 0;
for (num = 3; num < 100; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeArr.push(num)
    }
}
console.log (primeArr);


// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
sumEven = 0;
sumOdd = 0;
for (let m = 0; m <= 100; m++) {
    if (m%2 == 0){
        sumEven = sumEven + m;
    }
    else {
        sumOdd = sumOdd +m;
    }
}
console.log("Even and Odd sum", sumEven, sumOdd)

// 30. Write a script which generates a random hexadecimal number.
let hexa = "0123456789ABCDEF";
let hexpound = "#";
for (let i = 0; i<6; i++) {
    hexpound = hexpound + hexa[Math.floor(Math.random() * 16)];
}
console.log("Random Hexa", hexpound);

// 31. Sort the webTechs array and mernStack array
// countries Array : https://gist.github.com/incredimike/1469814


// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];
//     - Extract all the countries contain the word 'land' from the countries array and print it as array

function findland(str) {
    if(str, str.includes("land")) {
        return str;
    }
}
cland = countryList.filter(findland);
console.log(cland);

//     - Find the country containing the hightest number of characters in the countries array
function strlen(str) {
    return str.length;
}
const clist = countryList.map(strlen);
console.log(countryList[clist.indexOf(Math.max(...clist))]);

//     - Extract all the countries contain the word 'land' from the countries array and print it as array
// Repeat

//     - Extract all the countries containing only four characters from the countries array and print it as array
function char4(str){
    if (str.length == 4){
        return str;
    }
}
console.log( countryList.filter(char4));

//     - Extract all the countries containing two or more words from the countries array and print it as array
function cwords(str){
    w = str.split(' ');
    if(w.length > 1) {
        return str;
    }
}
console.log(countryList.filter(cwords));

//     - Reverse the countries array and capitalize each country and stored it as an array
rcountryList = countryList.reverse();
function capcountry (str) {
    const firstLetter = str.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = str.slice(1);
    return (firstLetterCap + remainingLetters);
}
console.log(rcountryList.map(capcountry));

// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

let weight = prompt("Enter your weight in kg: ");
let height1 = prompt("Enter your height in metres: ");
let bmi = weight / (height1 * height1);
console.log(bmi)
switch(true) {
    case (bmi < 18.5):
        console.log("You are Underweight");
        break;
    case (bmi < 24.9):
        console.log("You are Normal weight");
        break;
    case (bmi < 29.9):
        console.log("You are Overweight");
        break;
    case (bmi > 29.9):
        console.log("You are Obese");
        break;

}
// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// 35. Write a functions which checks if all items are unique in the array.
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}
let arr2 = [1, 2, 3, 4,7, 5, 6,7];
let arr3 = ["Bangalore", "Mumbai", "Delhi", "Chennai", "Delhi"];
console.log("hasDuplicates", hasDuplicates(arr2));
console.log("hasDuplicates", hasDuplicates(arr3));
