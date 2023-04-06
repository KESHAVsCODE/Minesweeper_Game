const gameScore = document.getElementById("gameScore");
const flagScore = document.getElementById("flagScore");
const gridBox = document.getElementById("gridContainer");
const resultDisplay = document.getElementById("resultDisplay");
const resetBtn = document.getElementById("resetButton");


/* create new board with 81 cell*/
let goodCells = [];
function createGrid() {
  let fragment = document.createDocumentFragment();

  for (let count = 1; count <= 81; count++) {
    const cell = document.createElement("div");
    cell.classList.add("box");
    cell.id = `cell_${count}`;

    fragment.appendChild(cell);
  }
  gridBox.append(fragment);
}
createGrid();

/* generate 10 random location between 1 to 81*/
function createRandom() {
  window.random = [];

  while (random.length < 10) {
    const num = Math.floor(Math.random() * 81) + 1;

    if (random.indexOf(num) === -1) random.push(num);
  }
}
createRandom();
console.log(random);

/* add click event */
gridBox.addEventListener( "click", playGame );


function playGame(event){
    const id = event.target.id;
    const cellNumber = parseInt(id.slice(5));
    
  if ( goodCells.indexOf( event.target.id ) !== -1 ) return;
  
  if (random.indexOf(cellNumber) === -1) {
    
    event.target.style.backgroundColor = "green";

    gameScore.textContent = parseInt( gameScore.textContent ) + 1;
    
    goodCells.push(id);
  }
  else {
    for ( let i = 0; i < random.length; i++ ){
      
      const badBox = document.getElementById( `cell_${ random[ i ] }` );
      
      badBox.classList.add("bad-box");
    }

    resultDisplay.textContent = "game over";
    gridBox.removeEventListener("click", playGame);

  }

  if ( parseInt( gameScore.textContent ) === 71 ) {
    resultDisplay.textContent = "win";
  }
}


/* reset the game */

resetBtn.addEventListener("click", (event) => {
  location.reload();
});
