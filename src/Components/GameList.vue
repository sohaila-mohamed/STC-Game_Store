<template>
    <div class="card " >
  <div class="row g-0 p-2">
     <div  class="col-lg-3 col-md-4 col-sm-6 col-6 p-3">
      <h6 class="Text Text-Headline" >{{title}}</h6>
     </div>
     <div  class="col-lg-3 offset-lg-6 col-md-3 offset-md-5 offset-sm-2 col-sm-4 offset-2 col-4  Right-Text p-2">
      <p class="Text Text-SeeAll" >See All</p>
      <a > <img src="../assets/Icons/seeAll/Shape.svg" class="p-2"> </a>
     </div>
  </div>

  <div class="row g-0 p-0 justify-content-evenly">
     <div v-for="(recom,i) in gameList.slice(0,5)" :key="i"  class="col-lg-2 col-md-3 col-sm-4 col-6">
<router-Link :to="{ name: 'Details',params:{gameId:recom.id}}">
        <GameCard :game="recom"></GameCard>
        </router-Link>
      
     </div>

     
  </div>
    </div>
</template>

<script>
import GameCard from './GameCard'
export default {
    name:"GameList",
    components:{
        GameCard
    },
    props:{
        gameList:{
            type:Array,
            required:true
        },
        title:{
            type:String,
            required:true
        }
        
    }
}
</script>

<style scoped>
.Text-Headline{
  font-size: 14px;
  font-weight: bold;
   color: #444242;
}
.Right-Text{
    text-align: right;
   
}
.Text-SeeAll{
 color: #572589;
font-size: 14px;
display: inline;
}
.Item{
    width: 20%;
     height: auto;
}
@media screen and (max-width: 1000px) {
.Text-Headline{
  font-size: 12px;
  font-weight: bold;
}
.Text-SeeAll{
    
     font-size: 12px;
}
}
</style>