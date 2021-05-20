<template>
<div>
    <div class="row" v-if="!loading && data && data.length">
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 offset-sm-0 col-12 offset-0">
            <FeaturedGame> </FeaturedGame>
        </div>
    </div>
 <p v-if="loading">
   Still loading..
  </p>
  <p v-if="error">Error Happened</p>
</div>
</template>
<script>
import FeaturedGame from './FeaturedGame';
import axios from 'axios';
import { onMounted,ref} from "vue";
export default {
    name:"MainPage",
    components:{
        FeaturedGame
    },
     setup() { 
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);
    
    function fetchData(){
    axios.get('https://my-json-server.typicode.com/sohaila-mohamed/stc-game-store/games').then(respose=>{
        data.value=respose.data;
    }).catch(err=>{error.value = err}).then(()=>loading.value=false);
    }
    onMounted(() => {
      fetchData();
    });

  return{data,error,loading}
    
   
        
   }
}
</script>