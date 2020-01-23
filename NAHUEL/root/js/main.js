//Exercise 1

console.log("1_Create a variable called myName with your name as the value:")

var myname="Nahuel";

console.log(myname);

//Exercise 2

console.log("2_ Create a variable called age with a number that is your age:")

var age=17;

console.log(age);

//Exercise 3

console.log("3_ Create a variable called ignasiAge with a value 32:")

var ignasiAge=32;

console.log(ignasiAge)

console.log("3.b_ Create another variable called ageDiff and set it to an expression that calculates your age minus Ignasi's age:")

var ageDiff= age-ignasiAge

console.log(ageDiff)

//Exercise 4

console.log("4_ Write a conditional that compares the variable with your age with the number 21:")

function isAdult(age) 
{
  if (age >= 21)
  {
    return true;
  }
  else
  {
    return false;
  }
}
if (isAdult(age)) 
{
	console.log("You are older than 21")
}
else
{
	console.log("You are not older than 21")
}

console.log("5_ Write a conditional that compares your age with Ignasi's age:")

//Exercise 5

function myAgeAndIgnasiAge(age, ignasiAge)
{
	if (age >  ignasiAge) 
	{
		return 0
	}
	else if (age < ignasiAge)
	{
		return 1
	}
	else (age == ignasiAge)
	{
		return 2
	}
}
var zero= myAgeAndIgnasiAge(age, ignasiAge)

if (zero==0)

console.log("You are older than ignasi")

if (zero==1)

console.log("You are younger than ignasi")

if (zero==2)

console.log("You have the same age than ignasi")

// 2 Exercise 1

console.log("1| Create an array with all the names of your class (including mentors):")

var nameClass=["Branko", "Alan", "Alexis", "Ariel", "Agustin", "Diego", "Eduardo", "Elias", "Erica", "Ezequiel", "Gabriel", "Gianfranco", "Ivan", "Joseluis", "Leandro", "Lucas G.", "Lucas H.", "Lucio", "Matias", "Mauro", "Nahuel J.", "Nahuel L.", "Nico F.", "Nico S.", "Rocio", "Rodrigo", "Roman"];

nameClass.sort();

console.log("First name in the list: " + nameClass[0]);

console.log("Latest name in the list: " + nameClass[nameClass.length - 1]);

console.log("List of the entire classrom sorted by alphabetical order:");

for(var i=0; i < nameClass.length ; i++){

	console.log((i + 1)+ ". " + nameClass[i] );
}

//2 Exercise 2

console.log("2| Create an array with all the ages of the students in your class:")

var ageClass=[17, 22, 25, 23, 19, 17, 20, 19, 23, 23, 18, 20, 20, 20, 20, 23, 24, 19, 18, 17, 24, 20, 20, 20, 19, 26, 32]

let j=0

console.log("List of the ages from the students:");

while(j < ageClass.length){

	console.log((j + 1)+ ".age " + ageClass[j] );

	j++;
}

console.log("While loop:")

j=0

while(j < ageClass.length){

	if ( (ageClass[j] % 2) == 0)

		console.log( ageClass[j] + " ages.");

	j++;
}

console.log("For loop:")

for(let j=0; j < ageClass.length ; j++){

	if ((ageClass[j] % 2) == 0)

		console.log("ages: "  + ageClass[j]);
}

//2 Exercise 3

console.log("3| Write a function which receives an array as a parameter and prints the lowest number in the array to the console:")

var array=[-2, -1, 0, 1, 2]

console.log("Array of numbers:")

for(let i=0; i < array.length ; i++){

	console.log("." + array[i]);
}

smallernumber(array)

function smallernumber(array){

	let res=array[0]

	for(i=0; i < array.length ; i++)

	if (res > array[i]) {

		res=array[i]
	}

	console.log("The Smallest Number is: " + res)
}

//2 Exercise 4

console.log("4| Write a function which receives an array as a parameter and prints the biggest number in the array to the console:")

biggernumber(array)

function biggernumber(array){

	let res=array[0]

	for(i=0; i < array.length ; i++)

	if (res < array[i]) {

		res=array[i]
	}

	console.log("The Biggest Number is: " + res)
}

//2 Exercise 5

console.log("5| Write a function which receives two parameters, an array and an index:")

let index = 2;

arrind(array, index)

function arrind(array, index){

	console.log("Index number: " + array[index]);
}

//2 Exercise 6

console.log("6| Write a function which receives an array and only prints the values that repeat:")

let repeat=[2, 2, 3, 4, 6, 3, 4, 5, 7, 6, 9, 2, 3, 4, 3, 2]

function numberRepeted(repeat) {

	let numerosRepetidos = []

	let variableComparada

	for (var i = 0; i < repeat.length; i++){

		variableComparada=repeat[i]

		for(var j = i + 1; j < repeat.length; j++){

			if (variableComparada== repeat[j]){

				if (repeat[i]==repeat[j] && numerosRepetidos.indexOf(repeat[i])==-1) {

					numerosRepetidos.push(repeat[i])

					break;
				}
			}
		}
	} console.log(numerosRepetidos)
} numberRepeted(repeat)

//2 Exercise 7

console.log("7| Write a simple JavaScript function to join all elements of the following array into a string:")

var myColor = ["Red", "Green", "Yellow", "Blue"];

function colors(myColor){

	console.log('"' + myColor.join('" , "') + '"');

}colors( myColor )


//3 Exercise 1

console.log("1. Write a JavaScript function that reverses a number:")

function reverse_a_number(n){

	n = n + "";

	return n.split("").reverse().join('');
}

console.log("Reverse Number: " + reverse_a_number(58443));

//3 Exercise 2

console.log("2. Write a JavaScript function that returns a string in alphabetical order:")

function alphabet_order(order){

	return order.split('').sort().join('');

 }

console.log("String in Alphabetical order: " + alphabet_order("nahuelescrack"));

//3 Exercise 3

console.log("3. Write a JavaScript function that converts the first letter of every word to uppercase:")

function uppercase(up){

  var mayuscula = up.split(' ');

  var return_up = [];
    
  for(var i = 0; i < mayuscula.length; i++){

      return_up.push(mayuscula[i].charAt(0).toUpperCase()+mayuscula[i].slice(1));

  }

  return return_up.join(' ');

}

console.log("String with Uppercase: " + uppercase("hello world"));

//3 Exercise 4

console.log("4. Write a JavaScript function that finds the longest word in a phrase:")

function find_longest_word(long){

  var firstArray = long.match(/\w[a-z]{0,}/gi);

  var finishArray = firstArray[0];

  for(var i = 1 ; i < firstArray.length ; i++)

  {
    if(finishArray.length < firstArray[i].length)

    {
    finishArray = firstArray[i];

    } 
  }

  return finishArray;
}

console.log("The Longest String: " + find_longest_word('hola soy la palabra mas larga'));




 