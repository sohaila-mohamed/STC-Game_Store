<template>
    <div class="card m-md-2 m-lg-0 mb-lg-1 m-sm-2 m-2" >
  <img :src="game.images.img1"
            :srcset="`${game.images.img2} 2x,
             ${game.images.img3} 3x`" class="card-img-top " alt="...">
  <div class="card-body">
    <p class="Text card-title Card-Text">{{game.title.toLocaleUpperCase()}}: {{game.description.substring(0,10).toLocaleLowerCase()+'...'}}</p>
    <ReadMoreButton text="More Info" class="w-100"></ReadMoreButton>
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

  color: #444242;
  height: 50px;
  overflow: hidden;
  font-size: 12px;
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