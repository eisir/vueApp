<template>
  <div>
    <top-bar
      leftPath="/home"
      title="注册"
      leftlabel=""
      :right="false">
    </top-bar>
    <div class="container">
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
          <input type="password" name="password" placeholder="请设置6-16位密码">
        </div>
        <div class="form-input">
          <label>
            <img src="../assets/images/msg.png">
          </label>
          <input type="password" name="password" placeholder="验证码">
        </div>
        <div class="invited" @click="invitedShow">
          <span class="label"><img src="../assets/images/xjt.jpg"></span>
          <span>邀请人手机号码</span>
        </div>
        <div class="form-input" v-show="inIshow">
          <input type="password" name="password" placeholder="邀请人手机号码">
        </div>
        <div class="serv">
          <span class="applyIcon" @click="appToggle">
            <img src="../assets/images/get1.png" v-show="appShow">
            <img src="../assets/images/get2.png" v-show="!appShow">
          </span>
          <span>
            我已阅读同意
            <router-link to="/webservice">钱海湾的服务协议</router-link>
          </span>
        </div>
        <div>
          <button class="submit">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
export default {
  data(){
    return{
      inIshow: false,
      appShow: true
    }
  },
  components:{
    TopBar,
  },
  methods:{
    invitedShow(){
      this.inIshow=!this.inIshow;
    },
    appToggle(){
      this.appShow=!this.appShow;
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  background-color: rgb(245, 245, 245);
}
.form-bd{
  margin: 1rem 0.75rem 0;
}
.form-input{
  background-color: #fff;
  margin-bottom: 0.5rem;
  border:1px solid #ddd;
  border-radius:5px;
  line-height: 1.5rem;
  height: 1.5rem;
  align-items: center;
  display: flex;
  padding-left: 0.5rem;
  label{
    display: inline-block;
    margin-right: 0.25rem;
    width: 0.75rem;
    font-size: 0;
    img{
      vertical-align: middle;
      width: 100%;
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
    padding-left:0.125rem;
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
.invited{
  line-height: 1rem;
  font-size: 0.5rem;
  text-align: left;
  margin-bottom: 0.25rem;
  .label{
    width: 0.75rem;
    display: inline-block;
  }
  img{
    vertical-align: middle;
    width: 100%;
  }
}
.serv{
  color: #999;
  font-size: 0.5rem;
  margin-bottom: 0.5rem;
  .applyIcon{
    display: inline-block;
    width: .75rem;
    img{
      width: 100%;
    }
  }
  a{
    color: #1a98ff;
  }
}
</style>
