// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
const arr2 =  [true,false,true];
function filterTrue(arr2) {
    return arr2 != false;
}
const countTrue = arr2 =>{
    return arr2.filter(filterTrue).length;
} 
// console.log(countTrue(arr2));




// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion
let i = 2;
const mayorComunDivisor = (num1, num2,i) =>{
    
    if( num1%i == 0 &&  num2%i == 0){

        return i;
    }else{
        i++
        mayorComunDivisor(num1,num2,i);
    }
}
// console.log(i);
console.log(mayorComunDivisor(4,8,i));



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
    }else{
    console.log(arr); 
    }
}
//  fibNumbers(5,exit,arr);

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

