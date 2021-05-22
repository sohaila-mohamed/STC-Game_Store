<template>
    <div>
       
         <p>{{game.title}}</p>
    </div>
</template>


<script>
import {mapGetters} from 'vuex';
export default {
    name:"DetailsPage",
    computed:{
      ...mapGetters({
         getGameById:'Games/getGameById',
      }),

    },
    data(){
        return{
        game:{}}}
        ,
    created() {     
      this.game=this.getGameById(parseInt(this.$route.params.gameId))
   }
    
}
</script>