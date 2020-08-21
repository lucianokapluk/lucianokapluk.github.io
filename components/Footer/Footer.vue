<template>
    <nav id="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 ">
                    <ul class="footer-social centerF">
                        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=kaplukluciano@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-google icon iconGmail"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/lucianokapluk/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin  icon iconLink"></i></a></li>
                        <li><a href="https://github.com/lucianokapluk" target="_blank" rel="noopener noreferrer"><i class="fa fa-github icon iconGit"></i></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=+543584349043" target="_blank" rel="noopener noreferrer"><i class="fa fa-whatsapp icon iconWA"></i></a></li>
                        <li><a href="https://twitter.com/LuchoKapluk"  target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter icon iconTwitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name:'Footer'
    
}
</script>
<style scoped>
.centerF{
    display: flex;
    justify-content: space-evenly;
}
.icon {
    display: block;
}
.iconGit:hover:after {
    content: "  GitHub"
}
.iconGmail:hover:after {
    content: "  Gmail"
}
.iconTwitter:hover:after {
    content: "  Twitter"
}
.iconLink:hover:after {
    content: "  Linkedin"
} 
.iconWA:hover:after {
    content: "WhatsApp"
}
.icon:hover:after {
    text-align: center;
    display: block;
    position: relative;
    top: -20px;
    right: -35px;
    width: 100px;
    border-radius: 5px;
    padding: 3px;
    background: #fcac45;
}

</style>