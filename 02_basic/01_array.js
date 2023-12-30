const myArray =[1,2,3,4,5,'Govinda'];//element ,deep copy while copy operation,resizable,any data type value in element ;
const arr2 = new Array(1,2,3,4);
// console.log(arr2[1]);  

//protocall insde protocal

const myHeore = ["Govinda ","Hitesh"];


//Array Method
myArray.push(6);
myArray.push(7);
myArray.pop();
myArray.unshift(90);
myArray.shift(90);
// console.log(myArray);
// console.log(myArray.includes(4));//output T and F
// console.log(myArray.includes(30));
// console.log(myArray.indexOf(4));
// console.log(myArray.indexOf(30));//if not present ans is -1
// console.log(myArray);

const newArray = myArray.join();//join=> it convert array in string ,data remain same but change the type
// console.log(newArray);
// console.log(typeof(newArray));

//slice splice  
//slice => give result last index element not give orignal array remian same 
//splice => give result last index element also give orignal array change
// console.log("A "+myArray);

const myn1=myArray.slice(1,3);
// console.log(myn1);
// console.log("B "+myArray);

const myn2=myArray.splice(1,3);
// console.log(myn2);
// console.log("C "+myArray);

//==========================
//Array part 2
//in console = declear on array their is diff protocal


const marvel_heros =["thor","Irobman","spiderman"]//marvel 
const dc_heros = ["suparman","flash","batman"]//dc 

marvel_heros.push(dc_heros);//push=> add element in last but orinal array change
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

//concat =>concate two aaray and return new array ,original array remain same
const allHeros=marvel_heros.concat(dc_heros);
console.log(allHeros);

//spread => glass brock / make all as a induatual /use=> when we want 3 array in single
const all_new_heros = [...marvel_heros,...dc_heros] ;
console.log(all_new_heros);


//flat => give new array all sub array concatenate accoding to depth
const anather_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_anather_array=anather_array.flat(Infinity);
console.log(real_anather_array);

console.log(Array.isArray("Govinda"));//isArray=> cheak It is array or not
console.log(Array.from("Govinda"));//from=> covert any obj/value into array
console.log(Array.from({name: "Govinda"}));//intersting //we have to give key array or value array


//return new element from set of element[vari,arr ,etc]
const score1=100;
const score2=200;
const score3=300;;
console.log(Array.of(score1,score2,score3));










