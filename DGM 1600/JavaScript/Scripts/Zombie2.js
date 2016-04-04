


window.alert("Welcome to the apocalypse");

var beginningScenarios = ["You are Scavenging for supplies in town when you hear the door creak open", "You decide to make camp in a old barn as you approach you hear footsteps", "You wake up in the middle of the night to groaning"];

function randomNumber(range) {
  "use strict";
  return Math.round(Math.random() * range);
}
window.alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

window.alert("You relize that you may no longer be alone and quickly reach for one of your weapons");

var weaponlist = window.prompt("You have a Knife, a Axe and a Pistol what do you choose").toLowerCase();

switch (weaponlist) {
case "knife":
  window.alert("Rambo would be proud");
  break;
case "axe":
  window.alert("Heres Johnny");
  break;
case "pistol":
  window.alert("You feeling lucky punk");
  break;
default:
  "fists";
  window.alert("Instead of choosing a weapon you decide your bare hands will do the job nicely");
  weaponlist = "fists";
  break;
}

window.alert("Feeling confident in your choice you prepare to use your " + weaponlist);

window.alert("As you creep slowly towards the sound you get a glimpse of what made the sound its a zombie");

window.alert("You decide to try and catch the zombie off gaurd and  go in for the kill ");

window.alert("As you slowly approach the zomibe it turns and charges! you ready your " + weaponlist);


var defence = randomNumber(2);

if (defence === 0) {
 
  window.alert("The zombie tears a chuck of flesh out of your neck you vision fades as you feel the zombie ravaging you");
 
  window.alert("Game Over");
    
} else if (defence > 0) {
  
  window.alert("You let it rip on the zombie with your " + weaponlist + " as the zombie collapses to the ground you decide to call it a day");
}
