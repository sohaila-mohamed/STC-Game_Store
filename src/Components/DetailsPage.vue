<template>
  <div class="fluid-container Details-Page">
    <div class="row pt-4 m-0">
      <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 offset-sm-0 col-12 offset-0">
        <div class="p-3 Img-Card">
          <img :src="game.images.img1" class="img-fluid Img" alt="Responsive image" />
        </div>
        <div class="p-3">
          <div class="card">
            <div class="card-body text-start">
              <h5 class="Text Text-Title card-title">{{game.title}}</h5>
              <p class="Text Text-SubTitle ">{{game.description}}</p>
              <p><small class="text-muted Text-Downloads">300K Downloads</small></p>
              <pre class="Text card-text Details">DASH as fast as you can!
DODGE the oncoming trains!

Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.

★ Grind trains with your cool crew!
★ Colorful and vivid HD graphics!
★ Hoverboard Surfing!
★ Paint powered jetpack!
★ Lightning fast swipe acrobatics!
★ Challenge and help your friends!

★ Join the most daring chase!
★ A Universal App with HD optimized graphics.

By Kiloo and Sybo.</pre>
              
              <div class="mb-3 Text-Read-More">
              <span class="Text">Read more</span>
            </div>
            </div>
          </div>
        </div>
      
      <div class="p-3">
        <GameList :gameList="getRecommendedGames" title="Most Recommended"></GameList>
      </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import GameList from './GameList'
export default {
  name: "DetailsPage",
  computed: {
    ...mapGetters({
      getGameById: "Games/getGameById",
      getRecommendedGames:'Games/getRecommendedGames',
    })
  },
  components:{
    GameList
  },
  data() {
    return {
      game: {}
    };
  },
  created() {
    this.game = this.getGameById(parseInt(this.$route.params.gameId));
  }
};
</script>
<style scoped>
.Img {
  width: 100%;
  height: 200px;
}
.Details{
    max-height: 150px;
    overflow: hidden;
}
.Text-Read-More >span{
    color: #572589;
  border-bottom: 1px solid #572589;
}
.Text-Title{
font-size: 16px;
font-weight: bold;
}
.Text-SubTitle{
font-size: 14px;
font-weight: normal;
margin: 0px;
}
.Text-Downloads{
    line-height: 1.25;
  letter-spacing: 0.22px;

  text-align: left;

  color: #3c3c3d;
}
.Details-Page {
  background-color: #f5f5f5;
}

</style>