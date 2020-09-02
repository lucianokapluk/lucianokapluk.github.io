<template>
    <div id="tf-testimonials" class="text-center">
        <div class="overlay">
                <div id="tf-works">
                    <div class="container"> <!-- Container -->
                       <div class="section-title text-center center">
                            <h2>take a look at <strong> my projects</strong></h2>
                        </div> 
                        <div class="space"></div>
                      
                        <div id="lightbox" class="row" >
                        
                    <div  v-for="(proyect, i) in detailsProyect" :key="i" >
                         
                            <div  id="box" class="col-sm-6 col-md-6 col-lg-6 " >
                             
                                    <div class="portfolio-item">
                                        <div class="hover-bg">
                                            <a :href="proyect.route">
                                                <div class="hover-text">
                                                    <h4>{{proyect.name}}</h4>
                                                    <h5>{{proyect.tool}}</h5>
                                                    <div class="clearfix"></div>
                                                        <div style="margin-top:0px;" >
                                                   <i class="fa fa-external-link"></i>
                                                        </div>
                                                    <div style="margin-top:60px;" >
                                                     <span class="date">  <i class="fa fa-calendar"> </i> {{proyect.date}}</span>
                                                    </div>
                                                </div>
                                                
                                                <img :src="require(`../../static/img/${proyect.imagecard}`)" class="img-responsive" alt="...">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                           
                            </div>
                        

                        </div>
                    </div>
                </div>
            
        </div>
    </div>

</template>
<script>
import dataproyects from '../../static/proyects';
export default {
    name:'Proyects',
     data () {
            return {
                detailsProyect: dataproyects
            }
        },
}
</script>
<style scoped>
#box{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>