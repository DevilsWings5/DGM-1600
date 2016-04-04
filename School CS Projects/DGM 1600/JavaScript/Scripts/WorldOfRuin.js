var outcome;


window.alert("The year is 2055 you Wake from a deep cryogenic slumber to find the world is a wasteland");

window.alert("You slowly step out of you cryo chamber and have a look around");

var startingScenarios = ["You are find yourself in an old rusty millitary building", "You find yourself in a ruined building ", "You find yourself in a partialy colapsed subway line"];

function randomNumber(range) {
  "use strict";
  if (typeof range === "number") {
    return Math.round(Math.random() * range);
  }
}
window.alert(startingScenarios[randomNumber(startingScenarios.length - 1)]);

window.alert("As you continue to look around you hear a strange automated voice comming from your advanced wrist watch");

var character = {
  Hp: 0,
  speed: 0,
  atkprimary: 0,
  atksecondary: 0,
  primaryWeapon: "item",
  secondaryWeapon: "item",
  name: window.prompt("Identification Requested! please enter your user identification"),
  // Had troubble adding charater.name to prompt window  after skillset//
  charSkillset: window.prompt("Please identifiy your skillset (Choose: Soldier, Medic, Demolitionist)").toLowerCase()
};
 
if (!character.name) {
  character.name = window.prompt("Please enter a valid user id");
  
  if (!character.name) {
    window.alert("User unidentified creating new user profile Dave");
    character.name = "Dave";
  }
}

if (!character.charSkillset) {
  window.alert("Identified Skillset: Soldier");
  character.charSkillset = "soldier";
}

if (character.charSkillset === "soldier") {
  character.Hp = 8;
  character.speed = 7;
  character.atkprimary = 8;
  character.atksecondary = 3;
  character.primaryWeapon = "M16 Assault Rifle";
  character.secondaryWeapon = "Knife";
}
if (character.charSkillset === "medic") {
  character.Hp = 10;
  character.speed = 9;
  character.atkprimary = 6;
  character.atksecondary = 3;
  character.primaryWeapon = "Syringe Gun";
  character.secondaryWeapon = "Scalpel";
}
if (character.charSkillset === "demolitionist") {
  character.Hp = 7;
  character.speed = 5;
  character.atkprimary = 10;
  character.atksecondary = 5;
  character.primaryWeapon = "Grenade launcher";
  character.secondaryWeapon = "Colt 1911";
}

window.alert("User Identified: " + character.name + " Skillset: " + character.charSkillset + " please retrieve your weapons from the cryopod");

window.alert("You grab your " + character.primaryWeapon + " and " + character.secondaryWeapon + " from the cryopod");

window.alert("As you grab your gear you hear a man yell in the distance, I FOUND WHERE THAT SOUND IS COMMING FROM!");

window.alert("As the two men make their way too you you hear one shout JUMP HIM!");

var choice = window.prompt("Unsure of their intentions your decide to (Attack, Flee)").toLowerCase();

if (!choice) {
  window.alert("Overcome with fear you accept your fate as the two men beat you to death");
  outcome = "lose";
}

if (choice === "attack") {
  
  if (character.atkprimary >= 7) {
    window.alert("You aim your " + character.primaryWeapon + " and pull the trigger unloading the entire magazine");
    window.alert("You coompletly obliarate the first guy in the group but its not over and your out of ammo and quickly reach for your " + character.secondaryWeapon + " as the second man closes the gap on you");
    if (character.atksecondary >= 5) {
      window.alert("You quickly pull out your " + character.secondaryWeapon + "and kill the second man");
      outcome = "win";
    } else if (character.atksecondary < 5) {
      window.alert("You stumble while pulling out your " + character.secondaryWeapon + " and the second man closes the gap and knocks you unconscious with a lead pipe");
      outcome = "lose";
    }
    
  }
  
} else if (choice === "flee") {
  
  if (character.speed >= 6) {
    window.alert("You run off leaving the two men in the dust");
    outcome = "win";
  } else if (character.speed <= 5) {
    window.alert("You try your best to run off but your heavy gear takes its toll and slows you down enough for the two men to catch up with you");
    window.alert("You turn to see how close they are behind you but as you do you get smacked in the face with a lead pipe and are knocked unconscious");
    outcome = "lose";
  }
  
}

if (outcome === "win") {
  window.alert("You feel the rush of adrenaline having suceeded and continue on your journy");
  window.alert("YOU WIN!");
} else if (outcome === "lose") {
  window.alert("You Are Dead");
  window.alert("YOU LOSE!");
}



