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
			props.setCollection([...props.collection, newMonster]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="monsterList">
			<h1>Monsters Retrieved!</h1>
			{props.monsterData.map((monster, index) => {
				return (
					<div key={monster.index} onClick={() => monsterAdd(monster, index)}>
						<h3>{monster.name}</h3>
					</div>
				);
			})}
		</div>
	);
}
