var playerName = window.prompt("And what shall we call the young warrior?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy-Android", "Automa-Tom"];
var enemyHealth = 50;
var enemyAttack = 12;
let fightPrompt;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
console.log(enemyAttack, enemyHealth);

function endGame() {}

var fight = function(enemyName) {
    var fightPrompt = window.prompt("Would you like to FIGHT or SKIP this battle? Type 'FIGHT' or 'SKIP' to choose.");
    while(playerHealth > 0 && enemyHealth > 0) {

        //if player chooses "skip", confirm and stop the loop
        if(fightPrompt === "skip" || fightPrompt === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip this battle?");

            //if yes (true), then leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Onward!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10; 
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died! ");

            //award player money for winning 
            playerMoney = playerMoney + 20;
            console.log(playerMoney);
            window.alert(playerName + " just collected the purse! " + playerName + " 's money is now " + playerMoney);

            //leave while() loop since the enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable 
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaning.");

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            //leave while() loop since the player is dead
            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + " health left.");
        }
    }; // end of while loop
}; // end of fight function


// function to start a new game 
var startGame = function() {
    
    //fight each enemy-robot by looping over them and fighting them one at a time 
    for(var i = 0; i < enemyNames.length; i++) {
        // if player is alive, keep fighting
        if(playerHealth > 0) {
            // let player know what round they are in. Remember that arrays start at 0, so it needs to have 1 added to it. 
            window.alert("Welcome to Robot Gladiators, Round " + (i + 1));

            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight
            enemyHealth = 75;

            //reset player stats
            playerHealth = 100;
            playerAttack = 10;
            playerMoney = playerMoney;

            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
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
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " .");
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

startGame();