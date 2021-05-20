<template>
    <div class="flex-container">
        <Header></Header>
        <CategorySlider></CategorySlider>
        <h1>App Component</h1>
         <div class="btn-group" role="group" aria-label="Basic mixed styles example">
</div>
    </div>
</template>
<script>
import Header from './Components/Header';
import CategorySlider from './Components/CategorySlider';
export default {
    name:'App',
    components:{
        Header,
        CategorySlider
        }
}
</script>

<style>
h1{color: blue;}
</style>