import Player from "./components/Player.jsx";


function App() {
	return (
		<main>
			<div id='game-container'>
				<ol id='players'>
					<Player name="Filip" symbol= "X" />
					<Player name="Player 1" symbol = "0" />
				
				</ol>
			</div>
		</main>
	);
}

export default App;
