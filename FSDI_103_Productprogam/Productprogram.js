
function purchaseProduct(){
    var shoe1 = document.getElementById("shoes").value;
    var price1 = Number(prompt("price of product"));
    var tax = .05;
    var quantity = Number(prompt("number of shoes"));
    var total = ((price1 * tax) + price1)

document.getElementById("total").innerHTML=`<div class= "total" > <p> Recipet <li> Shoe ${shoe1}</li> <li> Price ${price1} </li> <li> Quantity ${quantity}</li> <li> Tax ${tax}</li> <li>Total ${total}</li> </p> </div> `

console.log("total")
}

//document.getElementById("shoe1").innerHTML+=`<li> ${studentName}, ${fsdi101}, ${fsdi102}, GPA: ${total} </li>`;