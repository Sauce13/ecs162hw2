let words = [
  "about",
  "above",
  "abuse",
  "accept",
  "accident",
  "accuse",
  "across",
  "activist",
  "actor",
  "administration",
  "admit",
  "adult",
  "advertise",
  "advise",
  "affect",
  "afraid",
  "after",
  "again",
  "against",
  "agency",
  "aggression",
  "agree",
  "agriculture",
  "force",
  "airplane",
  "airport",
  "album",
  "alcohol",
  "alive",
  "almost",
  "alone",
  "along",
  "already",
  "although",
  "always",
  "ambassador",
  "amend",
  "ammunition",
  "among",
  "amount",
  "anarchy",
  "ancestor",
  "ancient",
  "anger",
  "animal",
  "anniversary",
  "announce",
  "another",
  "answer",
  "apologize",
  "appeal",
  "appear",
  "appoint",
  "approve",
  "archeology",
  "argue",
  "around",
  "arrest",
  "arrive",
  "artillery",
  "assist",
  "astronaut",
  "astronomy",
  "asylum",
  "atmosphere",
  "attach",
  "attack",
  "attempt",
  "attend",
  "attention",
  "automobile",
  "autumn",
  "available",
  "average",
  "avoid",
  "awake",
  "award",
  "balance",
  "balloon",
  "ballot",
  "barrier",
  "battle",
  "beauty",
  "because",
  "become",
  "before",
  "begin",
  "behavior",
  "behind",
  "believe",
  "belong",
  "below",
  "betray",
  "better",
  "between",
  "biology",
  "black",
  "blame",
  "bleed",
  "blind",
  "block",
  "blood",
  "border",
  "borrow",
  "bottle",
  "bottom",
  "boycott",
  "brain",
  "brave",
  "bread",
  "break",
  "breathe",
  "bridge",
  "brief",
  "bright",
  "bring",
  "broadcast",
  "brother",
  "brown",
  "budget",
  "build",
  "building",
  "bullet",
  "burst",
  "business",
  "cabinet",
  "camera",
  "campaign",
  "cancel",
  "cancer",
  "candidate",
  "capital",
  "capture",
  "career",
  "careful",
  "carry",
  "catch",
  "cause",
  "ceasefire",
  "celebrate",
  "center",
  "century",
  "ceremony",
  "chairman",
  "champion",
  "chance",
  "change",
  "charge",
  "chase",
  "cheat",
  "cheer",
  "chemicals",
  "chemistry",
  "chief",
  "child",
  "children",
  "choose",
  "circle",
  "citizen",
  "civilian",
  "civil",
  "rights",
  "claim",
  "clash",
  "class",
  "clean",
  "clear",
  "clergy",
  "climate",
  "climb",
  "clock",
  "close",
  "cloth",
  "clothes",
  "cloud",
  "coalition",
  "coast",
  "coffee",
  "collapse",
  "collect",
  "college",
  "colony",
  "color",
  "combine",
  "command",
  "comment",
  "committee",
  "common",
  "communicate",
  "community",
  "company",
  "compare",
  "compete",
  "complete",
  "complex",
  "compromise",
  "computer",
  "concern",
  "condemn",
  "condition",
  "conference",
  "confirm",
  "conflict",
  "congratulate",
  "Congress",
  "connect",
  "conservative",
  "consider",
  "constitution",
  "contact",
  "contain",
  "container",
  "continent",
  "continue",
  "control",
  "convention",
  "cooperate",
  "correct",
  "corruption",
  "cotton",
  "count",
  "country",
  "court",
  "cover",
  "crash",
  "create",
  "creature",
  "credit",
  "crime",
  "criminal",
  "crisis",
  "criticize",
  "crops",
  "cross",
  "crowd",
  "crush",
  "culture",
  "curfew",
  "current",
  "custom",
  "customs",
  "damage",
  "dance",
  "danger",
  "daughter",
  "debate",
  "decide",
  "declare",
  "decrease",
  "defeat",
  "defend",
  "deficit",
  "define",
  "degree",
  "delay",
  "delegate",
  "demand",
  "democracy",
  "demonstrate",
  "denounce",
  "depend",
  "deplore",
  "deploy",
  "depression",
  "describe",
  "desert",
  "design",
  "desire",
  "destroy",
  "detail",
  "detain",
  "develop",
  "device",
  "dictator",
  "different",
  "difficult",
  "dinner",
  "diplomat",
  "direct",
  "direction",
  "disappear",
  "disarm",
  "disaster",
  "discover",
  "discrimination",
  "discuss",
  "disease",
  "dismiss",
  "dispute",
  "dissident",
  "distance",
  "divide",
  "doctor",
  "document",
  "dollar",
  "donate",
  "double",
  "dream",
  "drink",
  "drive",
  "drown",
  "during",
  "early",
  "earth",
  "earthquake",
  "ecology",
  "economy",
  "education",
  "effect",
  "effort",
  "either",
  "elect",
  "electricity",
  "embassy",
  "embryo",
  "emergency",
  "emotion",
  "employ",
  "empty",
  "enemy",
  "energy",
  "enforce",
  "engine",
  "engineer",
  "enjoy",
  "enough",
  "enter",
  "environment",
  "equal",
  "equipment",
  "escape",
  "especially",
  "establish",
  "estimate",
  "ethnic",
  "evaporate",
  "event",
  "every",
  "evidence",
  "exact",
  "examine",
  "example",
  "excellent",
  "except",
  "exchange",
  "excuse",
  "execute",
  "exercise",
  "exile",
  "exist",
  "expand",
  "expect",
  "expel",
  "experience",
  "experiment",
  "expert",
  "explain",
  "explode",
  "explore",
  "export",
  "express",
  "extend",
  "extra",
  "extraordinary",
  "extreme",
  "extremist",
  "factory",
  "false",
  "family",
  "famous",
  "father",
  "favorite",
  "federal",
  "female",
  "fence",
  "fertile",
  "field",
  "fierce",
  "fight",
  "final",
  "financial",
  "finish",
  "fireworks",
  "first",
  "float",
  "flood",
  "floor",
  "flower",
  "fluid",
  "follow",
  "force",
  "foreign",
  "forest",
  "forget",
  "forgive",
  "former",
  "forward",
  "freedom",
  "freeze",
  "fresh",
  "friend",
  "frighten",
  "front",
  "fruit",
  "funeral",
  "future",
  "gather",
  "general",
  "generation",
  "genocide",
  "gentle",
  "glass",
  "goods",
  "govern",
  "government",
  "grain",
  "grass",
  "great",
  "green",
  "grind",
  "ground",
  "group",
  "guarantee",
  "guard",
  "guerrilla",
  "guide",
  "guilty",
  "happen",
  "happy",
  "harvest",
  "headquarters",
  "health",
  "heavy",
  "helicopter",
  "hijack",
  "history",
  "holiday",
  "honest",
  "honor",
  "horrible",
  "horse",
  "hospital",
  "hostage",
  "hostile",
  "hotel",
  "house",
  "however",
  "human",
  "humor",
  "hunger",
  "hurry",
  "husband",
  "identify",
  "ignore",
  "illegal",
  "imagine",
  "immediate",
  "immigrant",
  "import",
  "important",
  "improve",
  "incident",
  "incite",
  "include",
  "increase",
  "independent",
  "individual",
  "industry",
  "infect",
  "inflation",
  "influence",
  "inform",
  "information",
  "inject",
  "injure",
  "innocent",
  "insane",
  "insect",
  "inspect",
  "instead",
  "instrument",
  "insult",
  "intelligence",
  "intelligent",
  "intense",
  "interest",
  "interfere",
  "international",
  "Internet",
  "intervene",
  "invade",
  "invent",
  "invest",
  "investigate",
  "invite",
  "involve",
  "island",
  "issue",
  "jewel",
  "joint",
  "judge",
  "justice",
  "kidnap",
  "knife",
  "knowledge",
  "labor",
  "laboratory",
  "language",
  "large",
  "laugh",
  "launch",
  "learn",
  "leave",
  "legal",
  "legislature",
  "letter",
  "level",
  "liberal",
  "light",
  "lightning",
  "limit",
  "liquid",
  "listen",
  "literature",
  "little",
  "local",
  "lonely",
  "loyal",
  "machine",
  "magazine",
  "major",
  "majority",
  "manufacture",
  "march",
  "market",
  "marry",
  "material",
  "mathematics",
  "matter",
  "mayor",
  "measure",
  "media",
  "medicine",
  "member",
  "memorial",
  "memory",
  "mental",
  "message",
  "metal",
  "method",
  "microscope",
  "middle",
  "militant",
  "military",
  "militia",
  "mineral",
  "minister",
  "minor",
  "minority",
  "minute",
  "missile",
  "missing",
  "mistake",
  "model",
  "moderate",
  "modern",
  "money",
  "month",
  "moral",
  "morning",
  "mother",
  "motion",
  "mountain",
  "mourn",
  "movement",
  "movie",
  "murder",
  "music",
  "mystery",
];

