// 1.
// console.log('Privet,' + ' ' + prompt("Kak teby zovut?"));
// 2.
// const YEAR = 2025;
// birthYear = parseInt(prompt("Vvedite god rozdeniy"), 10);
// if (!isNaN(birthYear)& birthYear>=0) {
//     age = YEAR - birthYear;
//     alert(`Vam ${age} let.`);
// } else {
//     alert("Vvedite korrektniy god");
// }
// 3.
// const side = prompt("Vvedite storonu kvadrata");
// const perimeter = parseFloat(side) * 4;
// alert(`Perimeter: ${perimeter}`);
// 4.
// const radius = prompt('Vvedite radius okruznosti:');
// const square = Math.PI * Math.pow(parseFloat(radius), 2);
// alert(`Ploshad okruznosti: ${square}`);
// 5.
// const km = prompt('Vvedite rasstoynie km:');
// const time = prompt('Vremy v puti (chas)?');
// const skorost = parseFloat(km) / parseFloat(time);
// alert(`neobhodimay skorost: ${skorost} km/chas`);
// 6.
// const converter = 0.85;
// const usd = prompt('vvedite summu usd:');
// const eur = parseFloat(usd) * converter;
// alert(`${usd} usd = ${eur.toFixed(2)} eur`);
// 7.
// const file = 820;
// const flashka = prompt('Vvedite razmer flashki Gb:');
// const flashka2 = parseFloat(flashka) * 1024 ;
// if(flashka >= 0 ){
// const countFile = Math.floor(flashka2 / file);
// alert(`Na flashky ${flashka} Gb  ${countFile} failov ${file} Mb`);
// }
// else{
//      alert("Vvedite korrektniy razmer Gb");
// }
// 8.
// const balance = prompt('Balans koshelka:');
// const chocolate = prompt('Cena odnoy shokoladki:');
// if( balance>=0 & chocolate >=0){
// const count = Math.floor(parseFloat(balance) / parseFloat(chocolate));
// const sdacha = parseFloat(balance) % parseFloat(chocolate);
// alert(`Dostupno ${count} chokolate. Sdacha: ${sdacha}`);}
// else{
//     alert("Balance or cena shokoladki ne mozet bit otrizatelnoy");
// }
// 9.
// const number = prompt('Vvedite trehznachnoe chislo:');
// const num = parseInt(number);
// const sotni = Math.floor(num / 100);
// const desytki = Math.floor((num % 100) / 10);
// const edenici = num % 10;
// if (!isNaN(number) && number >= 100 && number <= 999) {
// const revers = edenici * 100 + desytki * 10 + sotni;
// alert(`Chislo ${number} reverse: ${revers}`);}
// else{
//     alert("Vvedite TREHZNACHOE chislo!");
// }
// 10.
// const number = prompt('Vvedite celoe chislo:');
// const num = parseInt(number);

// if(num % 2 == 0 ){
//     alert(`Число ${number} - chetnoe`);
// }
// else{
//         alert(`Число ${number} - Nechetnoe`);
// }