<template>
    <div class="container"> 
        <div class="text-center">
           <h5>{{this.proyectdata.name}}</h5> 
             <a :href="this.proyectdata.url" target="_blank" rel="noopener noreferrer">{{this.proyectdata.url}}</a> 
            <h4>{{this.proyectdata.how}}</h4>
            <a :href="this.proyectdata.github " target="_blank" rel="noopener noreferrer"><h4>take a look at the code in github</h4></a>
            <h4>  <span class="date">  <i class="fa fa-calendar"> </i> {{this.proyectdata.date}}</span></h4>

        </div>
    },
    </div>
</template>
<script>
export default {
    name:"Description",
    props: ['proyectdata'] ,
    
}
</script>
<style  scoped>

</style>