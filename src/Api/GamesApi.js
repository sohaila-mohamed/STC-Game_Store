import axios from 'axios';
//import { ValidateGameObject } from '../Services/ValidationService/GameValidation'

export default {
    FetchGamesData() {
        return axios.get('https://my-json-server.typicode.com/sohaila-mohamed/stc-game-store/games')


        // .then(response => {
        //         return validateData(response);

        //     }).catch(err => {
        //         //error.value = err;
        //         console.log(err)
        //     })
        //     // .then(() => loading.value = false);

        // function validateData(response) {
        //     console.log("all data", response);
        //     let filteredData = [];
        //     for (let item of response.data) { console.log("item", item); if (ValidateGameObject(item)) filteredData.push(item); }
        //     console.log("filtered gamed", filteredData)
        //     return filteredData;
        // }
    }

}