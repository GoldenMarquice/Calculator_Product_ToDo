//global

var groot = "i am groot";

function calculate (){

    var number1 = Number(prompt("Enter Number 1"));
    var number2 = Number(prompt("Enter Number 2"));
    //get two numbers from the prompt

    //display the two numbers on the console

   // sum(number1, number2);

    console.log(number1, number2);

    // create the substraction operation

    document.getElementById("Math").innerHTML= sum(number1,number2);
    document.getElementById("Math1").innerHTML= sub(number1,number2);
    document.getElementById("Math2").innerHTML= mul(number1,number2);
    document.getElementById("Math3").innerHTML= div(number1,number2);
}
// sum 
function sum(a,b) {
    var sum = a+b;
    console.log(sum);
    return sum;
    
}

// substraticon
function sub (c,d){
    var sub = c-d;
    console.log(sub);
    return sub;
    
}
// multiplication
    function mul (number1,number2) {
    
        var mul = number1*number2;
        console.log(mul);
        return mul;
        
    }

//division
    function div (number1,number2){
        var div = number1/number2;
        console.log(div);
        return div;
        
    }









