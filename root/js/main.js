var myname=["Nahuel"];
console.log(myname);
var age=[17];
console.log(age);
var ignasiAge=[32];
console.log(ignasiAge)
var ageDiff=[age-ignasiAge]
console.log(ageDiff)
function isAdult(person) {
  if (age >= 21) {
    return true;
  }
  else {
    return false;
  }
  console.log("isAdult");
}
function isAdult(person) {
  return age >= 21;
}
