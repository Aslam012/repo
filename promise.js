// let data = 1;
// console.warn(data);
 
//  data = 2;
// setTimeout(()=>{
// console.warn(data);
// },2000)

//  data = 3 
// console.warn("last" , data);



//  let  data = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
        // 1) resolve("this code has been exeuted")
        // 1) resolve({name : "anil" , Age : 20})
    //     reject("some issue")

    //  },2000)

//  })
//  1)console.warn(data);
// data.then((item)=>{
// console.warn(item);
// }).catch((err)=>{

//     console.warn("catch block",err);
// })
// console.warn("hello");



//  promise chaining 
// ek stahh ek promise ka result dusre mai karte 

//    let data = fetch("http://dummy.restapiexample.com/api/v1/employees");
//    data.then((item)=>{
//        return item.json()
//     //    console.warn(item);
//    }).then((result)=>{
//        console.warn("2nd output",result);
//    }) 

// 2nd example

// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve(10)
//         reject(10)
//     },2000)
// })
// data.then((item)=>{
//     // console.warn("1st",item);
//     console.warn("then block",item);

// // [
// //     return item*10;
// // }).then((item)=>{
// //     console.warn("2st",item);
// //     return item*10;
// // }).then((item)=>{
// //     console.warn("3nd",item);
// //     return item*10;
// // })
// ]

// }).catch((err)=>{
//     console.warn("catch block",err);
// })


let data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve(10)
            reject(10)
        },2000)
    })
    data.finally((item)=>{
        console.warn("final block",item);
    } )

