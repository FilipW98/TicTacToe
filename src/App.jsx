import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gameTurns) {
	let currentPlayer = 'X';

	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O';
	}
	return currentPlayer;
}

	let winner;



function App() {


	const [players, setPlayers] = useState({
		X: 'Player 1',
		O: 'Player 2',
	});


	const [gameTurns, setGameTurns] = useState([]);
		let gameBoard = [...initialGameBoard.map(array => [...array])];

		for (const turn of gameTurns) {
			const { square, player } = turn;
			const { row, col } = square;

			gameBoard[row][col] = player;
		}

	function handleResetBoard() {
		setGameTurns([]);
		winner = false;
	}

	const activePlayer = deriveActivePlayer(gameTurns);

WINNING_COMBINATIONS.forEach(combination => {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol) {
			winner = players[firstSquareSymbol];
		}
});

	const hasDraw = gameTurns.length === 9 && !winner;
	
	function handleSelectSquare(rowIndex, colIndex) {
		setGameTurns(prevTurns => {
			const currentPlayer = deriveActivePlayer(prevTurns);

			const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
			return updatedTurns;
		});
	}


	function handlePlayerNameChange(symbol,newName) {
		setPlayers(prevPlayers => {
			return {
				...prevPlayers,
				[symbol] : newName
			};
		});
	}

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player
						 onChangeName={handlePlayerNameChange}
						initialName='Player 1'
						symbol='X'
						isActive={activePlayer === 'X'}
					/>
					<Player
						onChangeName={handlePlayerNameChange}
						initialName='Player 2'
						symbol='O'
						isActive={activePlayer === 'O'}
					/>
				</ol>
				{(winner || hasDraw) && <GameOver winner={winner} reset={handleResetBoard} />}
				<GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
			</div>
			<Log gameTurns={gameTurns} />
		</main>
	);
}

export default App;
