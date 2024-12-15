// function f1(){
//     let outervar = "i am outer massage";
//     return function f2(){

//         let innervar = "i am inner massage";
//         console.log(outervar);
//         console.log(innervar); 
//     }
    
// }
// f2 = f1();
// f2();


function f1(){
    let x =100;
    return function f2(){
        console.log("my lexical invironment "+ x);
        
    }
}
f2 = f1();
f2();