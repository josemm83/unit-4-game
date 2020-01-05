//hp = health points, ap = attack power, cap = counter attack power
var characters = [];
var defenseSelect = false;
var offenseSelect = false;
var attacker;
var defender;
var attackPower;

function charCreate(name, hp, ap, cap) {
    this.name = name;
    this.hp = hp;
    this.ap  = ap;
    this.cap = cap;
}

function alive(user){
    if(user.hp > 0){
        return true;
    }
    return false;
}

function winner(){
    if (characters.length == 0 && attacker.hp > 0){
        return true;
    }
    return false;
}

function attack(user){
    attackPower = user.ap;
}

function updateRoster(roster){
    // console.log("updating roster");
    for (var j = 0; j < roster.length; j ++){
        $("#" + roster[j].name).appendTo("#defense");
    }
}

$(document).on("click", "div", function() {
    // console.log("what is this: " + (this).id);
    if(offenseSelect && !defenseSelect && (this.id != attacker.name)){
        for (var k = 0; k < characters.length; k ++){
            if (characters[k].name === (this).id){
                defender = characters[k];
                characters.splice(k, 1);
                defenseSelect = true;
                $("#" + defender.name).appendTo("#defender");
            }
        }
    }

    if(!offenseSelect){
        for (var i = 0; i < characters.length; i ++){
            if(characters[i].name === (this).id){
                attacker = characters[i];
                attack(attacker);
                characters.splice(i, 1);
                offenseSelect = true;
                $("#" + attacker.name).appendTo("#selection");
            }
        }
        updateRoster(characters);
    }
});

$(document).ready(function(){
    var obiwan = new charCreate("obiwan", 120, 6, 8);
    var luke = new charCreate("luke", 100, 5, 6);
    var sidious = new charCreate("sidious", 150, 8, 7);
    var grievous = new charCreate("grievous", 100, 7, 5);
    characters.push(obiwan, luke, sidious, grievous);
    // console.log(characters);
});