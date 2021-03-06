var playerInfo = {
    name: window.prompt("And what shall the young warrior be called?"),
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

let fightPrompt;
let shopOptionPrompt;
let store;

console.log(enemyInfo);

function endGame() {}

var fight = function(enemy) {
    var fightPrompt = window.prompt("Would you like to FIGHT or SKIP this battle? Type 'FIGHT' or 'SKIP' to choose.");
    while(playerInfo.health > 0 && enemy.health > 0) {

        //if player chooses "skip", confirm and stop the loop
        if(fightPrompt === "skip" || fightPrompt === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip this battle?");

            //if yes (true), then leave the fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Onward!");
                //subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                window.prompt(playerInfo.name + " lost 10 dollars by choosing to skip this battle. " + playerInfo.name + " now has " + playerInfo.money + " remaining.");
                break;
            }
        }

        //generate random damage value based on player's attack power 
        var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died! ");

            //award player money for winning 
            playerInfo.money = playerInfo.money + 20;
            console.log(playerInfo.money);
            window.alert(playerInfo.name + " just collected the purse! " + playerInfo.name + " 's money is now " + playerInfo.money);

            //leave while() loop since the enemy is dead
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        //generate random damage value based on an enemy's attack power 
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaning.");

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
                    fight(pickedEnemyName);
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
    "Would you like to REFILL your health, UPGRADE  your attack, or LEAVE the store? Please type 'REFILL', 'UPGRADE' or 'LEAVE' to make your choice."
);
// use switch to carry out the action 
switch (shopOptionPrompt) {
    case "REFILL": // new case 
    case "refill":
        playerInfo.refillHealth();
        break;
    case "UPGRADE": // new case 
    case "upgrade":
        playerInfo.upgradeAttack();
        break;
    case "LEAVE":
    case "leave":
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