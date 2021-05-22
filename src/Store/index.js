import { createStore } from 'vuex';
import GamesModule from './Modules/GamesModule'



export const store = createStore({
    modules: { Games: GamesModule }
});