var playerName = window.prompt("And what shall we call the young warrior?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Automa-Tom"];

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var enemyHealth = 50;
var enemyAttack = 12;
let fightPrompt;
console.log(enemyAttack, enemyHealth);

var fight = function(enemyName) {
    //fight function statements
    window.alert("Welcome to Robot Gladiators!");

    var fightPrompt = window.prompt("Would you like to FIGHT or SKIP this battle? Type 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight 
    if (fightPrompt === "fight" || fightPrompt === "FIGHT") 
    {
       enemyHealth = enemyHealth - playerAttack;
       console.log(playerName + " attacked " + enemyName + ". " + enemyName + " has " + enemyHealth + " health remaining.");
       //check enemy's health
       if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
        } else {
          window.alert(enemyName + " still has " + enemyHealth + " health remaning.");
        }   
        //remove player's health by subtractin the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
         console.log(enemyName + " attacked " + playerName + ". " + playerName + " has " + playerHealth + " remaning."
        );

        if(playerHealth <= 0) {
       window.alert(playerName + " has died!")
        } else {
       window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    //if player chooses to SKIP
} else if(fightPrompt === "skip" || fightPrompt ===     "SKIP") {
    console.log(fightPrompt);
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you want to skip this battle?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + "has decided to skip this fight. Onward!");
        //subtract money from playerMoney for skipping 
        playerMoney = playerMoney - 2;
        console.log(playerMoney);
    }
    //if no (false), ask question again by running fight() again 
    else {
        fight();
    }
    } else {
      window.alert("You must enter a valid option. (Either 'Fight' or 'Skip') Try again!.")
      fight();
    }
};
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}