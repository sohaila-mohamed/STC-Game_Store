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



