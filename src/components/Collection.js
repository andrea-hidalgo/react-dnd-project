import React, { useRef, useEffect, useState } from 'react';

export default function Collection(props) {
	const noteInput = useRef(null);

	const monsterDelete = async (monster, index) => {
		console.log('you clicked ' + monster.name + ' on index ' + index);
		const body = JSON.stringify({
			index: monster.index,
			name: monster.name,
			url: monster.url
		});
		console.log(body);
		try {
			const response = await fetch(`/api/monsters/${monster._id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			props.setCollection([...props.collection]);
		} catch (error) {
			console.error(error);
		}
	};

	const submitNote = async monster => {
		// e.preventDefault();
		// e.persist();
		const body = JSON.stringify({
			notes: noteInput.current.value
		});
		console.log('notevalue is ' + noteInput);
		try {
			const response = await fetch(`/api/monsters/${monster._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: body
			});
			const data = await response.json();
			props.setCollection([...props.collection, data]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="myCollection">
			<h1>My Collection</h1>
			{props.collection.map((monster, index) => {
				return (
					<div key={monster._id}>
						<h3>{monster.name}</h3>
						<p>{monster.notes}</p>
						<form onSubmit={() => submitNote(monster)}>
							<input type="text" ref={noteInput}></input>
							<input type="submit" value="Add Note" />
						</form>
						<button onClick={() => props.moreInfo(monster.url)}>
							More Info
						</button>
						<button
							onClick={() => {
								monsterDelete(monster, index);
							}}
						>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
}
