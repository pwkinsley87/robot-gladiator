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

playerHealth = playerHealth - enemyAttack;
console.log(enemyName + " attacked " + playerName + ". " + playerName + " has " + playerHealth + " remaning.");

fight();