var myname="Nahuel";
console.log(myname);
var age=17;
console.log(age);
var ignasiAge=32;
console.log(ignasiAge)
var ageDiff= age-ignasiAge
console.log(ageDiff)
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
var nameClass=["Branko", "Alan", "Alexis", "Ariel", "Agustin", "Diego", "Eduardo", "Elias", "Erica", "Ezequiel", "Gabriel", "Gianfranco", "Ivan", "Joseluis", "Leandro", "Lucas G.", "Lucas H.", "Lucio", "Matias", "Mauro", "Nahuel J.", "Nahuel L.", "Nico F.", "Nico S.", "Rocio", "Rodrigo", "Roman"];
nameClass.sort();
var nameClasssize;
nameClasssize = nameClass.length;
console.log(""+nameClass[0]);
console.log(""+nameClass[nameClasssize - 1]);
console.log("List of the entire classrom sorted by alphabetical order:");
for (var i=0; i < nameClasssize;i++)
{
	console.log( nameClass[i] );
}
