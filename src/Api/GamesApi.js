import axios from 'axios';

const DB_URI = 'https://my-json-server.typicode.com/sohaila-mohamed/stc-game-store/games';

export default {
    FetchGamesData() {
        return axios.get(DB_URI);

    }

}