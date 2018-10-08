<template>
  <div class="common-header">
    <div class="container">
      <div class="header-left">
        <span>欢迎来到苏航供应链平台！</span>
        <div class="s_top_wrap" v-if="header.isLogin">欢迎，{{header.userName}}</div>
        <div class="s_top_wrap" v-if="!header.isLogin">
          <router-link class="s_login" to="/login">
            请登录
          </router-link>
          <router-link class="s_register" to="/register">
            免费注册
          </router-link>
        </div>
      </div>
      <div class="header-right">
        <ul class="s_top_warp">
          <li><a href="#">管理中心</a></li>
          <li class="s_ewm_warp">
            <a class="download" href="javasctipt:;" @click="showImg">下载APP</a>
            <div class="s_img_warp" v-show="show">
              <img src="@/assets/img/app.png" alt="">
            </div>
          </li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">中文</a></li>
          <li><a href="#">英文</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commoHeader",
  props: ["header"],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showImg:function () {
      this.show = !this.show;
    }
  },
  mounted(){
    document.addEventListener("click",(e)=>{
      if (e.target.className != "download") {
        this.show = false;
      }
    })
  }
};

</script>

<style lang="scss">
.common-header {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f5f5f5;
  font-size: 14px;
  color: #666666;

  .container .header-left {
    display: inline-block;
    width: 400px;
  }

  .container .header-left .s_top_wrap {
    margin-left: 30px;
    display: inline-block;
    width: 180px;
  }
  .container .header-left .s_top_wrap .s_login,
  .container .header-left .s_top_wrap .s_register {
    color: #666666;
    display: inline-block;
    padding: 0 15px;
    height: 16px;
    margin-top: 7px;
    line-height: 16px;
    cursor: pointer;
  }
  .container .header-left .s_top_wrap .s_login {
    border-right: 1px solid #bbbbbb;
    box-sizing: content-box;
  }
  .container .header-right {
    float: right;
    width: 500px;
  }
  .container .header-right .s_top_warp {
    display: flex;
    justify-content: flex-end;
    .s_ewm_warp{
      position: relative;
      .s_img_warp{
        width: 100px;
        height: 100px;
        position: absolute;
        top: 32px;
        left: 0;
        z-index: 9;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .container .header-right .s_top_warp li:nth-last-child(1) a{
      border-right: 0 none;
    }
  .container .header-right .s_top_warp li a{
    padding:0 20px;
    color: #666666;
    border-right: 1px solid #bbbbbb;
   
  }
}
</style>