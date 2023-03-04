let player1 = [];
let player2 = [];
let currPlay = [];
isGameOver = false;
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const deck1Cards=document.querySelector("#deck1Cards");
const deck2Cards=document.querySelector("#deck2Cards");
const imageHolder = document.querySelector("#imageHolder");
const shuffle1=document.querySelector("#shuffle-1");
const shuffle2=document.querySelector("#shuffle-2");
const currCards=document.querySelector("#currCards");
const winner=document.querySelector(".winner");
const reset=document.querySelector("#reset");
deck1Cards.innerHTML=26;
deck2Cards.innerHTML=26;


let play1Turn = true;
let play2Turn = false;
p2.disabled=true;
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
let deck = [
  "1H",
  "2H",
  "3H",
  "4H",
  "5H",
  "6H",
  "7H",
  "8H",
  "9H",
  "TH",
  "JH",
  "QH",
  "KH",
  "1C",
  "2C",
  "3C",
  "4C",
  "5C",
  "6C",
  "7C",
  "8C",
  "9C",
  "TC",
  "JC",
  "QC",
  "KC",
  "1D",
  "2D",
  "3D",
  "4D",
  "5D",
  "6D",
  "7D",
  "8D",
  "9D",
  "TD",
  "JD",
  "QD",
  "KD",
  "1S",
  "2S",
  "3S",
  "4S",
  "5S",
  "6S",
  "7S",
  "8S",
  "9S",
  "TS",
  "JS",
  "QS",
  "KS",
];
// console.log(deck);
shuffle(deck);
//Now distribute cards to the two players
for (let idx = 0; idx < 26; idx++) {
  player1.push(deck[idx]);
}
for (let idx = 26; idx < 52; idx++) {
  player2.push(deck[idx]);
}

function turnchange() {
  if (play1Turn == true) {
    
    play1Turn = false;
    play2Turn = true;
    p1.disabled=true;
    p2.disabled=false;
    turnNo.innerText = "2";
  } else {
    play2Turn = false;
    play1Turn = true;
    p1.disabled=false;
    p2.disabled=true;
    turnNo.innerText = "1";
  }
}

// The game begins here//

// Turn of player 1
shuffle1.addEventListener('click',function(){
    shuffle(player1);
});
shuffle2.addEventListener('click',function(){
    shuffle(player2);
}
);
// reset.addEventListener('click',function(){
//   isGameOver=true;
//   winner.innerHTML="";
  
// })
p1.addEventListener("click", function play1() {
    console.log(currPlay);
    // currCards.innerHTML=currPlay.length();
   
//   p2.disabled = false;
//   p1.disabled = true;
  if (isGameOver==false) {

    
    
    console.log(player1);
    const cardPlayed = player1.pop();
    imageHolder.innerHTML = imageHolder2.innerHTML;

    imageHolder2.innerHTML = "";
    const img = document.createElement("IMG");

    img.src = `cards/${cardPlayed[0]}-${cardPlayed[1]}.png`;
    img.height = "200";
    img.width = "150";
    img.classList.add("addedImage");
    imageHolder2.append(img);

    if (
      currPlay.length !== 0 &&
      cardPlayed[0] == currPlay[currPlay.length - 1][0]
    ) {
        
        imageHolder.innerHTML ="";
        currCards.innerHTML=0;

    imageHolder2.innerHTML = "";
      player1=player1.concat(currPlay);
     
      shuffle(player1);
      currPlay=[];
      alert("Its a match for P1")
      
    } 
    else {
        if(player2.length==0){
            isGameOver=true;
            winner.innerHTML="Player 1 wins";
            play1Turn=true;
            play2Turn=false;
            
        }
      currPlay.push(cardPlayed);

      turnchange();
      currCards.innerHTML=currPlay.length;
    }
    deck1Cards.innerHTML=player1.length;
  }
});
// Turn of player 1
p2.addEventListener("click", function play2() {
    
    console.log(currPlay);
    
//   p2.disabled = true;
//   p1.disabled = false;
  console.log(player2);
  const cardPlayed = player2.pop();
  imageHolder.innerHTML = imageHolder2.innerHTML;
  imageHolder2.innerHTML = "";
  const img = document.createElement("IMG");

  img.src = `cards/${cardPlayed[0]}-${cardPlayed[1]}.png`;
  img.height = "200";
  img.width = "150";
  img.classList.add("addedImage");
  imageHolder2.append(img);
  if (isGameOver==false) {
    if (
      currPlay.length !== 0 &&
      cardPlayed[0] == currPlay[currPlay.length - 1][0]
    ) {
        imageHolder.innerHTML ="";
        currCards.innerHTML=0;

    imageHolder2.innerHTML = "";
       
        player2=player2.concat(currPlay);

        alert("Its a match for P2");
      shuffle(player2);
     
      currPlay=[];

    }
    else {

        if(player1.length==0){
            isGameOver=true;
            winner.innerHTML="Player 2 wins";
            play1Turn=true;
            play2Turn=false;
            
        }

      currPlay.push(cardPlayed);
      turnchange();
      currCards.innerHTML=currPlay.length;
    }
    deck2Cards.innerHTML=player2.length;
    
  }
});
