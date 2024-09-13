//js file for the Fun Quest web app
let ticTacToePlayer = ' ';
let ticTacToeGame = ' ';
let gameActive = true;
let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let ticTacToeMessage = document.querySelector('#ttt-messages');
let tttPlayerArray = [];
let tttGameArray = [];

const cell0 = document.querySelector('#cell0');
const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');

const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');

const cell6 = document.querySelector('#cell6');
const cell7 = document.querySelector('#cell7');
const cell8 = document.querySelector('#cell8');



class Player{
    constructor(name){
        this.name = name;
    }
}

let tttPlayer = new Player(ticTacToePlayer);

let tttGame = new Player(ticTacToeGame);


const winningCombinations = [
    [0, 1, 2], [3, 4,5], [6, 7, 8],//rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],//columns
    [0, 4, 8], [2, 4, 6]
    ];//diagonals





function checkForWinner(){
	for(const combo of winningCombinations){
		const [a, b, c] = combo;
		if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
			return gameBoard[a];
			}
		
		}
		return null;
	}



function gamePlay(){

const winner = checkForWinner();
	if(winner === ticTacToePlayer){
		ticTacToeMessage.textContent = 'Player Wins!';
		gameActive = false;
			}
	else if (gameBoard[4] === ' '){
		cell4.textContent = ticTacToeGame;
		gameBoard[4] = ticTacToeGame;
		ticTacToeMessage.textContent = "Please choose a square on the grid";
		}
	else if(gameBoard[0] === ' '){
		cell0.textContent = ticTacToeGame;
		gameBoard[0] = ticTacToeGame;
		ticTacToeMessage.textContent = "Please choose a square on the grid";
		}
	else if(gameBoard[8] === ' '){
		
		cell8.textContent = ticTacToeGame;
		gameBoard[8] = ticTacToeGame;
		ticTacToeMessage.textContent = "Please choose a square on the grid";
		}
	else if(gameBoard[2] === ' '){
		
		cell2.textContent = ticTacToeGame;
		gameBoard[2] = ticTacToeGame;
		ticTacToeMessage.textContent = "Please choose a square on the grid";
		}
	else if(gameBoard[6] === ' '){
		
		cell6.textContent = ticTacToeGame;
		gameBoard[6] = ticTacToeGame;
		ticTacToeMessage.textContent = "Please choose a square on the grid";
		}
	else if(gameBoard[1] === ' '){
		
		cell1.textContent = ticTacToeGame;
		gameBoard[1] = ticTacToeGame;
		ticTacToeMessage.textContent = "Please choose a square on the grid";
		}
	else if(gameBoard[7] === ' '){
		
		cell7.textContent = ticTacToeGame;
		gameBoard[7] = ticTacToeGame;
		ticTacToeMessage.textContent = "Please choose a square on the grid";
		}
	else if(gameBoard[3] === ' '){
		
		cell3.textContent = ticTacToeGame;
		gameBoard[3] = ticTacToeGame;
		ticTacToeMessage.textContent = "Please choose a square on the grid";
		}
	else if(gameBoard[5] === ' '){
		
		cell5.textContent = ticTacToeGame;
		gameBoard[5] = ticTacToeGame;
		ticTacToeMessage.textContent = "Please choose a square on the grid";
		}
	if(winner === ticTacToeGame){
		ticTacToeMessage.textContent = 'Game Wins!';
		gameActive = false;
			}
		
	
	}	




function checkForDraw(){
	return !gameBoard.includes(' ');
	}
	
function handleCellClick(event){
	if(!gameActive) return;
	
	const clickedCell = event.target;
	const cellIndex = clickedCell.dataset.index;
	
	if(gameBoard[cellIndex] === ' '){
		gameBoard[cellIndex] = ticTacToePlayer;
		clickedCell.textContent = ticTacToePlayer;
		gamePlay();
		
		
		
		const winner = checkForWinner();
		if(winner){
			if(winner === ticTacToePlayer){
				ticTacToeMessage.textContent = 'You Win!';
				gameActive = false;
			}
			
			else if(winner === ticTacToeGame){
				ticTacToeMessage.textContent = 'Game Wins!';
				gameActive = false;
				}
			
			}
		else if(checkForDraw()){
			ticTacToeMessage.textContent = 'It\'s a draw!';
			gameActive = false;
			}
			
	
		}
		
	}
			
		

function resetTTT(){
	gameActive = true;
	gameBoard = [' ', ' ',' ',' ',' ', ' ',' ',' ',' '];
    radio1.checked = false;
    radio2.checked = false;
    cell0.textContent = ' ';
    cell1.textContent = ' ';
    cell2.textContent = ' ';
    cell3.textContent = ' ';
    cell4.textContent = ' ';
    cell5.textContent = ' ';
    cell6.textContent = ' ';
    cell7.textContent = ' ';
    cell8.textContent = ' ';
	ticTacToeMessage.textContent = 'Choose X or O';
	}



function goesFirst(){
    //to see if player or game goes first
let rand = Math.ceil(Math.random()* 10);
    if(rand % 2 == 0){
    //ticTacToePlayer goes first - message (ttt-message)
    ticTacToeMessage.textContent = "Please choose a square on the grid";
    
    }
    else{
    gamePlay();
    }
}

 



const radio1 = document.querySelector('#radio-x');
const radio2 = document.querySelector('#radio-y');
const tttStart  = document.querySelector('#ttt-start').addEventListener('click', (event => {
    resetTTT();
}));



radio1.addEventListener('click', (event => {
    ticTacToePlayer = "X";
    ticTacToeGame = "O";
	goesFirst();
    
}));
radio2.addEventListener('click', (event => {
    ticTacToePlayer = "O";
    ticTacToeGame = "X";
    goesFirst();

}));


    

 




