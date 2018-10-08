<template>
  <div class="s-retrieve-warp">
    <loginHeader :loginHeader="loginHeader"></loginHeader>
    <div class="s-retrieve-form container">
      <div class="form-group">
        <el-form>
          <el-form-item class="input-user">
            <el-input type="text" v-model="form.pass" placeholder="您的用户名或登录名">
              <template slot="prepend">用 户 名</template>
            </el-input>
          </el-form-item>
          <el-form-item  class="input-user">
            <el-input type="text" v-model="form.checkPass" placeholder="请输入手机号码">
              <template slot="prepend">手 机 号 码</template>
            </el-input>
          </el-form-item>
          <el-form-item  class="input-user">
            <el-input type="text" v-model.number="form.age" placeholder="请输入手机验证码">
              <template slot="prepend">手机验证码</template>
              <el-button slot="append" @click="check">获取验证码</el-button>
            </el-input>
          </el-form-item>
           <el-form-item class="input-user">
            <el-input type="password" v-model.number="form.age" placeholder="建议使用两种字符组合">
              <template slot="prepend">新 密 码</template>
            </el-input>
          </el-form-item>
           <el-form-item class="input-user">
            <el-input type="password" v-model.number="form.age" placeholder="请再次输入密码">
              <template slot="prepend">确 认 密 码</template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="form-btn" type="primary">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
      
    </div>
    <loginFooter :loginFooter="loginFooter"></loginFooter>
  </div>
</template>

<script>
import loginHeader from "@/components/LoginHeader";
import loginFooter from "@/components/loginFooter";
export default {
  name: "Retrieve",
  data() {
    return {
      loginHeader:{
        text:"找回密码"
      },
      loginFooter:{
        showLink:false
      },
      form:{
        pass:"",
        checkPass:"",
        age:""
      }
    };
  },
  methods:{
check:function (params) {
  alert("获取验证码")
}
  },
  components: {
    loginHeader,
    loginFooter
  }
};
</script>

<style lang="scss">
.s-retrieve-warp {
  .s-retrieve-form{
    height: 650px;
    .form-group{
      width: 400px;
      margin: 90px auto;
      .input-user{
        margin-bottom: 30px;
      }
      .el-input{
        height: 54px;
        .el-input-group__prepend{
          width: 69px;
        }
        .el-input__inner{
          height: 54px;
          font-size: 16px;
          color: #666666;
        }
      }
      .form-btn{
        height: 55px;
        width: 400px;
        color: #ffffff;
        font-size: 16px;
        background-color: #0168b7;
      }
    }
  }
}
</style>