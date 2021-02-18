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

	const [moreInfoQuery, setMoreInfoQuery] = useState({
		baseURL: 'https://www.dnd5eapi.co',
		searchURL: ''
	});

	const [moreMonsterInfo, setMoreMonsterInfo] = useState([]);

	const dropdown = useRef(null);

	useEffect(() => {
		(async () => {
			if (moreInfoQuery.searchURL) {
				try {
					const response = await fetch(moreInfoQuery.searchURL);
					const data = await response.json();
					await setMoreMonsterInfo(data);
				} catch (error) {
					console.error(error);
				} finally {
					setMoreInfoQuery({
						baseURL: 'https://www.dnd5eapi.co',
						searchURL: ''
					});
				}
			}
		})();
	}, [moreInfoQuery]);

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
		// const challengeIndex = dropdown.current.options.selectedIndex;
		// const rating = dropdown.current.options[challengeIndex];
		// console.log(dropdown);
		updateChallengeQuery({
			...challengeQuery,
			searchURL: challengeQuery.baseURL + challengeQuery.challengeRating
		});
		console.log(challengeQuery);
	};

	const moreInfo = async url => {
		console.log(`https://www.dnd5eapi.co${url}`);
		setMoreInfoQuery({
			...moreInfoQuery,
			searchURL: moreInfoQuery.baseURL + url
		});
	};

	return (
		<div className="AppPage">
			<div className="header">
				<h1>D&amp;D 5e Monster Collector</h1>
				<p>A handy DM Tool</p>
				<p>
					Look up a monster by its challenge rating, then add it to your list of
					future encounters!
				</p>
			</div>
			<div className="lists">
				{Object.keys(collection).length ? (
					<Collection
						collection={collection}
						setCollection={setCollection}
						moreInfo={moreInfo}
					/>
				) : (
					''
				)}
				<div className="searchMonsters">
					<h1>Monster Search</h1>
					<form onSubmit={handleSubmit}>
						<input
							id="challengeRating"
							type="text"
							value={challengeQuery.challengeRating}
							onChange={handleChange}
						/>
						{/* <select name="rating" ref={dropdown}>
							<option value="0">0</option>
							<option value="0.125">1/8</option>
							<option value="0.25">1/4</option>
							<option value="0.5">1/2</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select> */}
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
				</div>
				{Object.keys(moreMonsterInfo).length ? (
					<MonsterInfo moreMonsterInfo={moreMonsterInfo} />
				) : (
					''
				)}
			</div>
		</div>
	);
}
