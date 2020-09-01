<template>
<div class="app_version" data-spy="scroll" data-target="#navbarApp" data-offset="98">
    


    <div id="screenshots" class="section wb">
        <div class="container">
            <div class="section-title text-center">
                <h3>{{this.detailsProyect.name}}</h3>
                <p class="lead">{{this.detailsProyect.description}}</p>
            </div><!-- end title -->

            <div class="owl-screenshots swiper-container">
				<div  class="mobilescreen-image"></div>
			
				<div class="swiper-wrapper"  >
			
					<div class="swiper-slide" v-for="(screenshot, i) in this.detailsProyect.screenshots" :key="i">
							<div class="skills-widget">
								<div class="post-media entry wow fadeIn">
									<img  v-if='screenshot.indexOf(".mp4") == -1' :src="require(`../../static/img/${screenshot}`)" alt="" class="img-fluid img-rounded">
									
									<video   v-if='screenshot.indexOf(".mp4") !== -1' height="495"  class="video" controls >
										<source :src="require(`../../static/img/${screenshot}`)" style="{width:100%;}" type="video/mp4">
									</video>
									<div class="magnifier"></div>
								</div>
							</div><!-- end skills -->
						
					</div>
				</div>
			
				<div class="swiper-pagination"></div>
				<div class="swiper-button-next"></div>
				<div class="swiper-button-prev"></div>
            </div><!-- end row -->		

        </div><!-- end container -->
		

    </div><!-- end section -->

    
   
    <!-- ALL JS FILES -->
	<script type="module">

	var swiper = new Swiper('.swiper-container', {
			
			effect: 'coverflow',
			centeredSlides: true,
			
			slidesPerView: 4,
            initialSlide: 1,
            keyboardControl: true,
            mousewheelControl: false,
            lazyLoading: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 3,
                },
                575: {
					height:200,
                    slidesPerView: 1.1,
                    spaceBetween: 3,
                }
                
            }
		});
	
	</script>
	


</div>
</template>

<script>
	import swiper from 'swiper/bundle';

    export default {
		name: "Carrousel", 
		  props: ['proyectdata'] ,
		link:[
		 	{ rel: "stylesheet",  href:"https://unpkg.com/swiper/swiper-bundle.css"},
			{ rel: "stylesheet",  href:"https://unpkg.com/swiper/swiper-bundle.min.css"},
		],
		data(){
			 return {
                detailsProyect: this.proyectdata
            }
		}
   }
</script>
<style scoped>
#screenshots{
	background-color: rgb(255, 255, 255);
}

</style>



