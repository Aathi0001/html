//var
a=10
console.log(a)
var a=10 //Declaration + Initialization
console.log(a)
var b //Declaration
console.log(b)
b=20 //initialization
console.log(b)
b=30 //re-initialization
console.log(b)
var b=40 //re-declaration
console.log(b)

// Output:
// 10
// 10
// undefined
// 20
// 30
// 40

//let
let c=10 //Initialization + Declaration
console.log(c)
let d //Declaration
console.log(d)
d=20 //initialization
console.log(d)
d=30 //re-initialization
console.log(d)
// let c = 100 //re-declaration       Not Possible
// console.log(c)

// Output:
// 10
// undefined
// 20
// 30

//const
const e=10 //Declaration + Initializaation
console.log(e)
// const b //declaration              Not Possible
// console.log(b)
// f=20 //Initialization              Not Possible
// console.log(f)
// e=30 //re-initiaization            Not Possible
// console.log(e)
// const e=40 //re-declaration        Not Possible
// console.log(e)

// Output:
// 10


// typrof()
console.log(typeof(typeof true))  //String
console.log(typeof true) //Boolean

let g= 50;
console.log(typeof g)  //Number

let h= "hello"
console.log(typeof h)  //String

let l = null;
console.log(typeof l)    //Object

let m = undefined;
console.log(typeof m)     //Undefined

let n = 20n;
console.log(typeof n)      //bigint


//Hosting
// console.log(i)      //Undefined
var i= 90;          

//Temporay Dead Zone
// console.log(j)      //Uncaught ReferenceError: Cannot access 'j' before initialization
// console.log(k)      //Uncaught ReferenceError: Cannot access 'k' before initialization
let j = 30;
const k = 50;


//operators

//Arithmetic operator
let o = 9;
let p = 9;

console.log(o+p)
console.log(o-p)
console.log(o*p)
console.log(o/p)
console.log(o**p)
console.log(o%p)

console.log(o)

console.log(o++); // 9 → post-increment: show old value, then o becomes 10
console.log(o);   // 10

console.log(++o); // 11 → pre-increment: increase first, then show
console.log(o);   // 11

console.log(o--); // 11 → post-decrement: show old value, then o becomes 10
console.log(o);   // 10

console.log(--o); // 9 → pre-decrement: decrease first, then show
console.log(o);   // 9

//Assignment operator
let q = 9;
let r = 4;

console.log(q+=r)   //13
console.log(q-=r)   //9
console.log(q*=r)   //36
console.log(q/=r)   //9
console.log(q%=r)   //1
console.log(q**=r)  //1

//Comparision operator
let s = 9;
let t = 3;

console.log(s==t)   //false
console.log(s=='9') //true
console.log(s==9)   //true
console.log(1==true)//true
console.log(s===t)   //false
console.log(s==='9')   //false
console.log(1===true)  //false
console.log(s===9)   //true
console.log(s<=t)   //false
console.log(s>=t)   //true
console.log(s<t)   //false
console.log(s>t)   //true
console.log(s!='9')   //false
console.log(s!=='9')   //true
console.log(s!==9)   //false

//Logical operator
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false



//Bitwise operator
let unum1 = 10;   // Binary: ...0000 1010
let unum2 = 4;    // Binary: ...0000 0100
let unum3 = -5;   // Binary: ...1111 1011 (Two's complement representation)

console.log(`unum1: ${unum1} (Binary: ${unum1.toString(2)})`);
console.log(`unum2: ${unum2} (Binary: ${unum2.toString(2)})`);
console.log(`unum3: ${unum3} (Binary: ${unum3.toString(2)})`); // This will show the sign-extended binary for negative numbers

let uresultAnd = unum1 & unum2; 
// Process:
// unum1: ...0000 1010
// unum2: ...0000 0100
// Result: ...0000 0000
console.log(`unum1 & unum2 = ${uresultAnd}`); // Output: 0

let uresultOr = unum1 | unum2;
// Process:
// unum1: ...0000 1010
// unum2: ...0000 0100
// Result: ...0000 1110
console.log(`unum1 | unum2 = ${uresultOr}`); // Output: 14

let uresultXor = unum1 ^ unum2;
// Process:
// unum1: ...0000 1010
// unum2: ...0000 0100
// Result: ...0000 1110
console.log(`unum1 ^ unum2 = ${uresultXor}`); // Output: 14

