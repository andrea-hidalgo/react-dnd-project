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

	const noteDropdown = id => {
		const element = document.getElementById(id);
		{
			element.classList.contains('hide')
				? element.classList.remove('hide')
				: element.classList.add('hide');
		}
	};

	return (
		<div className="myCollection">
			<h1>My Collection</h1>
			{props.collection.map((monster, index) => {
				return (
					<div key={monster._id} className="monsterCollectionItem">
						<div className="monsterNameSection">
							<ion-icon
								name="close-outline"
								onClick={() => {
									monsterDelete(monster, index);
								}}
							></ion-icon>
							<h3>{monster.name}</h3>
							<ion-icon
								name="information-circle-outline"
								onClick={() => props.moreInfo(monster.url)}
							></ion-icon>
							<ion-icon
								name="create-outline"
								onClick={() => noteDropdown(monster._id)}
							></ion-icon>
						</div>
						{monster.notes ? <p>{monster.notes}</p> : ''}
						<div className="monsterNotesSection hide" id={`${monster._id}`}>
							<form onSubmit={() => submitNote(monster)}>
								<input type="text" ref={noteInput}></input>
								<input type="submit" value="Add Note" />
							</form>
						</div>
					</div>
				);
			})}
		</div>
	);
}
