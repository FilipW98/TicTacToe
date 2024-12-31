import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function changeNameHandler(event) {
		setPlayerName(event.target.value);
	}
	function editNameHandler() {
		setIsEditing(editing => !editing);
		
		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	}
	let editablePlayerName = <span className='player-name'>{playerName}</span>;
	let buttonText = 'Edit';

	if (isEditing) {
		editablePlayerName = <input type='text' required value={playerName} onChange={changeNameHandler} />;
		buttonText = 'Save';
	}

	return (
		<li className={isActive ? 'active' : ' '}>
			{editablePlayerName}
			<span className='player-symbol'>{symbol}</span>
			<button onClick={editNameHandler}>{buttonText}</button>
		</li>
	);
}