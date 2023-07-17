let year = 2023
if ((year % 4 === 0 && year % 100 !== 0) || 400 === 0){
  console.log("El año " + year + " es bisiesto.");
}else {
  console.log("El año " + year + " no es bisiesto.");
}