let uresultNot1 = ~unum1;
// Process:
// unum1:  0000 1010
// ~unum1: 1111 0101 (Inverting all bits)
console.log(`~unum1 = ${uresultNot1}`); // Output: -11

let uresultNot2 = ~unum3;
// Process:
// unum3:  1111 1011
// ~unum3: 0000 0100 
console.log(`~unum3 = ${uresultNot2}`); // Output: 4

let uresultLeftShift = unum1 << 2;
// Process:
// unum1:      ...0000 1010 
// Shifted left by 2: ...0010 1000 
console.log(`unum1 << 2 = ${uresultLeftShift}`); // Output: 40

let uresultRightShift1 = unum1 >> 1;
// Process:
// unum1:          ...0000 1010
// Shifted right by 1: ...0000 0101 (Sign bit copied from the left)
console.log(`unum1 >> 1 = ${uresultRightShift1}`); // Output: 5

let uresultRightShift2 = unum3 >> 1;
// Process:
// unum3:          ...1111 1011
// Shifted right by 1: ...1111 1101 (Sign bit copied from the left)
console.log(`unum3 >> 1 = ${uresultRightShift2}`); // Output: -3

let uresultZeroFillRightShift1 = unum1 >>> 1;
// Process:
// unum1:              ...0000 1010
// Shifted right by 1 (zero-filled): ...0000 0101
console.log(`unum1 >>> 1 = ${uresultZeroFillRightShift1}`); // Output: 5

let uresultZeroFillRightShift2 = unum3 >>> 1;
// Process: 
// unum3:               ...1111 1011
// Shifted right by 1 (zero-filled): 0...1111 1101 (Leading zeros are added from the left)
console.log(`unum3 >>> 1 = ${uresultZeroFillRightShift2}`); // Output: 2147483645 (for -5, this results in a large positive number)

//Ternary operator
let v = 18;
let result = (v >= 18) ? "Adult" : "Minor";
console.log(result); // Adult


//Type Conversion

//Implicit Type Convertion
console.log(1+"2")  //3
console.log(1-"2")  //-1
console.log(1+'s')  //1s
console.log(1-'s')  //NaN
console.log(1<'2')  //true
console.log(1<2<3)  //true
console.log(3>2>1)  //false
console.log(true+true)   //2

//Explicit Type Convertion

console.log(String(123));     //"123"
console.log(parseInt("99px")) //99
console.log(Number("1234"))   //1234


//String Interpolation

let name = "Aathi";
let age = 21;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);  //Hello, my name is Aathi and I am 21 years old
    

//Multi-line 
let message = `This is line 1
This is line 2
This is line 3`;

console.log(message);


console.log("Hello world, welcome to the world!".indexOf("world"));



//functions

//named function
function sum(a,b){
     return a+b;
}
console.log(sum(20,30))

//arrow function
let add = (a,b)=>{
     console.log(a+b)
}
add(20,30)

//higher order function and call back function and implicit function
//take a function
let sub = (a,b)=>a-b ;   //implicit funtion and callback function
let calc = (a,b,op)=>{   //higherorder function
     return op(a,b)
}
console.log(calc(20,10,sub))

//take a function
function map(arr, fn) {
  const out = [];
  for (const v of arr) out.push(fn(v));
  return out;
}
console.log(map([1,2,3], x => x * x)); // [1,4,9]

// returns a function
const once = (fn) => {
  let called = false,
    result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
};
const addNumbers = (a, b) => {
  console.log("Adding numbers..."); // This will only print once
  return a + b;
};
const addNumbersOnce = once(addNumbers);     // Create a "once" version of the addNumbers function
const result1 = addNumbersOnce(5, 3);       // Call it for the first time
console.log("Result 1:", result1); // Output: Result 1: 8
const result2 = addNumbersOnce(10, 2);     // Call it again (original function won't execute)
console.log("Result 2:", result2); // Output: Result 2: 8


//return a function
function greetGenerate(greeting){
    return function generate(name){     //Higher order function return a function
     return `${greeting} ${name}`;
    }
}
let generate1 = greetGenerate("Hi");
console.log(generate1("Aathi"));        
console.log(generate1("Siva"));   
console.log(generate1("Ganesh"));

