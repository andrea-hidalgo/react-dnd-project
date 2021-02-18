import React, { useRef, useEffect, useState } from 'react';

export default function MonsterInfo(props) {
	const m = props.moreMonsterInfo;

	return (
		<div className="monsterInfo">
			<h2>{m.name}</h2>
			<h5>Challenge Rating: {m.challenge_rating}</h5>
			<p>
				<span>
					{m.size} {m.type}, {m.alignment}
				</span>
			</p>
			<h5>Armor Class: {m.armor_class}</h5>
			<h5>
				Hit Points: {m.hit_points} ({m.hit_dice})
			</h5>
			<h5>Speed: {m.speed.walk}</h5>
			<div className="stats-list">
				<div className="stat">
					<h5>STR</h5>
					<p>{m.strength}</p>
				</div>
				<div className="stat">
					<h5>DEX</h5>
					<p>{m.dexterity}</p>
				</div>
				<div className="stat">
					<h5>CON</h5>
					<p>{m.constitution}</p>
				</div>
				<div className="stat">
					<h5>INT</h5>
					<p>{m.intelligence}</p>
				</div>
				<div className="stat">
					<h5>WIS</h5>
					<p>{m.wisdom}</p>
				</div>
				<div className="stat">
					<h5>CHA</h5>
					<p>{m.charisma}</p>
				</div>
			</div>
			<p>
				<b>Languages </b>
				{m.languages}
			</p>
		</div>
	);
}
