<template>
    <div class="flex-container">
        <Header></Header>
        <p v-if="loading">Still loading..</p>
        <p v-if="error">Error Happened</p>
        <div v-if="!loading ">
            <router-view  />
        </div>
        

         <div class="btn-group" role="group" aria-label="Basic mixed styles example">
</div>
    </div>
</template>
<script>
import Header from './Components/Header';
import { onMounted,ref} from "vue";
import {useStore} from 'vuex';
export default {
    name:'App',
    components:{
        Header
        },
setup() { 
    const store = useStore();   
    const loading = ref(true);
    const error = ref(null);
  
    onMounted(() => {
       store.dispatch('Games/LoadData',null,{ root: true }).then(()=>loading.value=false)
       .catch((err)=> error.value=err).then(()=>{loading.value=false;})
    });

  return{error,loading}
    
   
        
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