//Nested function
var aa = 10;
let ba = 20;
const ca = 30;
function parent(){
    var da = 40;
    let ea = 50;
    const fa = 60;
    console.log(aa,ba,ca,da,ea,fa)
    function child(){
        var ga = 100;
        let ha = 200;
        const ia = 300;
        console.log(ga,ha,ia);
        function grandchild(){
            console.log(aa,ba,ca,da,ea,fa,ga,ha,ia);
        }
        grandchild();
    }
    child();
}
parent();

//IIFE function
(db =>{
    console.log(`${db} conneced`)
})("oracle");

(function (a1) {
  const secret = "scoped";
  console.log(`${a1} IIFE ran`);
})("Hello"); // classic IIFE

(() => {
  console.log("Arrow IIFE");
})(); // arrow IIFE


let array = [true, 10, 2.3, "hello",'$',null, undefined]
console.log(array)                 //[true, 10, 2.3, 'hello', '$', null, undefined]
array[3]="aathi"
console.log(array)                 //[true, 10, 2.3, 'aathi', '$', null, undefined]              
array[99]=100
console.log(array)                 //[true, 10, 2.3, 'aathi', '$', null, undefined, empty × 92, 100]
console.log(array[0])              //true
console.log(delete array[0])       //we cannot delete the index only the element get deleted
console.log(array)            //[empty, 10, 2.3, 'aathi', '$', null, undefined, empty × 92, 100]

let arr11=[10,20,30,40,50]
//pop
console.log(arr11.pop())            //50
console.log(arr11)                 //(4) [10, 20, 30, 40]
//push
console.log(arr11.push(50))       //5
console.log(arr11)               //(5) [10, 20, 30, 40, 50]
//shift
console.log(arr11.shift())      //10
console.log(arr11)             //(4) [20, 30, 40, 50]
//unshift
console.log(arr11.unshift(10))//5
console.log(arr11)           //(5) [10, 20, 30, 40, 50]
//splice
console.log(arr11.splice(1,3,"hello",20,"bye"))  //(3) [20, 30, 40]
console.log(arr11)                              //(5) [10, 'hello', 20, 'bye', 50]
//slice
console.log(arr11.slice(1,4))       //(3) ['hello', 20, 'bye']

//traverse the array
for(let i = 0; i<array.length; i++){
     console.log(array[i])
}

//filter function
let arr = [1,2,3,4,5,6,7,8]
console.log(arr)

let even = arr.filter((e,i,a)=>{
  return e%2==0;
})
console.log(even)

let indexeven = arr.filter((e,i,a)=>{
  return i%2==0 
})
console.log(indexeven)

let odd =arr.filter((e,i,a)=>{
  return e%2!=0;
})
console.log(odd)

//forEach
const numbers = [1, 2, 3, 4, 5];
let sum1 = 0;
numbers.forEach(number => {
    sum1 += number;
});
console.log(sum1); // Output: 15

//reduce
let arr1=[1,2,3,4,5,6,7,8,9]
let mul2 = arr1.reduce((acc,e,i,a)=>{
  console.log(acc,e,i,a)
  return acc*e;
});
console.log(mul2)

let sum2 = arr1.reduce((acc,e,i,a)=>{
  console.log(acc,e,i,a)
  return acc+e;
},100);
console.log(sum2)

//map
let arr2=[1,2,3,4,5,6]
let sq = arr2.map((e,i,a)=>{
  return e+10
})
console.log(sq)

//some
let arr3=[15,13]
let hasodd = arr3.some(itodd=>{
    return itodd%2!==0
});
console.log(hasodd) //true

const hasEven = arr3.some(num => num % 2 === 0);
console.log(hasEven); // false

//every
const nums = [2, 4, 6];
const allEven = nums.every(num => num % 2 === 0);
console.log(allEven); // true

//join
let arr4=["Aathi","Siva","Ganesh"]
let str =arr4.join(" ")
console.log(arr4)      //(3) ['Aathi', 'Siva', 'Ganesh']
console.log(str)      //Aathi Siva Ganesh

//concat
let arr5=[1,2,3,4]
let arr6=[5,8,6,7,8,8]
let con=arr5.concat(arr6)
console.log(con)      //(8) [1, 2, 3, 4, 5, 6, 7, 8]

//include
let inc1=arr6.includes(7)
console.log(inc1)           //true
let inc2=arr6.includes(10)
console.log(inc2)           //false

