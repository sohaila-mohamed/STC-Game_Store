<template>
    <div class="card " >
  <div class="row g-0 p-2">
     <div  class="col-3">
      <h6 >Recommendations</h6>
     </div>
     <div  class="col-3 offset-6 Right-Text">
      <p  >See All</p>
     </div>
  </div>

  <div class="row g-0 p-2">
     <div  class="Item col-md-2 col-sm-2 col-2">
         <GameCard :game="RecommendationList[1]"></GameCard>
     </div>

     <div  class="Item  col-md-2 col-sm-2 col-2 ">
         <GameCard :game="RecommendationList[1]"></GameCard>
     </div>

     <div  class="Item  col-md-2 col-sm-2 col-2">
         <GameCard :game="RecommendationList[1]"></GameCard>
     </div>

     <div  class="Item  col-md-2 col-sm-2 col-2">
         <GameCard :game="RecommendationList[1]"></GameCard>
     </div>

     <div  class="Item col-md-2 col-sm-2 col-2">
         <GameCard :game="RecommendationList[1]"></GameCard>
     </div>
     
  </div>
    </div>
</template>

<script>
import GameCard from './GameCard'
export default {
    name:"RecommendationList",
    components:{
        GameCard
    },
    props:{
        RecommendationList:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
.Right-Text{
    text-align: right;
}
.Item{
    width: 20%;
     height: auto;
}

</style>