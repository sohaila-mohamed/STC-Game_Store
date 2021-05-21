<template>
    <div class="row m-0 p-0 Header">
<nav class="navbar navbar-light ">

  <div class="container-fluid">
  
   <a class="navbar-brand col-3 offset-lg-2 offset-md-2 offset-sm-0 " href="#">
      <img  
      src="./../assets/Logo/Logo_4.png"
      srcset="./../assets/Logo/Logo_4@2x.png 2x,
             ./../assets/Logo/Logo_4@3x.png 3x"
      class="Logo" >
    </a>

     <form  class="col-lg-3 col-md-3 " :class="[SearchFlag?'col-sm-9 col-9':'col-2']">
     
       <input v-show="SearchFlag" class="form-control " type="search" placeholder="Search" aria-label="Search">

    </form>

    <div class="col-lg-3 col-md-3 col-sm-2 col-2">
      
        <img v-show="!SearchFlag" src="../assets/Icons/search/Star.png"

     srcset="../assets/Icons/search/Star@2x.png 2x,

             ../assets/Icons/search/Star@3x.png 3x"

     class="Icons-Search" v-on:click="openSearch">


    <img v-show="SearchFlag"  
    src='../assets/Icons/close/close.png' 
    class="Icons-Search col-lg-2"
    v-on:click="closeSearch">
    

    <img 
      src="../assets/Icons/star/Star.png"
      srcset="../assets/Icons/star/Star@2x.png 2x,
             ../assets/Icons/star/Star@3x.png 3x"
      class="Icons-Star col-lg-2 " v-on:click="toggleLoginForm">

    </div>
     <LoginForm v-if="LoginFormFlag"></LoginForm>
  
</div>
</nav>

    </div>
</template>

<script>
import LoginForm from './LoginForm';
export default {
    name:'Header',
    data(){
        return{
            SearchFlag:false,
            LoginFormFlag:false
        }
    },
    methods:{
        closeSearch(){this.SearchFlag=false;},
        openSearch(){this.SearchFlag=true;},
        submitLogin(){this.LoginFormFlag=false;},
        toggleLoginForm(){if(this.LoginFormFlag)this.LoginFormFlag=false;else this.LoginFormFlag=true;}
    },
    components:{
      LoginForm
    }
}
</script>

<style scoped>
.Header{
  background-color: white;
}
.Logo {

  width: 300px;

  height: 80px;

  object-fit: contain;

}

.Icons-Star {

  width: 22px;

  height: 21px;

  margin: 0px 0px 0px 5px;

}

.Icons-Search {

  width: 22px;

  height: 21px;

  margin: 0px 0px 0px 5px;


}

</style>