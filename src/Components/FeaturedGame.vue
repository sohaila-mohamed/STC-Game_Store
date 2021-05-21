<template>
<div class="card " >
  <div class="row g-0">
    <div class="col-lg-8 col-md-8 col-sm-8 col-12">
      <img :src="featuredGame.images.img1"
            :srcset="`${featuredGame.images.img2} 2x,
             ${featuredGame.images.img3} 3x`"
        class ="Featured-Img"
         alt="...">
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-12  Description">
      <div class="card-body">
        <h5 class="card-title Desc-Text Desc-Title">{{featuredGame.title}}</h5>
        <p class="card-text Desc-Text  Desc-p" > {{featuredGame.description}}</p>
        <p class="card-text Desc-Text "><small class="text-muted">Last updated 3 mins ago</small></p>

        <ReadMoreButton></ReadMoreButton>
      </div>
    </div>
  </div>
</div>

     
</template>

<script>
import ReadMoreButton from './ReadMore'
export default {
    name:'FeaturedGame',
    props:{
        featuredGame:{
            type:Object,
            required:true,
             validator(value){
                return value.featured;
            }

        }
    },
    components:{
        ReadMoreButton
    }
    
    
}
</script>

<style scoped>

.Featured-Img {
  width: 100%;
  min-height:250px ;


} 
.Desc-Text{
  font-family: Tajawal;

  font-size: 10px;
  font-stretch: normal;

  font-style: normal;

  line-height: 1.36;

  letter-spacing: normal;

  text-align: left;

  color: #444242;

}
.Description{
max-height: 250px;
}

.Desc-p
{
     font-size: 14px;
     font-weight: normal;
     max-height: 80px;
     overflow: hidden;
}

.Desc-Title{
font-size: 19px;
font-weight: bold;
}

@media screen and (max-width: 1000px) {
  .Desc-p {
    font-size: 12px;
  }
  .Desc-Title {
    font-size: 14px;
  }
}
</style>


