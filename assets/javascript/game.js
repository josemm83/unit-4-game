//hp = health points, ap = attack power, cap = counter attack power
var obiWan = {
    HP: 120,
    AP: 6,
    CAP: 8
};

var luke = {
    HP: 100,
    AP: 5,
    CAP: 6
};

var sidious = {
    HP: 150,
    AP: 8,
    CAP: 7
};

var grievous = {
    HP: 100,
    AP: 7,
    CAP: 5
};

function attack(){
    $("#attack").on("click"), function(){

    }
}

function defense(){

}

$(document).ready(function(){
    $("#obiwan").on("click", function(){
        alert("Hello There!");
        $("#obiwan").appendTo("#selection");
        $("#luke").appendTo("#defense");
        $("#sidious").appendTo("#defense");
        $("#grievous").appendTo("#defense");
    });

    $("#luke").on("click", function (){
        alert("I am a Jedi like my father");
    });

    $("#sidious").on("click", function(){
        alert("I am the Senate!");
    });

    $("#grievous").on("click", function(){
        alert("Prepare for attack!");
    });
});