<template>
    <div>
    <div  id="shop-categories" class="offcanvas-container" >
       <CMenuLeft></CMenuLeft>
    </div>
   
    <!-- Topbar-->
    <div class="topbar">
      <div class="topbar-column"><a class="hidden-md-down" href="mailto:support@unishop.com"><i class="icon-mail"></i>&nbsp; support@unishop.com</a><a class="hidden-md-down" href="tel:00331697720"><i class="icon-bell"></i>&nbsp; 00 33 169 7720</a><a class="social-button sb-facebook shape-none sb-dark" href="#" target="_blank"><i class="socicon-facebook"></i></a><a class="social-button sb-twitter shape-none sb-dark" href="#" target="_blank"><i class="socicon-twitter"></i></a><a class="social-button sb-instagram shape-none sb-dark" href="#" target="_blank"><i class="socicon-instagram"></i></a><a class="social-button sb-pinterest shape-none sb-dark" href="#" target="_blank"><i class="socicon-pinterest"></i></a>
      </div>
      <div class="topbar-column">
       <a href="" v-on:click.prevent="sendAccount"> <h6>Iniciar sesión / Registrarse</h6></a>
      </div>
    </div>
    <!-- Navbar-->
    <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
    <Cheader>
    </Cheader>
    <!-- Off-Canvas Wrapper-->
    <div class="offcanvas-wrapper">
      <slot name="content">
      </slot>
      <!-- Site Footer-->
      <Cfooter>
      </Cfooter>
      
    </div>
    <!-- Back To Top Button--><a class="scroll-to-top-btn" href="#"><i class="icon-arrow-up"></i></a>
    <!-- Backdrop-->
    <div class="site-backdrop"></div>

    </div>
</template>
<script>
import Cfooter from "@/parties/footer"
import Cheader from "@/parties/header"
import Csidebar from "@/parties/sidebar"
import CMenuLeft from "@/parties/menu-left.vue"
export default {
  name: "layout-default",
  components:{
    Cfooter,
    Cheader,
    Csidebar,
    CMenuLeft

  },
  methods:{
    sendAccount(){
      this.$router.push('/account')
    }
  }
}
</script>