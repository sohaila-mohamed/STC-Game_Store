<template>
    <div class="card" >
  <img :src="game.images.img1"
            :srcset="`${game.images.img2} 2x,
             ${game.images.img3} 3x`" class="card-img-top " alt="...">
  <div class="card-body">
    <h5 class="card-title Card-Text">Card title</h5>
    <ReadMoreButton class="w-100"></ReadMoreButton>
    <div class="Rating-Item ">
      <img src="../assets/Icons/Rating/ratingIcon.svg">
      <span class="Text Rating-Text">{{game.rate}}</span>
    </div>
  </div>
</div>
</template>

<script>
import ReadMoreButton from './ReadMore'
export default {
    name:"GameCard",
    props:{
        game:{
            type:Object,
            required:true
        }
    },
    components:{
        ReadMoreButton
    }
}
</script>

<style scoped>


.Card-Text{
  font-family: Tajawal;

  font-size: 14.4px;

  font-weight: normal;

  font-stretch: normal;

  font-style: normal;

  line-height: 1.32;

  letter-spacing: normal;

  text-align: left;

  color: #444242;
}
.Rating-Item{
  position: absolute;
  top: 2%;
  border-radius: 6px;
  background-color: #f2f2f2;
  padding-left: 5%;
  padding-right: 5%;
}
 .Rating-Text{
    font-size: 12px;
  }


@media screen and (max-width: 1000px) {
  .Card-Text {
    font-size: 12px;
  }
  .Rating-Text{
    font-size: 10px;
  }
  
}

</style>