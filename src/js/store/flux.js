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
			addFavorites: (favoriteName, favoriteID, entityType) => {
				const store = getStore();
				setStore({
					favorites: [
						...store.favorites,
						{ id: favoriteID, name: favoriteName, entityType: entityType, isFav: true }
					]
				});
			},
			deleteFavorites: (favoriteID, myEntityType) => {
				const store = getStore();
				setStore({
					favorites: store.favorites.filter(favorite => favorite.id !== favoriteID)
				});
			},
			getSwapiRecords: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				//const store = getStore();
				var token = sessionStorage.getItem("my_token");

				var requestOptions = {
					method: "GET",
					redirect: "follow",
					headers: new Headers({
						Accept: "*/*",
						Authorization: "Bearer " + token
					})
				};

				await fetch("https://3000-harlequin-quail-6c3y17o5.ws-us03.gitpod.io/planets/", requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({ planets: result });
					})
					.catch(error => console.log("error", error));

				await fetch("https://3000-harlequin-quail-6c3y17o5.ws-us03.gitpod.io/characters", requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({ characters: result });
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
