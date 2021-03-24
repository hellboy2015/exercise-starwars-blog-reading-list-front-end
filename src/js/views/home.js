import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import PlanetCard from "../component/PlanetCard.js";
import CharacterCard from "../component/CharacterCard.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5">
			<div className="h1 text-danger font-weight-bold">Characters</div>
			<div className="scrolling-wrapper row">
				{store.characters.map((character, index) => (
					<CharacterCard
						key={index}
						name={character.name}
						gender={character.gender}
						hairColor={character.hair_color}
						eyeColor={character.eye_color}
						imageId={index}
						characterId={index}
						entityType={"character"}
					/>
				))}
			</div>
			<div className="h1 text-danger font-weight-bold mt-5">Planets</div>
			<div className="scrolling-wrapper row">
				{store.planets.map((planet, index) => (
					<PlanetCard
						key={index}
						name={planet.name}
						terrain={planet.terrain}
						population={planet.population}
						imageId={index}
						planetId={index}
						entityType={"planet"}
					/>
				))}
			</div>
		</div>
	);
};
