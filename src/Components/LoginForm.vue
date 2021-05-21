<template>
<form class="Login-Form">
            <p class="Text Form-Header mb-2">Please add your account details</p>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="Text form-label Label-Text">Email/ Username</label>
              <input
                type="email"
                class="Text form-control Input p-0 text-dark"
                id="exampleInputEmail1"
                placeholder="Type your username here"
                aria-describedby="emailHelp"
              />

              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="Text form-label Label-Text">Password</label>
              <input
                :type="passwordType"
                class="Text form-control Input p-0"
                placeholder="Type your password"
                id="exampleInputPassword1"
              />

              <img class="Password-Icon" src="../assets/Icons/HidePassword/Iconshide.svg" v-on:click="HidePasswordToggler"/>
            </div>
            <div class="mb-3 Right-Text">
              <span class="Text">Forget Password?</span>
            </div>
              <ReadMoreButton text="Login" class="w-100"></ReadMoreButton>
          </form>
</template>

<script>
import ReadMoreButton from './ReadMore';
export default {
  name: "LoginForm",
  components:{
      ReadMoreButton
      },
      data(){return{
          passwordType:"password"
      }},
      methods:{
          HidePasswordToggler(){
              this.passwordType=this.passwordType=="password"?"text":"password";
          }
      }
      
};
</script>

<style scoped>
.Form-Header {
  text-align: left;

  color: #686868;
}
.Input {
  border: 0px;
  border-bottom: 1px solid #444242;
  border-radius: 0px;
}
.Input::placeholder {
  color: #444242;
}

.Label-Text {
  font-size: 12px;
}
.Right-Text {
  text-align: right;
  cursor: pointer;
}
.Right-Text > span {
  color: #572589;
  border-bottom: 1px solid #572589;
}
.Password-Icon {
  position: absolute;
  top: 59%;
  left: 87%;
  cursor: pointer;
} 
 .Login-Form {
  position: absolute ;
  z-index: 1000;
  top: 65%;
  left: 60%;
  padding: 35px 16px 32px;

  border-radius: 5px;

  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);

  border: solid 1px rgba(151, 151, 151, 0.2);

  background-color: #ffffff;
}
@media screen and (max-width: 1000px) {
 .Input::placeholder {
  font-size: 10px;
}
 
}
</style>