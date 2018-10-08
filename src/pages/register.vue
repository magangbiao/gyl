<template>
  <div class="s-register-warp">
    <loginHeader :loginHeader="loginHeader"></loginHeader>
      <div class="container">
        <div class="s-register-con">
          <el-steps :active="active" finish-status="success">
            <el-step title="验证手机号"></el-step>
            <el-step title="填写账号信息"></el-step>
            <el-step title="注册成功"></el-step>
          </el-steps>
              <div class="form-group">
                <el-form>
                  <div v-show="active == 1">
                   
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
                        <el-input type="text" v-model="form.pass" placeholder="请输入推荐码">
                        <template slot="prepend">推 荐 码</template>
                      </el-input>
                    </el-form-item>
                   
                  </div>
                  <div v-if="active == 2">
                    <el-form-item class="input-user">
                        <el-input type="text" v-model="form.pass" placeholder="请输入推荐码">
                        <template slot="prepend">用 户 名</template>
                      </el-input>
                    </el-form-item>
                    <el-form-item class="input-user">
                        <el-input type="text" v-model="form.pass" placeholder="请输入推荐码">
                        <template slot="prepend">公 司 名 称</template>
                      </el-input>
                    </el-form-item>
                    <el-form-item class="input-user">
                        <el-input type="text" v-model="form.pass" placeholder="请输入推荐码">
                        <template slot="prepend">联 系 人</template>
                      </el-input>
                    </el-form-item>
                     <el-form-item class="input-user">
                      <el-input type="password" v-model.number="form.age" placeholder="建议使用两种字符组合">
                        <template slot="prepend">设 置 密 码</template>
                      </el-input>
                    </el-form-item>
                    <el-form-item class="input-user">
                      <el-input type="password" v-model.number="form.age" placeholder="请再次输入密码">
                        <template slot="prepend">确 认 密 码</template>
                      </el-input>
                    </el-form-item>
                  </div>
                  <div v-if="active == 3">
                    <div class="register-top"><i class="el-icon-circle-check-outline"></i><p>恭喜您注册成功</p></div>
                    <div class="register-con">
                      <div class="register-con-title">您的注册信息如下：</div>
                      <div class="register-item"><div class="label">用户名：</div><div class="item">sailonghua</div> </div>
                      <div class="register-item"><div class="label">手机号：</div><div class="item">13955555555</div> </div>
                      <div class="register-item"><div class="label">公司名称：</div><div class="item">武汉三镇食品有限公司</div> </div>
                      <div class="register-item"><div class="label">服务类型：</div><div class="item">货物</div> </div>
                      <div class="register-item"><div class="label">联系人：</div><div class="item">李志成</div> </div>
                    </div>
                  </div>
                  <el-form-item>
                    <el-button v-if="active == 1" class="form-btn" @click="next">下一步</el-button>
                    <el-button v-if="active == 2" class="form-btn" @click="next">立即注册</el-button>
                    <el-button v-if="active == 3" class="form-btn">返回首页</el-button>
                  </el-form-item>
                </el-form>
                <div class="goindex">3秒后自动返回首页</div>
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
  name: "register",
  data() {
    return {
      loginHeader: {
        text: "欢迎注册"
      },
      loginFooter: {
        showLink: false
      },
      active: 1,
      form: {
        pass: "",
        checkPass: "",
        age: ""
      }
    };
  },
  methods: {
    next() {
      console.log(this.active);
      
      if (this.active++ > 2) this.active = 0;
    },
    check: function() {
      alert("获取验证码");
    }
  },
  components: {
    loginHeader,
    loginFooter
  }
};
</script>

<style lang="scss">
.s-register-con {
  width: 400px;
  margin: 50px auto;
  .form-group {
    margin-top: 50px;
    .input-user {
      margin-bottom: 30px;
    }
    .el-input {
      height: 54px;
      .el-input-group__prepend {
        width: 69px;
      }
      .el-input__inner {
        height: 54px;
        font-size: 16px;
        color: #666666;
      }
    }
    .form-btn {
      height: 55px;
      width: 400px;
      color: #ffffff;
      font-size: 16px;
      background-color: #0168b7;
    }
    .register-top{
      display: flex;
      margin-bottom: 30px;
      i{
        font-size: 40px;
        color: #22af57;
      }
      p{
        font-size: 24px;
        line-height: 40px;
      }
    }
    .register-con{
      padding-left: 20px;
      font-size: 14px;
      margin-bottom: 30px;
      .register-con-title{
        margin-top: 20px;
        color: #999999;
        line-height: 30px;
      }
      .register-item{
        display: flex;
        line-height: 30px;  
        .label{
          width: 80px;
          color: #999999;
        }
      }
    }
  }
  .goindex{
    color: #22af57;
    text-align: center;
    margin-top: 40px;
  }
}
</style>