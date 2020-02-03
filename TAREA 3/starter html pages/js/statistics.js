let dem = 0 ; rep = 0 ; ind = 0 ;
let stats = {
	"n_dem" : 0,
	"n_rep" : 0,
	"n_ind" : 0
	//least_loyal : [];
	//most_loyal : [];
}
for (var i = 0 ; i < data.results[0].members.length ; i++) {
	rep =  data.results[0].members.filter(R => R.party == "R") 
	dem =  data.results[0].members.filter(D => D.party == "D")
	ind =  data.results[0].members.filter(I => I.party == "I")
}

stats.n_dem = dem.length
stats.n_rep = rep.length
stats.n_ind = ind.length

const td = document.querySelector("tbody")


td.innerHTML=`<tr><td>Republican</td><td>${stats.n_rep}</td><td></td></tr>
<tr><td>Democrat</td><td>${stats.n_dem}</td><td></td></tr>
<tr><td>Independent</td><td>${stats.n_ind}</td><td></td></tr>`
