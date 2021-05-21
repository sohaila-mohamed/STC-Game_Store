<template>
    <div class="flex-container">
        <Header></Header>
        <CategorySlider></CategorySlider>
        <MainPage></MainPage>
         <div class="btn-group" role="group" aria-label="Basic mixed styles example">
</div>
    </div>
</template>
<script>
import Header from './Components/Header';
import CategorySlider from './Components/CategorySlider';
import MainPage from './Components/MainPage'
export default {
    name:'App',
    components:{
        Header,
        CategorySlider,
        MainPage
        }
}
</script>



<style>
.Text{
  font-family: Tajawal;

  font-size: 14px;
  font-stretch: normal;

  font-style: normal;

  line-height: 1.36;

  letter-spacing: normal;

  color: #444242;

}
@media screen and (max-width: 1000px) {
  .Text {
    font-size: 12px;
  }
  
}
</style>