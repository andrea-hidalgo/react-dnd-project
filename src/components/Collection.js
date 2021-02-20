import React, { useEffect, useState } from 'react';

export default function Collection(props) {
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
			props.collection.splice(index, 1);
			props.setCollection([...props.collection]);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e, monster) => {
		props.updateNoteValues({
			...props.noteValues,
			...(props.noteValues[monster._id].notes = e.target.value)
		});
	};

	const submitNote = async (e, monster, index) => {
		e.preventDefault();
		const body = JSON.stringify({
			notes: props.noteValues[monster._id].notes
		});
		try {
			const response = await fetch(`/api/monsters/${monster._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: body
			});
			const data = await response.json();
			const collectionCopy = [...props.collection];
			collectionCopy.splice(index, 1, data);
			props.setCollection([...collectionCopy]);
		} catch (error) {
			console.error(error);
		} finally {
			props.updateNoteValues({
				...props.noteValues,
				...(props.noteValues[monster._id].notes = '')
			});
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
			{Object.keys(props.noteValues).length
				? props.collection.map((monster, index) => {
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
									<div className="icon-group">
										<ion-icon
											name="information-circle-outline"
											onClick={() => props.moreInfo(monster.url)}
										></ion-icon>
										<ion-icon
											name="create-outline"
											onClick={() => noteDropdown(monster._id)}
										></ion-icon>
									</div>
								</div>
								{monster.notes ? <p>{monster.notes}</p> : ''}
								{props.noteValues[monster._id] ? (
									<div
										className="monsterNotesSection hide"
										id={`${monster._id}`}
									>
										<form onSubmit={e => submitNote(e, monster, index)}>
											<input
												id="notes"
												type="text"
												value={props.noteValues[monster._id].notes}
												onChange={e => handleChange(e, monster)}
											></input>
											<input type="submit" value="Add Note" />
										</form>
									</div>
								) : (
									''
								)}
							</div>
						);
				  })
				: ''}
		</div>
	);
}
