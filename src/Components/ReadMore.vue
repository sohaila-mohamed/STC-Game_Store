<template>
    <button type="button" class="btn  Btn Btn-Text">{{text}}</button>
</template>

<script>
export default {
    name:"ReadMoreButton",
    props:{
        text:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
.Btn{
      


  border-radius: 2px;

  background-color:  #572589;
}
.Btn-Text{

  font-family: Tajawal;

  font-size: 12px;

  font-weight: bold;

  font-stretch: normal;

  font-style: normal;

  line-height: 1;

  letter-spacing: 0.4px;

  text-align: center;

  color: #ffffff;
}

@media screen and (max-width: 1000px) {
  .Btn-Text {
    font-size: 10px;
  }
  .Btn{
      

  border-radius: 2px;

  background-color: #572589;
}
  
}
</style>