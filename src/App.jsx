import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";


function App() {
	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player initialName='Filip' symbol='X' />
					<Player initialName='Player 1' symbol='0' />
				</ol>
				{<GameBoard />}
			</div>
		</main>
	);
}

export default App;
