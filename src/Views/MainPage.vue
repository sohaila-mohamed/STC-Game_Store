<template>
  <div>
    <CategorySlider v-on:OnGategoryFilteration="Filter" v-on:OnGategoryDeFilteration="DeFilter"></CategorySlider>
    <div class="MainPage">
      <div class="row pt-4 m-0" v-if=" AllGames && AllGames.length">
        <div
          class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 offset-sm-0 col-12 offset-0"
        >
          <div class="p-3">
            <FeaturedGame :featuredGame="getFeaturedGame"></FeaturedGame>
          </div>

          <div class="p-3">
            <GameList :gameList="getRecommendedGames" title="Most Recommended"></GameList>
          </div>

          <div class="p-3">
            <GameList :gameList="getPopularGames" title="Most Popular"></GameList>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>




<script>
import FeaturedGame from '../Components/FeaturedGame';
import GameList from '../Components/GameList'
import CategorySlider from '../Components/CategorySlider'
import {mapGetters} from 'vuex';
export default {
    name:"MainPage",
    components:{
       FeaturedGame,
        GameList,
        CategorySlider
    },
    data(){return{
       filterationCategories:[]
    }},
    computed:{
      ...mapGetters({
         AllGames:'Games/getGameById',
         getRecommendedGames:'Games/getRecommendedGames',
         getFeaturedGame:'Games/getFeaturedGame',
         getPopularGames:'Games/getPopularGames'

      })
    },
   methods:{
    async Filter(category){
       if(!category) return;
       this.filterationCategories.push(category);
       let recommendedGames=this.$store.state.Games.data.filter(game=>this.filterationCategories.includes(game.category)&&game.classifier.includes("recommended"));
       let popularGames=this.$store.state.Games.data.filter(game=>this.filterationCategories.includes(game.category)&&game.classifier.includes("popular"));
      await this.$store.dispatch('Games/ApplyFilter',{
         recommendations:recommendedGames,
         popular:popularGames
       },{root:true});
       return
     },
    async DeFilter(category){
       let recommendedGames=[];
       let popularGames=[];
         this.filterationCategories=this.filterationCategories.filter(cat=>cat!==category);
         console.log(...this.filterationCategories);
         if(!this.filterationCategories.length) {
           recommendedGames=this.$store.state.Games.data.filter(item=>item.classifier.includes("recommended"));
           popularGames=this.$store.state.Games.data.filter(item=>item.classifier.includes("popular"));
            
         }
         else{
           recommendedGames=this.$store.state.Games.data.filter(game=>this.filterationCategories.includes(game.category)&&game.classifier.includes("recommended"));
           popularGames=this.$store.state.Games.data.filter(game=>this.filterationCategories.includes(game.category)&&game.classifier.includes("popular"));
         }
         await this.$store.dispatch('Games/ApplyFilter',{
         recommendations:recommendedGames,
         popular:popularGames
       },{root:true});
       return

         
     }
   }
}
</script>

<style scoped>
.MainPage {
  background-color: #f5f5f5;
}
</style>