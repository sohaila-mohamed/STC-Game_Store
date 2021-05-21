<template>
<div class="card " >
  <div class="row g-0">
    <div class="col-lg-8 col-md-8 col-sm-8 col-12">
      <img src="https://i.ibb.co/NyDJRK5/Subway.png"  class ="Featured-Img" alt="...">
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-12">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

     
</template>

<script>
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
    }
    
    
}
</script>

<style scoped>

.Featured-Img {
  width: 100%;
  min-height:250px ;


} 

</style>


