<template>

    <nav id="tf-menu" class="navbar navbar-default navbar-fixed-top">
  
      <div class="container">
       
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
        
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand"  href="#tf-home"><span id="profile"></span></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
       
            <li><a href="#tf-home" class="page-scroll">Home</a></li>
            <li><a href="#tf-about" class="page-scroll">About</a></li>
            <li><a href="#tf-experience" class="page-scroll">Experience</a></li>
            <li><a href="#tf-skills" class="page-scroll">Skills</a></li>
            <li><a href="#tf-works" class="page-scroll">Portfolio</a></li>
            <li><a href="#tf-courses" class="page-scroll">Courses</a></li>
            <li><a href="#tf-contact" class="page-scroll">Contact</a></li>
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
        name: "Header", 
        
   }


</script>

<style scoped>
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
</style>
