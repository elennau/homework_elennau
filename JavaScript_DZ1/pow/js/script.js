var x = prompt('Введите число:', 0);
var n = prompt('Введите степень числа:', 0);


function pow(x, n) {
 
  var result = 1;

  for (var i = 0; i < n; i++) {
   result = result*x;
	
  }

  return result;
}

var rez = pow (x, n);

alert (x + ' в степени ' + n + ' равно ' + rez);

console.log ('rez = ', rez);