//indexof
console.log(arr6.indexOf(8))    //1

//lastindexof
console.log(arr6.lastIndexOf(8))    //5

//find
console.log(arr6.find(n=>n>5))      //8

//findIndex
console.log(arr6.findIndex(n=>n>5))   //1

//flatMap
let arr7 = arr6.flatMap(n=>[n,n*8])
console.log(arr7)                       //(12) [5, 40, 8, 64, 6, 48, 7, 56, 8, 64, 8, 64]

//sort
let arr8 = [1,200,2,100,1000,4,7,600]
console.log(arr8.sort())                  //(8) [1, 100, 1000, 2, 200, 4, 600, 7]
let arr9 = [1,200,2,100,1000,4,7,600]
console.log(arr9.sort((a,b)=>a-b))        //(8) [1, 2, 4, 7, 100, 200, 600, 1000]
let arr10 = [1,200,2,100,1000,4,7,600]
console.log(arr10.sort((a,b)=>b-a))       //(8) [1000, 600, 200, 100, 7, 4, 2, 1]

//reverse
console.log(arr7.reverse())               //(12) [64, 8, 64, 8, 56, 7, 48, 6, 64, 8, 40, 5]


//Object
let person ={
  name:"aathi",
  age:21,
  gender:"male",
  married:false,
  wife:null,
  children:["Siva","Ganesh"],
  grandchildren:undefined,
  address:{
    no:484,
    city:"Chennai",
    state:"TamilNadu",
    country:"India",
  },
  sleep(){
    console.log("sleeping")
  },
  play(){
    console.log("playing")
  },
}

console.log(person)       //print all the object
console.log(person.name)    //Aathi
console.log(person.address.city)    //Chennai
console.log(person.children[1])       //Ganesh
console.log(person.sleep())           //undefined
console.log(person.sleep)             //ƒ sleep(){ console.log("sleeping") }
person.sleep()                        //sleeping

console.log(person.wife)      //null
person.wife="Trisha"
console.log(person.wife)    //Trisha

person.age=100
console.log(person.age)     //100

delete person.age
console.log(person.age)   //undefined

//object.keys(objName)
console.log(Object.keys(person))  //(9) ['name', 'gender', 'married', 'wife', 'children', 'grandchildren', 'address', 'sleep', 'play']
//object.values(objName)
console.log(Object.values(person))  //(9) ['aathi', 'male', false, 'Trisha', Array(2), undefined, {…}, ƒ, ƒ]
//object.entries(objName)
console.log(Object.entries(person)) //(9) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]0: (2) ['name', 'aathi']1: (2) ['gender', 'male']2: (2) ['married', false]3: (2) ['wife', 'Trisha']4: (2) ['children', Array(2)]5: (2) ['grandchildren', undefined]6: (2) ['address', {…}]7: (2) ['sleep', ƒ]8: (2) ['play', ƒ]length: 9[[Prototype]]: Array(0)
//object.assign(obj1,obj2,obj3)
let obj1 ={
  name:"Aathi"
}
let obj2={
  age:21
}
let obj3={
  lang:"Tamil"
}
let obj = Object.assign(obj1,obj2,obj3)
console.log(obj)  //{name: 'Aathi', age: 21, lang: 'Tamil'}
console.log(obj1) //{name: 'Aathi', age: 21, lang: 'Tamil'}
console.log(obj2) //{age: 21}
console.log(obj3) //{lang: 'Tamil'}

let obj4 ={
  name:"Aathi"
}
let obj5={
  age:21
}
let obj6={
  lang:"Tamil"
}
let obj456 = Object.assign({},obj4,obj5,obj6)
console.log(obj456) //{name: 'Aathi', age: 21, lang: 'Tamil'}
console.log(obj4) //{name: 'Aathi'}
console.log(obj5) //{age: 21}
console.log(obj6) //{lang: 'Tamil'}

let obj7 ={
  name:"Aathi"
}
let obj8={
  age:21
}
let obj9={
  lang:"Tamil",
  age:100
}
let obj789 = Object.assign({},obj7,obj8,obj9)
console.log(obj789) //{name: 'Aathi', age: 100, lang: 'Tamil'}
console.log(obj7) //{name: 'Aathi'}
console.log(obj8) //{age: 21}
console.log(obj9) //{lang: 'Tamil',age: 100}