const selectedWord = words[Math.floor(Math.random() * words.length)];

//Creates the guess box
for (let i = 0; i < selectedWord.length; i++) {
  let p = document.createElement("p");
  p.classList.add("letter");
  p.classList.add(`_${i}`);
  p.append(selectedWord.charAt(i));
  document.querySelector(".selected-word").appendChild(p);
}
console.log(selectedWord);

const canvas = document.getElementById("hangman");
const ctx = canvas.getContext("2d");

function drawHangman(stage) {
  // Draws the Hangman based on the number of incorrect guesses
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#000";

  ctx.beginPath();
  ctx.moveTo(40, 230);
  ctx.lineTo(180, 230);
  ctx.stroke();

  if (stage > 0) {
    ctx.beginPath();
    ctx.moveTo(50, 230);
    ctx.lineTo(50, 20);
    ctx.stroke();
  }
  if (stage > 1) {
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(130, 20);
    ctx.stroke();
  }
  if (stage > 2) {
    ctx.beginPath();
    ctx.moveTo(130, 20);
    ctx.lineTo(130, 50);
    ctx.stroke();
  }
  if (stage > 3) {
    ctx.beginPath();
    ctx.arc(130, 70, 20, 0, Math.PI * 2, true);
    ctx.stroke();
  }
  if (stage > 4) {
    ctx.beginPath();
    ctx.moveTo(130, 90);
    ctx.lineTo(130, 150);
    ctx.stroke();
  }
  if (stage > 5) {
    ctx.beginPath();
    ctx.moveTo(130, 100);
    ctx.lineTo(110, 130);
    ctx.moveTo(130, 100);
    ctx.lineTo(150, 130);
    ctx.stroke();
  }
  if (stage > 6) {
    ctx.beginPath();
    ctx.moveTo(130, 150);
    ctx.lineTo(110, 180);
    ctx.moveTo(130, 150);
    ctx.lineTo(150, 180);
    ctx.stroke();
  }
}

