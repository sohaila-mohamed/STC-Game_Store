<template>
    <div>
        <Header></Header>
        <h1>App Component</h1>
         <div class="btn-group" role="group" aria-label="Basic mixed styles example">
</div>
    </div>
</template>
<script>
import Header from './Components/Header';
export default {
    name:'App',
    components:{
        Header
        }
}
</script>

<style>
h1{color: blue;}
</style>