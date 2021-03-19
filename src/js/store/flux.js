const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [],
			characters: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			updateFavorites: newFavorite => {
				setStore({ favorites: newFavorite });
			},
			getSwapiRecords: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const store = getStore();

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				await fetch("https://swapi.dev/api/planets/", requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({ planets: result.results });
					})
					.catch(error => console.log("error", error));

				await fetch("https://swapi.dev/api/people/", requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({ characters: result.results });
					})
					.catch(error => console.log("error", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
