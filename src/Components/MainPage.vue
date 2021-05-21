<template>
<div class="MainPage">
    <div class="row pt-4 m-0" v-if="!loading && data && data.length">
        <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 offset-sm-0 col-12 offset-0">
            <div class="p-3">
              <FeaturedGame :featuredGame="featuredGame"> </FeaturedGame>
            </div>

            <div class="p-3">
              <GameList :gameList="recommendedGames" title="Most Recommended"></GameList>
            </div>

             <div class="p-3">
              <GameList :gameList="popularGames" title="Most Popular"></GameList>
            </div>
            
        </div>
    </div>
 <p v-if="loading">
   Still loading..
  </p>
  <p v-if="error">Error Happened</p>
</div>
</template>
<script>
import FeaturedGame from './FeaturedGame';
import GameList from './GameList'
import axios from 'axios';
import {ValidateGameObject} from '../Services/ValidationService/GameValidation'
import { onMounted,ref} from "vue";
export default {
    name:"MainPage",
    components:{
        FeaturedGame,
        GameList
    },
     setup() { 
    const data = ref(null);
    const featuredGame = ref(null);
    const popularGames = ref(null);
    const recommendedGames = ref(null);
    const loading = ref(true);
    const error = ref(null);
    
    function fetchData(){
    axios.get('https://my-json-server.typicode.com/sohaila-mohamed/stc-game-store/games').then(respose=>{
        data.value=validateData(respose);
        featuredGame.value=getFeaturedGame(data.value);
        popularGames.value=getPopularGames(data.value);
        recommendedGames.value=getRecommendedGames(data.value);
    }).catch(err=>{error.value = err; console.log(err)}).then(()=>loading.value=false);
    }
    function validateData(respose){
        console.log("all data",respose);
        let filteredData=[];
         for (let item of respose.data){console.log("item",item);if (ValidateGameObject(item)) filteredData.push(item);}
         console.log("filtered gamed",filteredData)
         return filteredData;
    }
    function getFeaturedGame(games){
           return games.find(item=>item.featured===true);
    }
    function getRecommendedGames(games){
           return games.filter(item=>item.classifier.includes("recommended"));
    }
    function getPopularGames(games){
           return games.filter(item=>item.classifier.includes("most popular"));
    }
    onMounted(() => {
      fetchData();
    });

  return{data,featuredGame,recommendedGames,popularGames,error,loading}
    
   
        
   }
}
</script>

<style scoped>
.MainPage{
    background-color: #f5f5f5;
}
</style>