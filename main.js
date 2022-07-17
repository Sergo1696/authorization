let adm; 
let admPassword; 
let loginStatus; 
let passwordStatus; 

do { 
adm = prompt("Введите логин", ''); 
if (adm == "admin" || adm == "user") { 
loginStatus = true; 
break; 
} else if (adm == '' || adm == undefined) { 
alert("Вы отменили ввод"); 
loginStatus = false; 
throw new Error(); 
} else { 
loginStatus = false; 
break; 
} 
} while (adm = "" || 1); 
do { 
admPassword = prompt("Введите пароль", ''); 
if (admPassword == "admin" && adm == "admin") { 
alert("Вы успешно авторизовались"); 
alert("Вы авторизовались как Администратор. Вам доступны функции администротивной панели."); 
passwordStatus = true; 
break; 
} else if (admPassword == "user" && adm == "user") { 
alert("Вы успешно авторизовались"); 
alert("Вы обычный пользователь"); 
passwordStatus = true; 
break; 
} else if (admPassword == '' || admPassword == undefined) { 
alert("Вы отменили ввод"); 
passwordStatus = false; 
break; 
} else { 
alert('Авторизация провалена'); 
break; 
} 
} while (admPassword == "" || 1);