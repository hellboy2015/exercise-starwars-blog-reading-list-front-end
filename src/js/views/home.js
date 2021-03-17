import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/card.js";

export const Home = () => {
	let planets = [
		{
			diameter: "10465",
			rotation_period: "23",
			orbital_period: "304",
			gravity: "1 standard",
			population: "200000",
			climate: "arid",
			terrain: "desert",
			surface_water: "1",
			created: "2021-03-16T14:32:48.969Z",
			edited: "2021-03-16T14:32:48.969Z",
			name: "Tatooine",
			url: "https://www.swapi.tech/api/planets/1"
		},
		{
			diameter: "12500",
			rotation_period: "24",
			orbital_period: "364",
			gravity: "1 standard",
			population: "2000000000",
			climate: "temperate",
			terrain: "grasslands, mountains",
			surface_water: "40",
			created: "2021-03-16T14:32:48.969Z",
			edited: "2021-03-16T14:32:48.969Z",
			name: "Alderaan",
			url: "https://www.swapi.tech/api/planets/2"
		},
		{
			diameter: "10200",
			rotation_period: "24",
			orbital_period: "4818",
			gravity: "1 standard",
			population: "1000",
			climate: "temperate, tropical",
			terrain: "jungle, rainforests",
			surface_water: "8",
			created: "2021-03-16T14:32:48.969Z",
			edited: "2021-03-16T14:32:48.969Z",
			name: "Yavin IV",
			url: "https://www.swapi.tech/api/planets/3"
		},
		{
			diameter: "7200",
			rotation_period: "23",
			orbital_period: "549",
			gravity: "1.1 standard",
			population: "unknown",
			climate: "frozen",
			terrain: "tundra, ice caves, mountain ranges",
			surface_water: "100",
			created: "2021-03-16T14:32:48.969Z",
			edited: "2021-03-16T14:32:48.969Z",
			name: "Hoth",
			url: "https://www.swapi.tech/api/planets/4"
		}
	];

	return (
		<div className="text-center mt-5 row">
			{planets.map((planet, index) => (
				<div className="col" key={index}>
					<Card
						planetName={planets[index].name}
						diameter={planets[index].diameter}
						population={planets[index].population}
					/>
				</div>
			))}
		</div>
	);
};
