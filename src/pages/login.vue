<template>
  <div class="login-warp">
      <loginHeader :loginHeader="loginHeader"></loginHeader>
      <div class="login-con-warp">
        <div class="container">
          <div class="login-warp">
            <div class="title">账号登录</div>
            <el-form class="el-form-login">
              <el-form-item class="input-user">
                <el-input type="text" v-model="login.userName" placeholder="请输入用户名" autocomplete="off">
                  <template slot="prepend"><i class="user"></i></template>
                </el-input>
              </el-form-item>
              <el-form-item class="input-user">
                <el-input type="password" v-model="login.passWord" placeholder="请输入密码" autocomplete="off">
                  <template slot="prepend"><i class="pass"></i></template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="login-btn">登录</el-button>
              </el-form-item>
            </el-form>
            <div class="login-bottom">
              <router-link to="/retrieve">
                忘记密码
              </router-link>
              <router-link to="/register">
                免费注册
              </router-link>
            </div>
          </div>
        </div>
        
      </div>
      <loginFooter :loginFooter="loginFooter"></loginFooter>
  </div>
</template>

<script>
import loginHeader from "@/components/LoginHeader";
import loginFooter from "@/components/loginFooter";

export default {
  name: "login",
  data() {
    return {
      loginHeader: {
        text: "欢迎登录"
      },
      loginFooter: {
        showLink: true
      },
      login: {
        userName: "",
        passWord: ""
      }
    };
  },
  components: {
    loginHeader,
    loginFooter
  }
};
</script>

<style lang="scss" scoped>
.login-con-warp {
  height: 650px;
  background: url("../assets/img/login-bg_02.png");
  .container {
    display: flex;
    height: 650px;
    justify-content: flex-end;
    align-items: center;
    .login-warp {
      width: 300px;
      height: 390px;
      background-color: #ffffff;
      padding: 30px;
      .title {
        text-align: center;
        font-size: 24px;
        color: #666;
      }
      .el-form-login {
        margin-top: 45px;
        .input-user {
          position: relative;
          i.user,
          i.pass {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 8px;
            left: 10px;
            background: url("../assets/img/login-user.png") no-repeat;
          }
          i.user {
            background: url("../assets/img/login-user.png") no-repeat;
          }
          i.pass {
            background: url("../assets/img/login-pass.png") no-repeat;
          }
          .el-input-group__prepend {
            background-color: #ffffff;
          }
        }
        .login-btn {
          width: 300px;
          font-size: 16px;
          background-color: #ff8800;
          color: #ffffff;
        }
      }
      .login-bottom {
        margin-top: 105px;
        text-align: center;
        a {
          display: inline-block;
          color: #0168b7;
          padding: 0 15px;
          line-height: 14px;
          &:nth-child(1) {
            border-right: 1px solid #666;
          }
        }
      }
    }
  }
}
</style>