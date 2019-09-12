<template>
  <div>
    <LayoutDefault>
       <div slot="content">
             <div class="page-title">
        <div class="container">
          <div class="column">
            <h1>Login / Register Account</h1>
          </div>
          <div class="column">
            <ul class="breadcrumbs">
              <li><a href="index.html">Home</a>
              </li>
              <li class="separator">&nbsp;</li>
              <li><a href="account-orders.html">Account</a>
              </li>
              <li class="separator">&nbsp;</li>
              <li>Login / Register</li>
            </ul>
          </div>
        </div>
      </div>

        <div class="container padding-bottom-3x mb-2">
        <div class="row">
          <div class="col-md-6">
            <form class="login-box" method="post">
              <h4 class="margin-bottom-1x">Inicio de sesión</h4>
              <div class="form-group input-group">
                <input class="form-control" type="email" placeholder="Correo" required><span class="input-group-addon"><i class="icon-mail"></i></span>
              </div>
              <div class="form-group input-group">
                <input class="form-control" type="password" placeholder="Clave" required><span class="input-group-addon"><i class="icon-lock"></i></span>
              </div>
              <div class="d-flex flex-wrap justify-content-between padding-bottom-1x">
                <div class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" id="remember_me" checked>
                  <label class="custom-control-label" for="remember_me">Remember me</label>
                </div><a class="navi-link" href="account-password-recovery.html">Forgot password?</a>
              </div>
              <div class="text-center text-sm-right">
                <button class="btn btn-primary margin-bottom-none" type="submit">Login</button>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <div class="padding-top-3x hidden-md-up"></div>
            <h3 class="margin-bottom-1x">Sin una cuenta? Regístrate</h3>
            <p>El registro lleva menos de un minuto, pero le da control total sobre sus pedidos.</p>
            <form class="row" method="post"  v-on:submit.stop.prevent="handlerRegister">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-fn">Primer nombre</label>
                  <input class="form-control" type="text" id="reg-fn" 
                  required v-model="usuario.primer_nombre">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-ln">Segundo nombre</label>
                  <input class="form-control" type="text" id="reg-ln" 
                     v-model="usuario.segundo_nombre">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-fn">Primer apellido</label>
                  <input class="form-control" type="text" id="reg-fn" 
                  required v-model="usuario.primer_apellido">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-ln">Segundo apellido</label>
                  <input class="form-control" type="text" id="reg-ln" 
                   v-model="usuario.segundo_nombre">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-email">Correo</label>
                  <input class="form-control" type="email" id="reg-email"
                   required v-model="usuario.correo"
                   >
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-phone">Confirmar Correo</label>
                  <input class="form-control" type="text" id="reg-phone" 
                  required 
                  v-model="usuario.correo_confirmar"
                  >
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-pass">Clave</label>
                  <input class="form-control" type="password" id="reg-pass" 
                  required v-model="usuario.contrasenia">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="reg-pass-confirm">Confirmar Clave</label>
                  <input class="form-control" type="password" id="reg-pass-confirm" 
                  required  v-model="usuario.contrasenia_confirmar">
                </div>
              </div>
              <div class="col-12 text-center text-sm-right">
                <button class="btn btn-primary margin-bottom-none" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>

       </div>
    </LayoutDefault>
  </div>
</template>
<script>
import LayoutDefault from "@/layout/layout-default"
export default {
  name: "page-cliente",
  components:{
    LayoutDefault
  },
  data(){
      return{
        usuario:{
          primer_nombre: undefined,
          primer_apellido: undefined,
          segundo_nombre: undefined,
          segundo_apellido: undefined,
          contrasenia: undefined,
          contrasenia_confirmar: undefined,
          correo: undefined,
          sexo: undefined
        }
      }
  },
  methods:{
    getLogin(){
			let _this =this;
        this.$store.dispatch('login', this.usuario)
       .then(() => this.$router.push('/'))
       .catch(err => {
		   _this.error.error =true;
		   _this.error.message =err;
	   })
    },
     handlerRegister(){
			let _this =this;
        this.$store.dispatch('register', this.usuario)
       .then(() => this.$router.push('/'))
       .catch(err => {
		   _this.error.error =true;
		   _this.error.message =err;
	   })
		}
  },
  mounted(){
   // this.$swal('Hello Vue world!!!');
  }
  
}
</script>
