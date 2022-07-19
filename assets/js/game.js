var playerName = window.prompt("And what shall we call the young warrior?");
var playerHealth = 100;
var playerAttack =10;

//Multiple values can be logged like so: 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};

enemyHealth = enemyHealth - playerAttack;
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " has " + enemyHealth + " health remaining.");

//check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health remaning.");
}

playerHealth = playerHealth - enemyAttack;
console.log(enemyName + " attacked " + playerName + ". " + playerName + " has " + playerHealth + " remaning.");

if(playerHealth <= 0) {
    window.alert(playerName + " has died!")
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

fight();