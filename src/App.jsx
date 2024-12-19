import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";

function App() {

	const [activePlayer, setActivePlayer] = useState('X');

	function handleSelectSquare() {
		setActivePlayer(prevActivePlayer => prevActivePlayer === "X" ? "O" : 'X')
	}

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player initialName='Filip' symbol='X' isActive={activePlayer === 'X'}/>
					<Player initialName='Player 1' symbol='O' isActive={activePlayer === 'O'}/>
				</ol>
				<GameBoard onSelectSquare={handleSelectSquare} isActive={activePlayer} />
			</div>
		</main>
	);
}

export default App;
