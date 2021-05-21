<template>
<div class="container-fluid ">
    <div class="row">
        <div class="col-8">

        </div>
     <div class="col-4" >
         
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