let obj7891 = Object.assign({},obj7,obj9,obj8)
console.log(obj7891) //{name: 'Aathi', lang: 'Tamil', age: 21}
console.log(obj7) //{name: 'Aathi'}
console.log(obj8) //{age: 21}
console.log(obj9) //{lang: 'Tamil',age: 100}

//object.seal(objName)        -> Can create, read, update and cannot delete, add
let obj10 ={
  name:"aathi",
  age:10,
  gender:"male"
}
console.log(Object.seal(obj10))       //{name: 'aathi', age: 10, gender: 'male'}
console.log(obj10)         //Read             //{name: 'aathi', age: 10, gender: 'male'}
obj10.age=13;             //update
console.log(obj10)                    //{name: 'aathi', age: 13, gender: 'male'}
console.log(obj10.lang="Tamil")        // add cannot be done //Tamil
console.log(obj10)        //{name: 'aathi', age: 13, gender: 'male'}
console.log(delete obj10.age)          //cannot delete    //false
console.log(obj10)        //{name: 'aathi', age: 13, gender: 'male'}

//object.isSealed(objName)
console.log(Object.isSealed(obj10))     //true

//object.freeze(objName)        -> can create, read and cannot update, delete, add
let obj11 ={
  name:"aathi",
  age:11,
  gender:"male"
}
console.log(Object.freeze(obj11))   //{name: 'aathi', age: 11, gender: 'male'}
console.log(obj11)         //Read             //{name: 'aathi', age: 11, gender: 'male'}
console.log(obj11.age=13)             //update cannot be done   //13
console.log(obj11)                    //{name: 'aathi', age: 11, gender: 'male'}
console.log(obj11.lang="Tamil")        // add cannot be done //Tamil
console.log(obj11)        //{name: 'aathi', age: 11, gender: 'male'}
console.log(delete obj11.age)          //cannot delete    //false
console.log(obj11)        //{name: 'aathi', age: 11, gender: 'male'}

//object.isFrozen(objName)
console.log(Object.isFrozen(obj11))   //true

//object.hasOwnProperty("property")
console.log(obj11.hasOwnProperty("name"))     //true

//JSON Java Script Object Notation
let obj12 ={
  name:"aathi",
  age:21,
  gender:"male",
  married:false,
  wife:null,
  children:["Siva","Ganesh"],
  grandchildren:undefined,
  address:{
    no:484,
    city:"Chennai",
    state:"TamilNadu",
    country:"India",
  },
  sleep(){
    console.log("sleeping")
  },
  play(){
    console.log("playing")
  },
}

console.log(obj12)      //{name: 'aathi', age: 21, gender: 'male', married: false, wife: null, …}
let jsonobj = JSON.stringify(obj12)
console.log(jsonobj)    //{"name":"aathi","age":21,"gender":"male","married":false,"wife":null,"children":["Siva","Ganesh"],"address":{"no":484,"city":"Chennai","state":"TamilNadu","country":"India"}}
console.log(JSON.parse(jsonobj))        //{name: 'aathi', age: 21, gender: 'male', married: false, wife: null, …}


//BOM Browser Object Model
console.log(window)
console.log(window.navigator)
console.log(window.history)
// console.log(window.history.back())
// console.log(history.forward())
console.log(window.innerHeight)
console.log(window.outerHeight)
console.log(window.innerWidth)
console.log(window.outerWidth)
console.log(window.location)

// let alert = window.alert("Do not do this")
// console.log(alert)

// let confirm = window.confirm("Do You want to do")
// console.log(confirm)

// let prompt = window.prompt("Enter your Prompt")
// console.log(prompt)

// let win = window.open("https://google.com", "_blank", "width=400,height=400");

// setTimeout(()=>{                //Execute only one time 
//   console.log("Asnychronous task Execute one time")            //after 2 second it will execute
// }, 2000);

// setInterval(()=>{             //Every two second it will get executed
//   console.log("Asynchronous task Execute again and again")      //execute again and again
// }, 2000)

// let id = setInterval(()=>{
//   console.log("Execute only 11 second")
// },2000)
// setTimeout(()=>{
//   console.log("Stop execution after 11 second")
//   clearInterval(id)
// },11000)

