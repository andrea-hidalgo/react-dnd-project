//this component will display the data returned by searching for a monster of a particular challenge rating
import React from 'react';

export default function MonsterList(props) {
	const monsterAdd = async (monster, index) => {
		console.log('you clicked ' + monster.name + ' on index ' + index);
		const body = JSON.stringify({
			index: monster.index,
			name: monster.name,
			url: monster.url
		});
		console.log(body);
		try {
			const response = await fetch('/api/monsters', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: body
			});
			const newMonster = await response.json();
			const newCollection = [...props.collection, newMonster];
			props.setCollection(newCollection);
			props.updateNoteValues({
				...props.noteValues,
				[newMonster._id]: { ...newMonster, notes: '' }
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="monsterList">
			<h4>Challenge Rating {props.challengeRating}</h4>
			{props.monsterData.map((monster, index) => {
				return (
					<div key={monster.index} className="monsterNameSection">
						<h3>{monster.name}</h3>
						<div className="icon-group">
							<ion-icon
								name="information-circle-outline"
								onClick={() => props.moreInfo(monster.url)}
							></ion-icon>
							<ion-icon
								name="add-circle-outline"
								onClick={() => monsterAdd(monster, index)}
							></ion-icon>
						</div>
					</div>
				);
			})}
		</div>
	);
}
