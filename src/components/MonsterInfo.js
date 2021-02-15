import React, { useRef, useEffect, useState } from 'react';

export default function MonsterInfo(props) {
	const m = props.moreMonsterInfo;

	return (
		<div className="monsterInfo">
			<h2>{m.name}</h2>
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
		</div>
	);
}