// setTimeout((name, age) => {
//   console.log(`HI, ${name} my age is ${age}`);
// }, 2000, "AATHI", 21);

// setInterval((name)=>{
//   console.log(`Hi, ${name}`)
// }, 2000, "Aathi")

//DOM Document Object Model
//Accessing Element
//getElementById
let element1 = document.getElementById("first")
console.log(element1)             //<div id="first">...</div>
//getElementByClassName
let element2 = document.getElementsByClassName("firsth1")
console.log(element2)           //HTMLCollection [h1.firsth1]
//getElementByTagName
let element3 = document.getElementsByTagName("h1")
console.log(element3)           //HTMLCollection(4) [h1, h1, h1, h1.firsth1]
//querySelector
let element4 = document.querySelector("#first")
console.log(element4)         //<div id="first">...</div>
let element5 = document.querySelector(".firsth1")
console.log(element5)         //<h1 class="firsth1">Hello h1<h1>
let element6 = document.querySelector("div>h6")
console.log(element6)         //<h6>Hello h6</h6>
//querySelectorAll()
let element7 = document.querySelectorAll(".firsth1")
console.log(element7)         //NodeList [h1.firsth1]

//CRUD operation
//add element
let e1 = document.createElement("div")    //create a element
document.body.appendChild(e1)
let e2 = document.createElement("p")    //add at last
e1.appendChild(e2)
let e3 = document.createElement("h1")
e1.prepend(e3) 
let e4 = document.createElement("h1")     //Element added and removed using e4.remove()
e2.appendChild(e4)
//remove element
e4.remove()   //remove e4 

//setAttribute("attribute_name","value")
let s1 = e3.setAttribute("class", "home")   //<h1 class="home">...</h1>
//getAttribute()
console.log(e3.getAttribute("class"))   //home
//removeAttribute()
e3.removeAttribute("class")     //<h1>...</h1>

//add class name
e3.classList.add("web")   //<h1 class="web">...</h1>
e3.classList.add("site")    //<h1 class="web site">...</h1>
//remove class name
e3.classList.remove("site")   //<h1 class="web">...</h1>
//replace class name
e3.className="first second";    //<h1 class="first second">...</h1>

//toggle it is like turn on or off 
e3.classList.toggle("black")    //<h1 class="first second black">...</h1>
e3.classList.toggle("black")    //<h1 class="first second">...</h1>
e3.classList.toggle("black")    //<h1 class="first second black">...</h1>
e3.classList.toggle("black")    //<h1 class="first second">...</h1>


let e5 = document.createElement("p")
e1.appendChild(e5)

//innerText/innerHTML/textContent
e2.innerText = "innerText - Hello <span style=\"display:none\">Hidden</span> <b>World</b>";       
//innerText - Hello <span style="display:none">Hidden</span> <b>World</b>
e3.innerHTML = "innerHTML - Hello <span style=\"display:none\">Hidden</span> <b>World</b>";       
//innerHTML - Hello World
e5.textContent = "textContent - Hello <span style=\"display:none\">Hidden</span> <b>World</b>";   
//textContent - Hello <span style="display:none">Hidden</span> <b>World</b>


console.log(document.getElementById("demo").innerText); 
// Hello
// World
// Visible
console.log(document.getElementById("demo").innerHTML); 
// Hello <br> World <br>
//   Visible<span style="display:none">Hidden</span>
console.log(document.getElementById("demo").textContent); 
// Hello  World 
//   VisibleHidden

let e9 =  document.createElement("div")    //create a element
document.body.appendChild(e9)
let e6 =  document.createElement("div")    //create a element
e9.appendChild(e6)
let e7 =  document.createElement("div")    //create a element
e9.appendChild(e7)
let e8 =  document.createElement("div")    //create a element
e9.appendChild(e8)

//css 
e9.style.display="flex"
e9.style.setProperty("gap","5px")
//create using setProperty
e6.style.setProperty("width","100px");
e6.style.setProperty("height","100px");
e6.style.setProperty("background-color","green");
e6.style.setProperty("border-radius","50%");
e6.style.setProperty("border", "solid 2px black");

//create using property name
e7.style.width="100px";
e7.style.height="100px";
e7.style.backgroundColor="blue";
e7.style.borderRadius="50%"
e7.style.border="solid 2px black";

