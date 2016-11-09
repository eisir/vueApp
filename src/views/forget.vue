<template>
  <div>
    <top-bar
      leftPath="/back"
      title="找回登录密码"
      :right="false">
    </top-bar>
    <div class="container">
      <div class="form-bd" v-if="!isCheck">
        <div class="form-input">
          <label>
            <img src="../assets/images/ph.jpg">
          </label>
          <input type="text" name="phone" placeholder="手机号码" required="true">
        </div>
        <div class="form-input">
          <label>
            <img src="../assets/images/msg.png">
          </label>
          <input type="password" name="password" placeholder="验证码">
          <span class="msg-bd">
            <button @click="sendMsg">短信验证</button>
          </span>
        </div>      
        <div>
          <button class="submit" @click="checkPhone">确认</button>
        </div>
      </div>
      <div class="form-bd" v-else>
        <div class="form-input">
          <span class="label-txt">
            重置密码
          </span>
          <input type="password" name="password" placeholder="验证码">
        </div>
        <div class="form-input">
          <span class="label-txt">
            确认密码
          </span>
          <input type="password" name="password" placeholder="验证码">
        </div>      
        <div>
          <button class="submit">确认</button>
        </div>
      </div>
    </div>
    <el-dialog title="提示" v-model="showMsg">
      <span>短信已发送！</span>
      <span slot="footer" class="dialog-footer">
        
        <el-button type="primary" @click.native="showMsg = false">确 定</el-button>
        <el-button @click.native="showMsg = false">取 消</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import TopBar from '../components/TopBar'
export default {
  data(){
    return {
      isCheck : false,
      showMsg: false
    }
  },
  beforeRouteLeave (to,from,next){
    if(to.path==="/back"){
      this.$router.go(-1);
      next();
    }
    next();
  },
  components:{
    TopBar,
  },
  methods:{
    checkPhone(){
      this.isCheck = true;
    },
    sendMsg(){      
        this.showMsg = true
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
  .label-txt{
    padding-right: .5rem;
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
.msg-bd{
  padding: 0 0.5rem;
  border-left: 1px solid #ddd;
  display: inline-block;
  height: 0.75rem;
  line-height: 0.75rem;
  button{
    background-color: #1a98ff;
    border-radius: 0.25rem;
    border:none;
    height: 0.75rem;
    color: #fff;
    padding: 0 1rem;
  }
}
</style>
