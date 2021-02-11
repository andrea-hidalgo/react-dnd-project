//this component will display the data returned by searching for a monster of a particular challenge rating
import React from 'react';

export default function MonsterList(props) {
	return (
		<>
			<h1>Monsters Retrieved!</h1>
			{props.monsterData.map((monster, index) => {
				return (
					<div key={props.monsterData[index].index}>
						<h3>{props.monsterData[index].name}</h3>
					</div>
				);
			})}
		</>
	);
}