//create using cssText
e8.style.cssText="width:100px; height:100px; border-radius:50%; background-color:black; border:solid 2px black;"
//update
e6.style.setProperty("background-color","red")
e7.style.backgroundColor="yellow"
e8.style.cssText="width:100px; height:100px; border-radius:50%; background-color:green; border:solid 2px black;"

//delete
e6.style.removeProperty("border");
e7.style.border="";
e8.style.cssText="width:100px; height:100px; border-radius:50%; background-color:green;"

//read
console.log(e6.style.getPropertyValue("background-color"))
console.log(e7.style.backgroundColor)
console.log(e8.style.cssText)

let e10 = document.createElement("div")
e1.appendChild(e10)
e10.style.display="flex"
e10.style.gap="10px"
//Event
//Event Handling
//DOM Property      //cannot overwrite
let b1 = document.createElement("button")
e10.appendChild(b1)
b1.style.width="120px"
b1.style.height="70px"
b1.innerHTML="Button DOM Property"
b1.style.marginBottom="10px"
b1.onclick=()=>{
  console.log("button clicked")     //->first time
}
b1.onmouseenter=()=>{
  console.log("mouse entered")      
}
b1.onmouseleave=()=>{
  console.log("mouse left")
}
b1.ondblclick=()=>{
  console.log("Double clicked")
}
b1.onclick=()=>{                      //we assign multiple event handlers using dom properties for the same event only last one get executed
  console.log("button clicked once")      //->second time
}
b1.onclick = null                   //remove event handler in dom properties

// Create a <style> tag
const style = document.createElement("style");
style.textContent = `
  a {
    text-decoration: none;
    color: blue;
    font-size: 20px;
  }
  a.active {
    color: red;
    font-weight: bold;
  }
`;
document.head.appendChild(style);
// Create the link
const link = document.createElement("a");
link.textContent = "Visit";
link.href = "https://www.youtube.com";
link.target = "_blank";
e10.appendChild(link);
// Normal function: `this` === element
link.onclick = function () {                                                //first funciton
  this.classList.toggle('active'); // works
};
// Arrow function: `this` is NOT the element
link.onclick = () => {                                                      //overwrite first function
  // this.classList.toggle('active'); // ❌ won't work

  link.classList.toggle('active');    // ✅ use the variable instead  
};

//eventlistener
let b2 = document.createElement("button")
e10.appendChild(b2)
b2.style.width="120px"
b2.style.height="70px"
b2.innerHTML="Button EventListener"
b2.style.marginBottom="10px"

b2.addEventListener("click",()=>{       //print first function
  console.log("button clicked")
})
b2.addEventListener("click",()=>{      //print second function
  console.log("button overwite clicked")
})
b2.addEventListener("dblclick",()=>{
  console.log("button double clicked")
})

let fn = () => {
  console.log("mouse enter")
}
// Add event listener
b2.addEventListener("mouseenter", fn);
// After 2 seconds, remove it
setTimeout(() => {
  b2.removeEventListener("mouseenter", fn)
}, 2000)

b2.addEventListener("mouseleave",e =>{
  console.log(e)
  console.log(e.currentTarget)
})
//eventlistener
link.addEventListener("click",e=>{
  console.log(e.preventDefault());        //it do not allow link to navigate
  console.log(e)
  console.log("navigate")
});
    // (or)
//DOM property
link.onclick = e => {
  console.log(e)
  console.log("navigate")
  // e.preventDefault()
  // (or)
  return false;                         //it do not allow link to navigate same as e.preventDefault()
};


b2.addEventListener('click', e => {
  console.log('Bubble (default)');
});

b2.addEventListener('click', e => {
  console.log('Capture');
}, true); // or {capture: true}

b2.addEventListener('click', e => {
  console.log('Runs only once');
}, { once: true });

b2.addEventListener('mouseover', e => {
  console.log('mouse over');
}, { passive: true }); // can't use preventDefault()   

//event object
b2.addEventListener("click", function(e) {
  console.log("Type:", e.type);         // "click"
  console.log("Target:", e.target); 
  console.log("Coords:", e.clientX, e.clientY);
  console.log("Current target:", e.currentTarget);
  console.log("Event phase:",e.eventPhase);
});
  
//stop propogation
let outer = document.createElement("div")
e1.appendChild(outer)
let inner = document.createElement("div")
outer.appendChild(inner)
outer.style.padding="50px";
outer.style.backgroundColor="lightblue"

