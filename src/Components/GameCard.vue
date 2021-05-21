<template>
    <div class="card" >
  <img :src="game.images.img1"
            :srcset="`${game.images.img2} 2x,
             ${game.images.img3} 3x`" class="card-img-top " alt="...">
  <div class="card-body">
    <h5 class="card-title Card-Text">Card title</h5>
    <ReadMoreButton class="w-100"></ReadMoreButton>
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


@media screen and (max-width: 1000px) {
  .Card-Text {
    font-size: 12px;
  }
  
}

</style>