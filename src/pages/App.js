import React, { useEffect, useState, useRef } from 'react';
import MonsterList from '../components/MonsterList';
import MonsterInfo from '../components/MonsterInfo';
import Collection from '../components/Collection';

export default function App(props) {
	const [challengeQuery, updateChallengeQuery] = useState({
		baseURL: 'https://www.dnd5eapi.co/api/monsters?challenge_rating=',
		challengeRating: '',
		searchURL: ''
	});

	const [monsterData, setMonsterData] = useState([]);

	const [collection, setCollection] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/monsters');
				const data = await response.json();
				await setCollection(data);
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			if (challengeQuery.searchURL) {
				try {
					const response = await fetch(challengeQuery.searchURL);
					const data = await response.json();
					await setMonsterData(data.results);
					console.log(data.results);
				} catch (error) {
					console.error(error);
				} finally {
					updateChallengeQuery({
						baseURL: 'https://www.dnd5eapi.co/api/monsters?challenge_rating=',
						challengeRating: '',
						searchURL: ''
					});
				}
			}
		})();
	}, [challengeQuery]);

	const handleChange = event => {
		updateChallengeQuery({
			...challengeQuery,
			...{
				[event.target.id]: event.target.value
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		updateChallengeQuery({
			...challengeQuery,
			searchURL: challengeQuery.baseURL + challengeQuery.challengeRating
		});
		console.log(challengeQuery);
	};

	return (
		<div className="AppPage">
			<h1>D&amp;D 5e Monster Collector</h1>
			<p>A handy DM Tool</p>
			<p>
				Look up a monster by its challenge rating, then add it to your list of
				future encounters!
			</p>
			<form onSubmit={handleSubmit}>
				<input
					id="challengeRating"
					type="text"
					value={challengeQuery.challengeRating}
					onChange={handleChange}
				/>
				<input type="submit" value="Find Monsters" />
			</form>
			{Object.keys(monsterData).length ? (
				<MonsterList
					monsterData={monsterData}
					setCollection={setCollection}
					collection={collection}
				/>
			) : (
				''
			)}
			{Object.keys(collection).length ? (
				<Collection collection={collection} setCollection={setCollection} />
			) : (
				''
			)}
		</div>
	);
}
