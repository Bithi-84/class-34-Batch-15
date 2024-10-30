
// function sum(){
//     let x = 10;
//     let y = 20;

//     let result = x + y;
//      return result;
// }

// let summation = sum ();

// console.log(summation);



// document.getElementById('result').innerHTML = "The result is=" + summation;

 function sum (){

    let x = document.getElementById('number1').value;

    let y = document.getElementById('number2').value;
    
    


     let result =  parseFloat(x) + parseFloat(y) ;

    document.getElementById("result").innerHTML = "The result is=" + result;
 }







