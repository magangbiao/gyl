<template>
  <div class="login-header">
    <div class="container">
      <div class="logo-warp">
        <div class="logo">
        <img src="@/assets/img/login-logo.png" alt="">
      </div>
      <div class="text" v-if="loginHeader">{{loginHeader.text}}</div>
      </div>
      <div class="logon-header-right"><img src="@/assets/img/login1_03.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginHeader",
  props:["loginHeader"],
  data() {
    return{

    }
  }
};
</script>

<style lang="scss" scoped>
.login-header {
  height: 110px;
  background-color: #ffffff;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-warp {
      display: flex;
      align-items: center;
      height: 110px;
    }

    .logo {
      width: 215px;
      height: 70px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text{
      margin-left: 20px;
      font-size: 24px;
      color: #666666;
    }
  }
}
</style>