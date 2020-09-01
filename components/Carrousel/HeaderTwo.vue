<template>


    <nav  id="tf-menu2" class="navbar-default" >
  
      <div class="container" >
       
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
        
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand"  href="/"><span id="profile">Luciano Kapluk</span></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
       
            <li><n-link to="/#tf-home"  title="">Home</n-link></li>
            <li> <n-link to="/#tf-about">About</n-link></li>
            <li><n-link to="/#tf-experience"  >Experience</n-link></li>
            <li><n-link to="/#tf-skills"  >Skills</n-link></li>
            <li><n-link to="/#tf-works"  >Portfolio</n-link></li>
            <li><n-link to="/#tf-contact" >Contact</n-link></li>
             <li>
             <a href="uploads/kaplukluciano.pdf" download="cv-kaplukluciano.pdf"><i class="fa fa-download"></i></a>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>



</template>

<script>
  export default {
    name: "HeaderTwo", 
  }
</script>

<style scoped>
.backs{
  background-color: #333;
}
.on{
  display: none;
}
.collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit-transition-timing-function: ease;
         -o-transition-timing-function: ease;
            transition-timing-function: ease;
    -webkit-transition-duration: .35s;
         -o-transition-duration: .35s;
            transition-duration: .35s;
    -webkit-transition-property: height, visibility;
         -o-transition-property: height, visibility;
            transition-property: height, visibility;
  }
  .addprofile:before{
	text-transform: capitalize;
	content:'Luciano Kapluk';
}
</style>
