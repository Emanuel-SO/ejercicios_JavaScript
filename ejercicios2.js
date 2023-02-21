// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

// const arrNames = ["Felipe", "Fer", "Zabdiel"];
const arrNames = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
// const arrNames = ['Harry', 'Ron', 'Hermione'];

// console.log(arrNames);
const secretNames = (arr) =>{
    arr.sort();
    let secret;
    var names = arr.map((element,index) => {
        return element.charAt(0);   
    });
    console.log(names.join(''));
}
// secretNames(arrNames);



// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'
let arr = ['mockIng99', 'J0eyPunch', 'glassedFer'];

const onlineStatus = arr =>{
    if(arr.length <= 0){
        console.log('No hay nadie en linea');
    }else{
        if (arr.length == 1) {
            console.log(`${arr[0]} online`);
        }
        if (arr.length == 2) {
            console.log(`${arr[0]} and ${arr[1]} online`);
        }
        if (arr.length > 2) {
            console.log(`${arr[0]} and ${arr[1]} and ${arr.length - 2} more online`);
        }
    }
}
// onlineStatus(arr);




// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

const arrayMultiplos = (num, long) => {
    let multiplos = []
    for (let index = 0; index < long; index++) {
        multiplos[index] = num*(index+1);
    }
    console.log(multiplos);
}
// arrayMultiplos(17,6);




// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

const arr2 =  [-1, -3, -5, 4, 6767, 1, ];

const positiveDom = arr => {
    let positive = 0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > 0){
            positive++;
        }
    }
    if (positive > arr.length/2) {
        console.log(true);
    }else{
        console.log(false);
    }
}

positiveDom(arr2);




// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

const arrDiv = [1,2,3,4,5,22,6];

const promAntipode = arr =>  {
    let slice1;
    let slice2;
    if(arr.length % 2 != 0){
        let cut = (arr.length - 1)/2;
        slice1 = arr.slice(0,cut);
        slice2 = arr.slice(cut+1,arr.length);  
    }else{
        let cut = (arr.length)/2;
        slice1 = arr.slice(0,cut);
        slice2 = arr.slice(cut,arr.length);  
    }
    let promedio = [];
    slice2.reverse();
    for (let index = 0; index < slice1.length; index++) {
       promedio[index] = (slice1[index] + slice2[index])/2; 
    }
    console.log(promedio);
}
// promAntipode(arrDiv);