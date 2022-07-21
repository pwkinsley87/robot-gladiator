/* GAME FUNCTIONS */

//function tO set name 
var getPlayerName = function() { 
    var name = "";
    while(name === "" || name === null) { 
        name = prompt("What is your robot's name?");
    }
    console.log(name);
    return name;
};


var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 5,
    reset: function() { 
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, // comma!
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("refilling player's health by 20 points for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You ain't got the scratch, big fella!");
        }
    },
    upgradeAttack: function() {
        if(this.money >= 7) {
            window.alert("upgrading player's attack by 6 points for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You ain't got the scratch, big fella!")
        }
    }
};

//function to generate a random numeric value 
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Automa-Tom",
        attack: randomNumber(10, 14)
    }
];

let promptFight;
let shopOptionPrompt;
let store;

console.log(enemyInfo);

function endGame() {}

//ask player if they'd like to fight or skip using fightOrSkip function 
var fightPrompt = window.prompt("Would you like to FIGHT or SKIP this battle? Type 'FIGHT' or 'SKIP' to choose.");



var fightOrSkip = function() {

 //validate prompt answer 
    if(fightPrompt === "" || fightPrompt === null) {
        window.alert("you need to provide a valid answer, bitch! Try again.");
        return fightOrSkip(); 
    }       
     
    // convert fightPrompt to all lowercase so we can check with less options 
    fightPrompt = fightPrompt.toLowerCase();

    if (fightPrompt === "skip") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip this battle?");

        //if yes (true), then leave the fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Onward!");
            //subtract money from playerInfo.money for skipping, but do not allow negative integers
                if (playerInfo.money < 10) { 
                    window.alert("You ain't got the scratch, big fella!")
                }

            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            window.alert(playerInfo.name + " lost 10 dollars by choosing to skip this battle. " + playerInfo.name + " now has " + playerInfo.money + " remaining.");

            shop();
            // stop while() loop using break and enter next fight

            //return true if player wants to leave 
            return true;
        }
    }
    return false;
};
     



var fight = function(enemy) {
    
    while(playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they'd like to fight or skip using fightOrSkip function
        if (fightOrSkip()) {
            //if true, leave fight by breaking loop
            break;
        }

        //generate random damage value based on an enemy's attack power 
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        //remove enemy's health by subtracting the amount we set in the damage variable 
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(playerInfo.name + " attacked " + enemy.name + " ." + enemy.name + " now has " + enemy.health + " health points remaining.");
        window.alert(playerInfo.name + " attacked " + enemy.name + " ." + enemy.name + " now has " + enemy.health + " health points remaining.");

        //check enemy's health 
        if(enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            playerInfo.money = playerInfo.money + 20;

            //leave while() loop since enemy is dead 
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health points remaining.");
        }

        //remove player's helath by subtracting the amount we set in the damage variable 
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(enemy.name + " attacked " + playerInfo.name + " ." + playerInfo.name + " now has " + playerInfo.health + " health remaning.");
        window.alert(enemy.name + " attacked " + playerInfo.name + " .G" + playerInfo.name + " now has " + playerInfo.health + " health remaning.");

        //check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            //leave while() loop since the player is dead
            break;
        } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + " health left.");
        }
    }; // end of while loop
}; // end of fight function


// function to start a new game 
var startGame = function() {
    //reset player stats 
    playerInfo.reset();
    
    //fight each enemy-robot by looping over them and fighting them one at a time 
    for(var i = 0; i < enemyInfo.length; i++) {
        // if player is alive, keep fighting
        if(playerInfo.health > 0) {
            // let player know what round they are in. Remember that arrays start at 0, so it needs to have 1 added to it. 
            window.alert("Welcome to Robot Gladiators, Round " + (i + 1));

            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];

            //reset enemy.health before starting new fight
           pickedEnemyObj.health = randomNumber(40, 60);

            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);
            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask if player wnats to use the store before the next round 
                var storeConfirm = window.confirm("This round is over. Would you like to visit the store before the next round?");
                if(storeConfirm) { 
                    shop();
                } else {
                    fight(pickedEnemyObj);
                }
            }
        } else {
            console.log("Player is dead.");
            window.alert("You have lost your robot in battle! Game fucking Over!");
            break;
        }
    };
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

//function to terminate the game 
var endGame = function() {
    // if player is still alive, player wins!
    if(playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + " .");
    } else {
    window.alert("The battle is concluded, your hero forsaken. All that remains now is to bury the dead.");
    }
    // ask the player if they'd like to play again
    var playAgainConfirm = window.confirm("Longing for more?");

    if(playAgainConfirm) {
        //restart the game 
        startGame();
    } else {
        window.alert("Thanks for playing! Many happy returns!");
    }
};

var shop = function() {
// ask player what they'd like to do 
var shopOptionPrompt = window.prompt(
    "Would you like to refill your health, upgrade your attack, or leave the store? Please type 1 to refill your health, 2 to upgrade or 3 to leave the store."
);
// use switch to carry out the action 
shopOptionPrompt = parseInt(shopOptionPrompt);
switch (shopOptionPrompt) {
    case 1:
        playerInfo.refillHealth();
        break;
    case 2:
        playerInfo.upgradeAttack();
        break;
    case 3:
        window.alert("Leaving the store.");
        //do nothing, so function will end
        break;
    default:
        window.alert("You must pick one of the three choices again. Please try agian.");
        //call shop() again to force player to pick a valid option
        shop();
    break;
  };
};

startGame()