<template>
  <div>
    <div class="container">
      <div class="close-icon" @click="back">
        <img src="../assets/images/close.jpg">
      </div>
      <section>
        <div class="logo"><img src="../assets/images/logo.jpg"></div>
        <div class="form-bd">
          <div class="form-input">
            <label>
              <img src="../assets/images/ph.jpg">
            </label>
            <input type="text" name="phone" placeholder="手机号码" required="true">
          </div>
          <div class="form-input">
            <label>
              <img src="../assets/images/ms.jpg">
            </label>
            <input type="password" name="password" placeholder="登录密码">
          </div>
          <div>
            <button class="submit">登录</button>
          </div>
          <div class="reg-bd">
            <router-link to="/register" class="reg-btn">注册</router-link>
          </div>
          <div>
            <router-link to="/forget" class="fg-btn">忘记密码?</router-link>
          </div>
        </div>
      </section>
    </div>
  </div>  
</template>

<script>

export default {
  beforeCreate(){
    this.$store.commit('changeTab',0);
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
.close-icon{
  position: absolute;
  left: 10px;
  top: 10px;
  width: 1.5rem;
  img{
    width: 100%;
  }
}
.logo{
  text-align: center;
  margin: 2rem 0;
  img{
    width: 60%;
  }
}
.form-bd{
  margin: 0 0.75rem;
}
.form-input{
  margin-bottom: 0.5rem;
  border:1px solid #999;
  border-radius:5px;
  line-height: 1.5rem;
  align-items: center;
  display: flex;
  label{
    display: inline-block;
    margin: 0 0.25rem;
    width: 1rem;
    font-size: 0;
    img{
      vertical-align: middle;
      width: 80%;
    }
  }
  input{
    line-height: 0.75rem;
    height: 1rem;
    border: none;
    outline: none;
    flex: 1;
    font-size: 0.5rem;
    margin-right: 0.125rem;
    vertical-align: middle;
    width: 100%;
  }
}
.submit{
  width: 100%;
  height: 1.5rem;
  border: none;
  line-height: 1rem;
  border-radius: 5px;
  background: #1a98ff;
  font-size: 0.625rem;
  color: #fff;
}
.reg-bd{
  margin: 1rem 0 2rem;
}
.reg-btn{
  border:1px solid #1a98ff;
  padding: 0 1rem;
  line-height: 1rem;
  height: 1rem;
  display: inline-block;
  border-radius: 1rem;
  color: #1a98ff;
}
.fg-btn{
  color: #1a98ff;
  text-decoration: underline;
}
</style>
