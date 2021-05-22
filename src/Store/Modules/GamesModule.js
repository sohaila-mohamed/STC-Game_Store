import api from '../../Api/GamesApi';
import { ValidateGameObject } from '../../Services/ValidationService/GameValidation'
const GamesModule = {
    state: () => ({
        data: [],
        featuredGame: null,
        popularGames: [],
        recommendedGames: [],
        counter: 0
    }),
    mutations: {
        setGamesData(state, games) {
            console.log("mutation", games.data);
            state.data = validateData(games);
            console.log("state", state.data)
            return
        },
        setFeaturedGame(state) {
            console.log("state featured", state.data)
            state.featuredGame = state.data.find(item => item.featured === true);
            console.log("state featured game", state.featuredGame)
        },
        setRecommendedGames(state) {
            state.recommendedGames = state.data.filter(item => item.classifier.includes("recommended"));
            console.log("state recommended game", state.recommendedGames);
        },
        setPopularGames(state) {
            state.popularGames = state.data.filter(item => item.classifier.includes("most popular"));
        },
        updateRecommendationList(state, recommendedGames) {
            console.log("update", recommendedGames);
            state.recommendedGames = recommendedGames;
        },
        updatePopularList(state, popularGames) {
            state.popularGames = popularGames;
        }

    },
    getters: {
        getAllGames(state) {
            console.log("getter");
            return state.data;
        },
        getFeaturedGame(state) {
            return state.featuredGame

        },
        getRecommendedGames(state) {
            return state.recommendedGames;

        },
        getPopularGames(state) {
            return state.popularGames;

        },
        getGameById: (state) => (id) => {
            console.log("by id data", state);
            return state.data.find(game => game.id === id)
        }
    },
    actions: {

        LoadData: async({ commit }) => {
            console.log("action");
            let response = await api.FetchGamesData()
            await commit("setGamesData", response);
            await commit('setFeaturedGame');
            await commit('setRecommendedGames');
            await commit('setPopularGames');
            return;
        },
        ApplyFilter: async({ commit }, filteredList) => {
            console.log('filtered list', filteredList);
            await commit('updateRecommendationList', filteredList.recommendations);
            await commit('updatePopularList', filteredList.popular);
            return
        }



    },
    namespaced: true
}

function validateData(respose) {
    console.log("all data", respose);
    let filteredData = [];
    for (let item of respose.data) { console.log("item", item); if (ValidateGameObject(item)) filteredData.push(item); }
    console.log("filtered gamed", filteredData)
    return filteredData;
}

export default GamesModule;