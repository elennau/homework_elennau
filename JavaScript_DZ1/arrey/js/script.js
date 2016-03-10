var arrNameUser = [];

  for (var i = 0; i < 5; i++) {
  var j = i + 1;
   arrNameUser[i] = prompt('Введите ' + j + '-е имя:' , ' ');
    }

 var NameUser = prompt('Введите имя пользователя:', '');

 var searchUser = 0;

  for (var i = 0; i < arrNameUser.length; i++) {
  if (arrNameUser[i] == NameUser) {
  searchUser++;
} 
}

if (searchUser > 0) {
  alert (NameUser + ', Вы успешно вошли!');
} else {
  alert ('Ошибка!!!');
  }

console.log ('arr = ', arrNameUser);

console.log ('NameUser= ', NameUser);