inner.style.padding="20px";
inner.style.backgroundColor="lightgreen"
inner.innerHTML="click both inner and outer"
outer.addEventListener("click", () => {
  console.log("Outer Div Clicked");
});

inner.addEventListener("click", (event) => {
  console.log("Inner Div Clicked");
  event.stopPropagation(); //  Stops bubbling to outer
});

//event flow
let outer1 = document.createElement("div")
e1.appendChild(outer1)
let inner1 = document.createElement("div")
let b3 = document.createElement("button")
b3.style.width="70px"
b3.style.height="50px"
outer1.textContent=" outer div "
outer1.appendChild(inner1)
outer1.style.padding="50px";
outer1.style.backgroundColor="orange"
outer1.style.marginTop="20px"
inner1.style.padding="20px";
inner1.style.backgroundColor="lightgreen"
inner1.textContent = " inner div ";
inner1.appendChild(b3);
b3.innerHTML="click"
// Bubbling Phase (default: false)
outer1.addEventListener("click", () => console.log("Outer DIV - Bubbling"), false);
inner1.addEventListener("click", () => console.log("Inner DIV - Bubbling"), false);
b3.addEventListener("click", () => console.log("Button - Bubbling"), false);
// Capturing Phase (true)
outer1.addEventListener("click", () => console.log("Outer DIV - Capturing"), true);
inner1.addEventListener("click", () => console.log("Inner DIV - Capturing"), true);
b3.addEventListener("click", () => console.log("Button - Capturing"), true);

//Event Delecation
let ul = document.createElement("ul");
let l1 = document.createElement("li");
let l2 = document.createElement("li");
let l3 = document.createElement("li");
let l4 = document.createElement("li");
l1.textContent = "Apple";
l2.textContent = "Banana";
l3.textContent = "Mango";
l4.textContent = "Orange";
ul.append(l1, l2, l3, l4);  // ✅ append all at once
e1.appendChild(ul);
ul.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {   // check if clicked element is LI
    console.log("You clicked: " + e.target.textContent);
  }
});


//promise
let promise = new Promise((resolve, reject) => {
      let success = true;
      let se = setTimeout(() => {
          if (success) {
              resolve("✅ Task completed successfully!");
          } else {
              reject("❌ Task failed!");
          }
      }, 2000);
      clearTimeout(se)    //clear timeout 
  });
  console.log(promise); 
  // Using then(), catch(), finally()
  promise
      .then(result => console.log(result))   // success
      .catch(error => console.log(error))    // failure
      .finally(() => console.log("🎉 Done checking promise!"));

//async and await
async function data() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    let res1 = await res.json();
    console.log(res1);
    // ✅ Collect only unique categories
    let uniqueCategories = new Set(res1.map(item => item.category));
    // ✅ Create one <ol> outside the loop
    let ol1 = document.createElement("ol");
    document.body.appendChild(ol1);
    // ✅ Loop through unique categories
    uniqueCategories.forEach(category => {
      let li1 = document.createElement("li");
      li1.textContent = category;
      ol1.appendChild(li1);
    });
  } catch (e) {
    console.error("At least one failed:", e.message);
  }
}
data();


//example promise.all
// Helpers
const delay = (ms, value) => new Promise(r => setTimeout(() => r(value), ms));
// ❌ Sequential (slow): ~1000ms total
async function sequential() {
  const a = await delay(500, "A");
  const b = await delay(500, "B");
  return [a, b];
}
// ✅ Parallel (fast): ~500ms total
async function parallel() {
  const pA = delay(500, "A");
  const pB = delay(500, "B");
  const [a, b] = await Promise.all([pA, pB]);
  return [a, b];
}
(async () => {
  console.time("seq");  console.log(await sequential()); console.timeEnd("seq");    
// Starts timer "seq".
// Runs the sequential function.
// When finished, prints the elapsed time under "seq".
  console.time("par");  console.log(await parallel());   console.timeEnd("par");    
// Starts timer "par".
// Runs the parallel function.
// When finished, prints the elapsed time under "par".
})();


//Promise.allSettled
let p1 = Promise.resolve("Success");
let p2 = Promise.reject("Error");
Promise.allSettled([p1, p2])
  .then(results => console.log(results));
    





