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

	const submitNote = async e => {
		e.preventDefault();
		e.persist();
		const noteValue = noteInput.current.value;
		console.log(noteValue);
		try {
			const response = await fetch(`/api/monsters/${e._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					note: noteValue
				})
			});
			const data = await response.json();
			props.setCollection([...props.collection, data]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h1>My Collection</h1>
			{props.collection.map((monster, index) => {
				return (
					<div key={monster._id}>
						<h3>{monster.name}</h3>
						<p>{monster.notes}</p>
						<form onSubmit={submitNote}>
							<input type="text" ref={noteInput}></input>
							<input type="submit" value="Add Note" />
						</form>
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
		</>
	);
}
