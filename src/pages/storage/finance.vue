<template>
  <div class="s-finance-warp">
    <commonHeader :header="header"></commonHeader>
    <mainHeader :main_header="main_header"></mainHeader>
    <div class="finance-con">
      <div class="finance-banner">
        <img src="@/assets/img/jinrong01.png" alt="">
      </div>
      <div class="finance-item item1"></div>
      <div class="finance-item item2"></div>
      <div class="finance-item item3"></div>
      <div class="finance-item item4"></div>
    </div>
    <commonFooter></commonFooter>
  </div>
</template>

<script>
import commonHeader from "@/components/Header.vue";
import mainHeader from "@/components/mainHeader.vue";
import commonFooter from "@/components/Footer.vue";
  export default {
    name:"finance",
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
  width: 1920px;
  height: 300px;
  img{
    width: 100%;
    height: 100%;
  }
}
.finance-item{
  width: 100%;
  height: 452px;
}
.item1{
  background: url(../../assets/img/jinrong02.png)
}
.item2{
  background: url(../../assets/img/jinrong03.png)
}
.item3{
  background: url(../../assets/img/jinrong04.png)
}
.item4{
  background: url(../../assets/img/jinrong05.png)
}
</style>