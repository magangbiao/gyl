<template>
  <div class="s-finance-warp">
    <commonHeader :header="header"></commonHeader>
    <mainHeader :main_header="main_header"></mainHeader>
    <div class="finance-con">
      <div class="finance-banner">
        <img src="@/assets/img/baoxian01.png" alt="">
      </div>
      <div class="finance-item item1"></div>
    </div>
    <commonFooter></commonFooter>
  </div>
</template>

<script>
import commonHeader from "@/components/Header.vue";
import mainHeader from "@/components/mainHeader.vue";
import commonFooter from "@/components/Footer.vue";
  export default {
    name:"insurance",
    data(){
      return{
      header: {
        isLogin: false,
        userName: "小明"
      },
      main_header: {},
      }
    },
    components: {
    commonHeader,
    mainHeader,
    commonFooter
  }
  }
</script>

<style lang="scss">
.finance-banner{
  width: 100%;
  height: 300px;
}
.finance-item{
  width: 1920px;
  height: 980px;
  background: url(../../assets/img/baoxian02.png)

}
</style>