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

function attack(atk, def){
    def.hp -= atk.ap;
    $("#msg").text("You attacked " + def.name + " for " + atk.ap + " damage points.")
    atk.ap += attackPower;
}

function counterAttack(atk, def){
    atk.hp -= def.cap;
    $("#msg").append("<br>" + def.name + " counter attacked you for " + def.cap + " damage points.");
}

function alive(user){
    if(user.hp > 0){
        return true;
    }
    return false;
}

function winner(){
    if (characters.length == 0 && attacker.hp > 0){
        $("#msg").text("Congrats you won the game!!!");
        return true;
    }
    return false;
}

function setAttack(user){
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
                setAttack(attacker);
                characters.splice(i, 1);
                offenseSelect = true;
                $("#" + attacker.name).appendTo("#selection");
                $("#msg").text("Select which character to attack");
            }
        }
        updateRoster(characters);
    }
});

$(document).on("click", "#attack", function(){
    if (offenseSelect && defenseSelect){
        if (alive(attacker) && alive(defender)){
            attack(attacker, defender);
            counterAttack(attacker, defender);
            $("#hp").text(attacker.hp);
            $("#hp").text(defender.hp);
            if(!alive(defender)){
                $("#msg").text("Enemy defeated! Pick another enemy to battle");
            }
            if(!alive(attacker)){
                $("#msg").text("Game Over!!! Restarting Game");
                $(document).on("click", "#attack", function(){
                    location.reload();
                });
            }
        }
        if(!(alive(defender))){
            $("#" + defender.name).remove();
            defenseSelect = false;
            if (winner()){
                $(document).on("click", "#attack", function(){
                    location.reload();
                });
            }
        }
    }
});

$(document).ready(function(){
    var obiwan = new charCreate("obiwan", 120, 6, 15);
    var luke = new charCreate("luke", 100, 5, 10);
    var sidious = new charCreate("sidious", 175, 8, 25);
    var grievous = new charCreate("grievous", 130, 7, 20);
    characters.push(obiwan, luke, sidious, grievous);
    $("#msg").text("Select a character to start with");
    // console.log(characters);
});