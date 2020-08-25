<template>
    <div id="tf-contact" class="text-center">
        <div class="container">

            <div class="row">
                <div class="col-md-8 col-md-offset-2">

                    <div class="section-title center">
                        <h2>Feel free to <strong>contact me</strong></h2>
                        <div class="line">
                            <hr>
                        </div>
                        <div class="clearfix"></div>
                        
                    </div>

                    <form @submit.prevent="sendEmail">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" v-model.trim="name" placeholder="Name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" class="form-control" id="email" v-model.trim="email" placeholder="Enter email">
                                </div>
                            </div>
                         
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Message</label>
                            <textarea class="form-control" v-model.trim="message" rows="3"></textarea>
                            
                        </div>
                        <div class="row ">
                             
                    
                         
                          <div class='col-lg-12'>
                            <button type="submit" class="btn tf-btn btn-default">Submit</button>
                          </div>
                           
                        </div>
                            <div class='col-lg-12  justify'>
                              <div class="loader" v-if="this.loader">Loading...</div>
                          </div>
                    <div id="msgSubmit"   v-if="this.msg" class="h3 text-center"> <i class="fa fa-check "> </i> Message sent!</div>
                    <div id="msgSubmit"  v-if="this.isEmpty" class="h3 text-center"><i class="fa fa-times"> </i> You must complete all the fields!</div>
                   <div id="msgSubmit"  v-if="this.msgError" class="h3 text-center"><i class="fa fa-times"> </i> Oops, something went wrong, try again later please!</div>
                    </form>

                </div>
            </div>


        </div>
    </div>
</template>
<script>
export default {
    name:'Contact',
    middleware:'sendEmail',
    data () {
      return {
        name:'',
        email: '',
        message: '',
        loader:false,
        msg:false,
        msgError:false,
        isEmpty:false,
        
      }
    },
     methods: {
      sendEmail () {
  
        if(this.name == '' || this.email == '' || this.message== ''){
             this.loader=false
             this.msg=false
             this.msgError=false
             this.messa=false
          this.isEmpty=true
        }else{
          this.isEmpty=false
          this.loader=true
         fetch(process.env.BASE_URL+'/api/send',
          {
            method:'post',
            mode: 'no-cors',
          body:JSON.stringify({
                name: this.name,
                email: this.email,
                subject: 'My Page contact!',
                message: this.message
            
            })
          })
          .then(response =>{
            return response.status;
            this.loader= false
              this.isEmpty=false
          })
          .then(data =>{
            console.log(data);
            if(data==200){
              this.msgError=false
              this.msg=true;
                this.isEmpty=false;
              this.name='';
              this.email='';
              this.message='';

            }else{
                this.msg=false;
              this.msgError=true
             this.isEmpty=false;
            }
            this.loader= false
            
          })
          .catch(err=>{
            console.log(err)
            this.msg=false;
            this.msgError=true
            this.loader= false
            this.isEmpty=false;
          }) 

        }
  
      },
    }
    
}
</script>
<style scoped>
.hidde{
  display:none;
}
.fa-check {
  color: rgb(0, 221, 92);
}
.fa-times {
  color: red;
}

.justify{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.loader {
  color: #fcac45;
  font-size: 5px;
  margin-top: 50px;
  width: 1em;
  height: 1em;
  border-radius: 50%;

  text-indent: -9999em;
  -webkit-animation: load4 1.3s infinite linear;
  animation: load4 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
@keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
</style>