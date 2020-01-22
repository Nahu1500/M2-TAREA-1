//Exercise 1

var myname="Nahuel";
console.log(myname);

//Exercise 2

var age=17;
console.log(age);

//Exercise 3

var ignasiAge=32;
console.log(ignasiAge)
var ageDiff= age-ignasiAge
console.log(ageDiff)

//Exercise 4

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
var nameClass=["Branko", "Alan", "Alexis", "Ariel", "Agustin", "Diego", "Eduardo", "Elias", "Erica", "Ezequiel", "Gabriel", "Gianfranco", "Ivan", "Joseluis", "Leandro", "Lucas G.", "Lucas H.", "Lucio", "Matias", "Mauro", "Nahuel J.", "Nahuel L.", "Nico F.", "Nico S.", "Rocio", "Rodrigo", "Roman"];
nameClass.sort();
console.log("First name in the list: " + nameClass[0]);
console.log("Latest name in the list: " + nameClass[nameClass.length - 1]);
console.log("List of the entire classrom sorted by alphabetical order:");
for(var i=0; i < nameClass.length ; i++){
	console.log((i + 1)+ ". " + nameClass[i] );
}

//2 Exercise 2

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
let index = 2;

arrind(array, index)

function arrind(array, index){
	console.log("Index number: " + array[index]);
}

//2 Exercise 6