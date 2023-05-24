// global


var tasksCompleted =  ["cook", "clean","drive", "work"];

function getTask(){

var theTask = Number(prompt("Enter Number of the Task"));

document.getElementById("avaliableTasks").innerHTML += `<div> <p> Task <li>  ${theTask} ${tasksCompleted[theTask]} </li> </p> `

console.log("theTask");

}

function completedTasks(){

    var newTasks= prompt("Enter Number of the Task Completed");

    tasksCompleted.push(newTasks);


for(var  i=0; i < tasksCompleted.length; i++){
    document.getElementById("completedTasks").innerHTML += `<li> ${tasksCompleted[i]} </li>`;
}
}