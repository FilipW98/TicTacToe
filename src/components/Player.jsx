import { useState } from "react";

export default function Player({ initialName, symbol }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function changeNameHandler(event) {
		setPlayerName(event.target.value);
	}

	function editNameHandler() {
		setIsEditing(editing => !editing);
	}
	let editablePlayerName = <span className='player-name'>{playerName}</span>;
	let buttonText = 'Edit';

	if (isEditing) {
		editablePlayerName = <input type='text' required value={playerName} onChange={changeNameHandler} />;
		buttonText = 'Save';
	}

	return (
		<li>
			{editablePlayerName}
			<span className='player-symbol'>{symbol}</span>
			<button onClick={editNameHandler}>{buttonText}</button>
		</li>
	);
}