//////////////// Problema 1/////////////////////////////

/* Escribir una funcion que regrese la cantidad de valores true que hay en un array
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
Regresar 0 si el array es vacio */
const arr2 =  [true,false,true];
function filterTrue(arr2) {
    return arr2 != false;
}
const countTrue = arr2 =>{
    return arr2.filter(filterTrue).length;
} 
console.log(countTrue(arr2));

////////////////Fin - Problema 1/////////////////////////////

//////////////// Problema 2/////////////////////////////
function mcd(a, b) {
    // Si b es 0, entonces a es el MCD y se devuelve a
    if (b == 0) {
        return a;
    }
    // De lo contrario, llamamos a la función de manera recursiva pasando b y el resto de a/b como parámetros
    return mcd(b, a % b);
}
console.log(mcd(20,5));

////////////////Fin - Problema 2/////////////////////////////

//////////////// Problema 3/////////////////////////////

// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion
let exit=1;
const arr = [];
var fib = function(n) {
    if (n <= 1) return n;

    return fib(n-1) + fib(n-2);
}
const fibNumbers = (num,exit,arr) =>{
    if(exit < num+1){
        arr.push(fib(exit));
        exit++;
        fibNumbers(num,exit,arr);
    }
return arr;
}
 console.log(fibNumbers(6,exit,arr));

////////////////Fin - Problema 3/////////////////////////////

 //////////////// Problema 4/////////////////////////////
// // reto 3
 var hour = new Date().getHours();
 var day = new Date().getDay();

const isCorrect = (day,hour) =>{
    const bussinessHours = hour => {
        return (hour >= 9 && hour <=18) ? true:false;
    }
    const bussinessDays = day => {
        return (day >= 1 && day <=5) ? true:false;
    }
    //  console.log(bussinessHours(hour) + ' Hora correcto');
    //  console.log(bussinessDays(day) + ' Día correcto');
    let msg;
    if (bussinessDays(day) && bussinessHours(hour)) {
        msg='Todo correcto'
        return msg;
    } else {/* Puedo agregar un else if para los otros 2 casos */
        msg='Uno de los datos esta mal'
        return msg;
    }
}
console.log(isCorrect(hour,day));
////////////////Fin - Problema 4/////////////////////////////


//////////////// Problema 5/////////////////////////////
// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos
let triangleAdd = [];
let start = 1;
let tetrahedralAdd = [];
const intento2 = (num,triangleAdd,tetrahedralAdd,start)=>{
    if(start<=num){
        triangleAdd.push(start);
        start++;
        let prueba = triangleAdd.reduce((a, b) => a + b, 0);
        tetrahedralAdd.push(prueba);
        intento2(num,triangleAdd,tetrahedralAdd,start)
    }else{
        let prueba = tetrahedralAdd.reduce((a, b) => a + b, 0);
        console.log(prueba);
        
    }
}
intento2(7,triangleAdd,tetrahedralAdd,start);


const tetrahedralNumber = num =>{
    let res = (num * (num+1)*(num+2))/6;
    return res;
}
console.log(tetrahedralNumber(7));

////////////////Fin- Problema 5/////////////////////////////

//////////////// Problema 6/////////////////////////////
// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

const landSpace = (country, size) =>{
    const world = 148940000;
    return `${country} is ${ (size * 100)/world}%`;
}
console.log(landSpace('Russia', 17098242));

////////////////Fin -  Problema 6/////////////////////////////


//////////////// Problema 7/////////////////////////////
// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit
const ceroOne = num =>{
    let arr = [1,0];
    return arr[num];
}
console.log(ceroOne(0));
////////////////Fin - Problema 7/////////////////////////////


//////////////// Problema 8/////////////////////////////
// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

const msgBzzz = num =>{
   
        let arr = ["No hay nadie en linea","user1 esta en linea","user1 y user2 estan en linea"];
    if(arr.length<=num){
        console.log(`user1 y ${num-1} mas estan conectados`);
    }else{
        if( num < 0 ){
            console.log('No hay nadie en linea');
        }else{
            console.log(arr[num]);
        }
    }
    
}
msgBzzz(1001);
////////////////Fin - Problema 8/////////////////////////////



