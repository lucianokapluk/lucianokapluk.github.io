<template>
  <div>
    <div v-if="loading" class="page-loading">
      <img  src="img/loader.gif" alt="" />
    </div>
    <HeaderTwo />    
    <Carrousel  :proyectdata="this.detailsProyect"/>¡
  </div>
</template>
<script>
import HeaderTwo from '../../components/Carrousel/HeaderTwo';
import Carrousel from '../../components/Carrousel/Carrousel';
import Footer from '../../components/Footer/Footer';
import dataproyects from '../../static/proyects';
import router from 'vue-router';
export default {
  components:{
    HeaderTwo,
    Carrousel,


  },
  data () {
    return {
      detailsProyect: dataproyects[this.$route.params.proyect],
      loading:true
    }
  },
  head(){
    return {
      link:[
        { rel: "stylesheet",  href: "css/swiper.min.css"},
        { rel: "stylesheet",  href: "css/carrousel.css"},
      
      ],
      script:[
        { src: "js/swiper.min.js"},    
        { src: "js/jquery.1.11.1.js"},
        { src: "js/bootstrap.js"},
        { src: "js/bootstrap.min.js"},
        { src: "js/main-car.js"},
         { src: "js/main.js"},
        { src: "js/custom.js"},
      ]
    }
  },
  mounted() {
    
  
      setTimeout(() => this.loading = false, 500)
   
  }
}
</script>
<style>
</style>
