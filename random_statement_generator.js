var noun = ["My Cousin Vinnie", "Arthur", "Bambi", "Annie Hall", "Kangaroo Jack", 
"Superman", "Lady Bird", "The Man Who Invented Christmas", "Thelma and Louise","The Breakfast Club", "Rocky", 
"The Princess Bride", "Dick Tracy", "Seven Samurai", "The Disaster Artist", "The Men Who Stare At Goats","Carrie",
"The Cars that Ate Paris", "Roxanne","Teen Wolf", "Donnie Darko","The Cook, the Thief, His Wife and her Lover", 
"The Incredible Mr Limpet", "The Excorcist", "Willow", "Jack Reacher", "The Wedding Planner", "The Little Mermaid", 
"Amile", "Hannah and Her Sisters", "Lolita","Dr No", "Those Magnificent Men and Their Flying Machines","Spaceballs",
"Jaws", "A Fistful of Dollars", "Chinatown", "Killer Klowns From Outer Space", "My Big Fat Greek Wedding","The Room", "Up", "The Matrix"];


var verb = ["Tangled", "Bamboozled", "Just Married", "Enchanted", "Bedazzled", "Marooned", "Hoodwinked", "Scrooged", 
"Bewitched", "Kidnapped", "Zapped", "Outsourced", "Knocked Up", "Ran", "Saved!", "Uninhabited","Wanted", "Stranded In Space"];

function pullStatement() {
    var subject = noun[Math.floor(Math.random() * noun.length)];
    var action = verb[Math.floor(Math.random() * verb.length)];
    var object =  subject;
    while (object === subject){
    	var object = noun[Math.floor(Math.random() * noun.length)];
    }
    document.getElementById("statement").innerHTML = subject + "<br>" + action + "<br>" + object;
}