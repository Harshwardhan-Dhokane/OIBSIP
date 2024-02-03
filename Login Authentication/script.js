//console.log("Wwlcome")

var objuser=[
    {
        username:"Harsh",
        password:"1234"
    },
    {
        username:"sanket",
        password:"1234"
    },
    {
        username:"suraj",
        password:"1234"
    }
]

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i =0; i<objuser.length; i++)
    {
        if(username == objuser[i].username && password == objuser[i].password)
        {
            console.log(username+" is logged in !");
            return
        }
    }
    console.log("incorrect Username or Password");
}