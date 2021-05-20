<template>
    <div>
<nav class="navbar navbar-light bg-light">

  <div class="container-fluid">

   <a class="navbar-brand" href="#">
      <img  
      src="./../assets/Logo/Logo_4.png"
      srcset="./../assets/Logo/Logo_4@2x.png 2x,
             ./../assets/Logo/Logo_4@3x.png 3x"
      class="Logo" >
    </a>
     <form  class="d-flex">
      <input v-show="SearchFlag" class="form-control me-1" type="search" placeholder="Search" aria-label="Search">
    </form>

    <img v-show="!SearchFlag" src="../assets/Icons/search/Star.png"

     srcset="../assets/Icons/search/Star@2x.png 2x,

             ../assets/Icons/search/Star@3x.png 3x"

     class="Icons-Search" v-on:click="openSearch">

    <img v-show="SearchFlag"  
    src='../assets/Icons/close/close.png' 
    class="Icons-Search"
    v-on:click="closeSearch">
    <img 
      src="../assets/Icons/star/Star.png"
      srcset="../assets/Icons/star/Star@2x.png 2x,
             ../assets/Icons/star/Star@3x.png 3x"
      class="Icons-Star">
  </div>

</nav>
    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            SearchFlag:false
        }
    },
    methods:{
        closeSearch(){this.SearchFlag=false;},
        openSearch(){this.SearchFlag=true;}
    }
}
</script>

<style scoped>
.Logo {

  width: 300px;

  height: 100px;

  margin: 0 400px 0 0;

  object-fit: contain;

}

.Icons-Star {

  width: 22px;

  height: 21px;

  margin: 10px 0px 0px 5px;

}

.Icons-Search {

  width: 22px;

  height: 21px;

  margin: 0 0 0 5px;


}
</style>