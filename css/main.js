//filter method

var a=[1,5,10,34,20,54,66,87,90,55,59,90];
document.write(" Given Array a=[1,5,10,34,20,54,66,87,90,55,59,90]"+"<br><br>"+"Divisible by 5"+"<br><br>");

var output=a.filter(function(e){
	return e%5==0;
})
document.write(output);
document.write("<br><br><br>");

//map method

var birds=["dove","peacock","parrot","cuckoo"];
document.write("MAP METHOD"+"<br><br>"+"Given array birds=[dove, peacock, parrot, cuckoo]"+"<br><br>");
var output=birds.map (function(e){
	return e.toUpperCase();
})
document.write(output);