let currentStage = 0;
drawHangman(currentStage);

let userGuess = selectedWord;

const keypad = document.querySelector(".keypad");

for (let i = 0; i < 26; i++) {
  //Creates the keypad
  let button = document.createElement("button");
  button.textContent = String.fromCharCode(97 + i);

  button.classList.add("key");

  //check if the clicked letter is in the word
  button.onclick = function () {
    let index;
    if (selectedWord.includes(button.textContent)) {
      index = selectedWord.indexOf(button.textContent);
      while (index !== -1) {
        //finds all instances of the letter and reveals them
        button.style.backgroundColor = "green";
        button.style.color = "white";
        button.disabled = true;

        document.querySelector(`.letter._${index}`).style.color = "white";
        userGuess = userGuess.replace(selectedWord.charAt(index), "");

        index = selectedWord.indexOf(button.textContent, index + 1);
      }
    } else if (currentStage < 6) {
      //incorrect guess draw the next hangman
      button.style.backgroundColor = "red";
      button.style.color = "white";
      button.disabled = true;
      currentStage++;
      drawHangman(currentStage);
    } else {
      currentStage++;
      drawHangman(currentStage);
      alert(`Game Over!, The selectedWord was ${selectedWord}`);
      location.reload();
    }
    if (userGuess.length === 0) {
      alert("You Won!");
      location.reload();
    }
  };

  keypad.appendChild(button);
}
