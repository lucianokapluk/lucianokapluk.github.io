<template>
    <div class="container">
        <div id="tf-skills" class="text-center">
       
            <div class="section-title center">
                <h2><strong>MY SKILLS</strong></h2>
                <div class="line">
                    <hr>
                </div>
                <div class="clearfix"></div>
               
            </div>
            <div class="space"></div>
            <div class="row">
                <div class="col-md-3 col-sm-6 skills">
                    <i class="fa fa-mobile"></i>
                    <h4><strong>Mobile Apps</strong></h4>
                    <p>Flutter / Dart</p>
                    <p>React Native</p>
                </div>
                <div class="col-md-3 col-sm-6 skills">
                    <i class="fa fa-desktop"></i>
                    <h4><strong>Front-End</strong></h4>
                    <p>React Js </p>
                    <p>JavaScript </p>
                    <p>Html5 / Css</p>
                </div>


                <div class="col-md-3 col-sm-6 skills">
                    <i class="fa fa-server"></i>
                    <h4><strong>Back-End</strong></h4>
                    <p>Php</p>
                    <p>Laravel</p>
                    <p>Node Js</p>
                    
                </div>

                <div class="col-md-3 col-sm-6 skills">
                    <i class="fa fa-code"></i>
                    <h4><strong>OTHERS</strong></h4>
                    <p>Cypress</p>
                    <p>MongoDB</p>
                    <p>MySQL / SQL</p>
                    
                </div>
            </div>
            <div>
                <a class="btn " type="button" style="color:#5a5a5a;" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <div class="section-title center">
                        <center><h2> <strong>courses</strong></h2></center>
                            <a class="fa fa-chevron-down" ></a>
                    </div>
                </a>
            </div>
            <div class="collapse" id="collapseExample">
                
                <div id="tf-courses" class="text-center">
                    <div id="team" class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12" >
                            <div class="item">
                                <div class="thumbnail">
                                    <img src="img/courses/flutter.webp" alt="..." class="img-circle team-img">
                                    <div class="caption">
                                        <h3>Flutter</h3>
                                        <p>Udemy / Fernadno Herrera</p>
                                        
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12" >
                            <div class="item ">
                                <div class="thumbnail">
                                    <img src="img/courses/reac.webp" alt="..." class="img-circle team-img">
                                    <div class="caption">
                                        <h3>React Js</h3>
                                        <p>Platzi / Richard Kaufman </p>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div class="col-lg-3 col-md-6 col-sm-12" >
                            <div class="item ">
                                <div class="thumbnail">
                                    <img src="img/courses/rn.png" alt="..." class="img-circle team-img">
                                    <div class="caption">
                                        <h3>React Native</h3>
                                        <p>Platzi / Leonidas Esteban</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12" >
                            <div class="item ">
                                <div class="thumbnail">
                                    <img src="img/courses/js.webp" alt="..." class="img-circle team-img">
                                    <div class="caption">
                                        <h3>Javascript Basics</h3>
                                        <p>Platzi / Sacha Lifszyc</p>
                                        
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

export default {
    name: 'Skills',
   
    
}
</script>
<style scoped>

</style>