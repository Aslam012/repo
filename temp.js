
// //     for(let i =0; i < 51; i++){


// // //     
// //         if(i % 2 == 0){
// //             console.log("red" + i);
// //         }else{
// //             console.log("purple" + i);

// //         }
// //     }




// // function hello(){
// //     let count =0

// //     function shoaib(){
// //         count++

// //         for(let i = 0; i < count; i++){
// //             if(count[i] % 2 == 0){
// //       clearInterval(interval);

// //                 document.getElementById("results").inner += "odd" + "<br>";       
// //                 console.log(results);
// //                  } else {
// //                 document.getElementById("results").inner += "even" + "<br>";       

// //                  }
// //         }
// //     }
// //   let interval = setInterval(shoaib,1000);

// // }



//   let array = []
//  function arrayy() {
//     let num = 50
//     for (let i = 1; i <= num; i++) {
//       array.push(i);
//     }
//     return this.array
//   }




let demo = () =>{

    let count=0;
    let color = ''
  
    let shoaib = () => {
  
     
      count++;
    
      if(count == 20){
        clearInterval(interval);
      }
      if(count%2==0){
        color='yellow'
      }
      else{
        color='red'
      }
    
      document.getElementById("results").innerHTML += count + ' ' + color +"<br>";
      
    }
   
    let interval = setInterval(shoaib,200);
  
  }
  
  
