<template>
    <div
     class="Cat-Item" 
     :style="{'background-color':backgroundColor,'color':textColor}"
      v-on:click="choose"
     >{{categoryTitle}}
    
     </div>
</template>

<script>
export default {
    name:'CategoryItem',
    props:{
        categoryTitle:{
            type:String,
            required:true,
            default:"No CategoryTitle"
        },
       
    },
    data(){return{
        backgroundColor:"#ffffff",
        textColor:"#545454",
        clicked:false
    }},
    methods:{
        choose(){
            if(!this.clicked){
            this.backgroundColor="#572589";
            this.textColor="#ffffff";
            this.clicked=true;
            this.$emit('OnCategorySelection',this.categoryTitle);
            return;
            }
            this.backgroundColor="#ffffff";
            this.textColor="#545454",
            this.clicked=false;
            
             this.$emit('OnCategoryDeSelection',this.categoryTitle);
        }
    }
}
</script>

<style scoped>
.Cat-Item{
  width: fit-content;
  height:30px;
  
  margin: 10px 8px;

  padding: 4px 16px 6px 14px;

  border-radius: 12.5px;

  border: solid 1px #d2d2d2;

  background-color: #d8d8d8;

  font-family: Tajawal;

  font-size: 14.4px;

  font-weight: bold;

  text-align: center;

  color: #545454;
  cursor: pointer;

}
</style>