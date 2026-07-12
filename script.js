const API = "https://minecraft-afk-bot-3e9c.onrender.com";



async function connectBot(){


const host =
document.getElementById("host").value;


const port =
document.getElementById("port").value;


const amount =
document.getElementById("amount").value;



document.getElementById("status").innerHTML =
"Connecting...";



const response = await fetch(
API + "/connect",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

host:host,

port:port,

amount:Number(amount)

})

});



const data = await response.json();



document.getElementById("status").innerHTML =
data.message;


}





async function stopBot(){


document.getElementById("status").innerHTML =
"Stopping...";



const response = await fetch(
API + "/stop",
{
method:"POST"
}
);



const data = await response.json();



document.getElementById("status").innerHTML =
data.message;


}
