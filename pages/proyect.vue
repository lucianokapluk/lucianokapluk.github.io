<template>
  <div>
    <HeaderTwo />
    <Carrousel />
  </div>
</template>
<script>
import HeaderTwo from '../components/Carrousel/HeaderTwo';
import Carrousel from '../components/Carrousel/Carrousel';
import Footer from '../components/Footer/Footer';
export default {
  components:{
    HeaderTwo,
    Carrousel,
  },
  head(){
    return {
      link:[
        { rel: "stylesheet",  href: "css/swiper.min.css"},
        { rel: "stylesheet",  href: "css/carrousel.css"},
      ],
      script:[
        { src: "js/swiper.min.js"},    
       
        { src: "js/bootstrap.js"},
        { src: "js/bootstrap.min.js"},
        { src: "js/main-car.js"},
        { src: "js/custom.js"},

     
      ]
    }
  }
}
</script>
<style>
</style>
