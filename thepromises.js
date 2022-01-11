// pass by value
// let a = 2;
// let b = a;

// b= b + 5

// console.log(a);
// console.log(b);


// pass by reference
// 1st example
// const obj1 = {
//     name:"rasika",
//     age:21
// }

// const obj2 = obj1
// obj2.name = "rasika shilimkar"

// console.log(obj1)
// console.log(obj2)



// 2nd example
// const array1 = [1,3,7,8]
// const array2 = array1


// const array2 = [].concat(array1)


// array2.push(10)
// console.log(array1);
// console.log(array2);


// call back function

// const funA = () =>{
//    setTimeout(function(){
//        console.log("A")
//        funB()
//    },2000)
// }

// const funB = () =>{
//     console.log("B")
// }

// funA();



// const perOne = (call,callback) =>{
//     console.log("hiii",call)
//     callback()
// }

// const perTwo = () =>{
//     console.log("call me back")
// }

// perOne("rasika",perTwo)



