<template>
  <div class="row m-0 p-0">
    <div  class="horizontal-scroll-wrapper mt-2">
      <CategoryItem  v-for="(cat,index) in categories" :key="index" v-bind:categoryTitle="cat"></CategoryItem>
    </div>
  </div>
</template>

<script>
import CategoryItem from "./CategorySliderItem";
export default {
  name: "CategorySlider",
  components: {
    CategoryItem
  },
  data(){return{
      categories:["Sports","Advanture","Action","Arcade",
      "Sports","Advanture","Action","Arcade","Sports","Advanture",
      "Action","Arcade"]
  }}
};
</script>
<style scoped>
.horizontal-scroll-wrapper {
  height: 60px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
 -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: 0px;  /* Firefox */
  scrollbar-color: transparent transparent !important;

}
/* for chrome ans safari */
.horizontal-scroll-wrapper::-webkit-scrollbar {
  width: 0px;
  background: transparent transparent !important;
  color: transparent transparent !important;
    
}

.horizontal-scroll-wrapper > div {
display: inline-block
}
</style>