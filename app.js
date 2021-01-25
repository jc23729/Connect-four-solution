while (!player1){
    var player1 = prompt('Player One: Enter your name. You will be red.');
};
var player1Color = 'red';

while (!player2){
    var player2 = prompt('Player Two: Enter your name. You will be yellow.');
};
var player2Color = 'yellow';

// Selectors


var tableRow = document.getElementsByTagName('tr');
var tableData = document.getElementsByTagName('td');
var playerTurn = document.querySelector('.player-turn');
const slots = document.querySelectorAll('.slot');
const resetBtn = document.querySelector('.reset');


var currentPlayer = 1;
let winner;
playerTurn.textContent = `${player1}'s turn!`

// Log cell coordinates when clicked

for (i = 0; i < tableData.length; i ++){
    tableData[i].addEventListener('click', (e) =>{
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
    });
};


