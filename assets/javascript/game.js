//hp = health points, ap = attack power, cap = counter attack power
var obiwan = {
    hp: 120,
    ap: 6,
    cap: 8
};

var luke = {
    hp: 100,
    ap: 5,
    cap: 6
};

var sidious = {
    hp: 150,
    ap: 8,
    cap: 7
};

var grievous = {
    hp: 100,
    ap: 7,
    cap: 5
};

var defenseSelect = false;
var offenseSelect = false;
var attacker;
var defenders=[];

function attack(warrior){
    $("#attack").click(function(){
        // console.log(warrior);
        warrior.ap += 6;
        // console.log("attacker's new attack power: " + warrior.ap);
    });
}

function defenderChoice(){
    if(offenseSelect){
        $("#luke").on("click", function(){
            $("#luke").appendTo("#defender");    
        });
        defender = true;
    }

    else if(defender) {

    }

    else {
        alert("Please select a defender");
    }
}

function gameStart(offense){
    defenderChoice();
    attack(offense);
}

$(document).ready(function(){
    $("#obiwan").on("click", function(){
        alert("Hello There!");
        $("#obiwan").appendTo("#selection");
        $("#luke").appendTo("#defense");
        $("#sidious").appendTo("#defense");
        $("#grievous").appendTo("#defense");
        offenseSelect = true;
        gameStart(obiwan);
    });

    $("#luke").on("click", function (){
        alert("I am a Jedi like my father");
        $("#obiwan").appendTo("#defense");
        $("#luke").appendTo("#selection");
        $("#sidious").appendTo("#defense");
        $("#grievous").appendTo("#defense");
        offenseSelect = true;
        attacker = luke;
    });

    $("#sidious").on("click", function(){
        alert("I am the Senate!");
        $("#obiwan").appendTo("#defense");
        $("#luke").appendTo("#defense");
        $("#sidious").appendTo("#selection");
        $("#grievous").appendTo("#defense");
        offenseSelect = true;
        attacker = sidious;
    });

    $("#grievous").on("click", function(){
        alert("Prepare for attack!");
        $("#obiwan").appendTo("#defense");
        $("#luke").appendTo("#defense");
        $("#sidious").appendTo("#defense");
        $("#grievous").appendTo("#selection");
        offenseSelect = true;
        attacker = grievous;
    });
});