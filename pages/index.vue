<template>
<div>
  <Header/>
  <Hero/>
  <About/>
  <Experience/>
  <Skills/>
  <Proyects/>
  

  <Contact/>
  <Footer/>

</div>
</template>

<script>
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Courses from '../components/Courses/Courses';
import Proyects from '../components/Proyects/Proyects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
/* import Carrousel from '../components/Carrousel/Carrousel'; */
export default {
  components:{
    Header,
    Hero,
    About,
    Experience,
    Skills,
    Courses,
    Proyects,
    Contact,
    Footer
/*     Carrousel */
  },
  head(){
    return {
     
      script: [
        { src: "js/jquery.1.11.1.js"},
        { src: "js/bootstrap.js"},
        { src: "js/bootstrap.min.js"},
        { src: "js/main.js"},
  
    ],

    }
  }
}
</script>

<style>

</style>
