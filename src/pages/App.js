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

	const [infoHidden, toggleInfoHidden] = useState({ infoHidden: true });
	const toggleHide = () => {
		toggleInfoHidden({ infoHidden: !infoHidden.infoHidden });
	};

	const [noteValues, updateNoteValues] = useState({});

	const [challengeRating, updateChallengeRating] = useState('');
	// const dropdown = useRef(null);

	useEffect(() => {
		(async () => {
			if (moreInfoQuery.searchURL) {
				try {
					const response = await fetch(moreInfoQuery.searchURL);
					const data = await response.json();
					await setMoreMonsterInfo(data);
					toggleInfoHidden({ infoHidden: false });
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
				updateNoteValues(
					data.reduce((acc, item, index) => {
						item.notes = item.notes ? item.notes : '';
						acc[item._id] = item;
						return acc;
					}, {})
				);
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
		updateChallengeRating(challengeQuery.challengeRating);
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
				<h1>Monster Collector</h1>
				<p>A handy DM Tool for D&amp;D 5th Edition</p>
				{/* <p>
					Look up a monster by its challenge rating, then add it to your list of
					future encounters!
				</p> */}
			</div>
			<div className="lists">
				{collection.length > 0 && Object.keys(noteValues).length ? (
					<Collection
						collection={collection}
						setCollection={setCollection}
						moreInfo={moreInfo}
						noteValues={noteValues}
						updateNoteValues={updateNoteValues}
					/>
				) : (
					''
				)}
				<div className="searchMonsters">
					<h1>Monster Search</h1>
					<p>Search by Challenge Rating (decimals or whole numbers!)</p>
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
					{monsterData.length && Object.keys(noteValues).length ? (
						<MonsterList
							monsterData={monsterData}
							setCollection={setCollection}
							collection={collection}
							moreInfo={moreInfo}
							updateNoteValues={updateNoteValues}
							noteValues={noteValues}
							challengeRating={challengeRating}
						/>
					) : (
						''
					)}
				</div>
				{infoHidden.infoHidden === false ? (
					<MonsterInfo
						moreMonsterInfo={moreMonsterInfo}
						toggleHide={toggleHide}
					/>
				) : (
					''
				)}
			</div>
		</div>
	);
}
