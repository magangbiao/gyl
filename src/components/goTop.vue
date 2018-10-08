<template>
    <div id="goTop" class="goTop">
      <div class="temp-item">
        <i class="icon icon-jc"></i>
        <div class="text">新手教程</div>
      </div>
       <div class="temp-item">
         <i class="icon icon-app"></i>
        <div class="text">手机App</div>
      </div>
      <div class="temp-item">
        <i class="icon icon-gzh"></i>
        <div class="text">公众号</div>
      </div>
      <div class="temp-item">
        <i class="icon icon-kf"></i>
        <div class="text">客服</div>
      </div>
      <div class="temp-item" @click="goTop">
        <i class="icon icon-top"></i>
        <div class="text">顶部</div>
      </div>
    </div>
</template>
<script>
    export default {
      name: "goTop",
      data(){
          return{
            scrollTop: '',
            goTopShow:false,
          }
        },
      methods:{
        handleScroll () {
          this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(this.scrollTop>500){
            this.goTopShow=true
          }
        },
        goTop(){
          let timer=null,_that=this;
          cancelAnimationFrame(timer)
          timer=requestAnimationFrame(function fn(){
            if(_that.scrollTop>0){
              _that.scrollTop-=50;
              document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
              timer=requestAnimationFrame(fn)
            }else {
              cancelAnimationFrame(timer);
              _that.goTopShow=false;
            }
          })
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>
 
<style lang="scss" scoped>
  .goTop{
    position: fixed;
    right: 210px;
    bottom: 100px;
    width: 65px;
    font-size: 12px;
    border: 1px solid #e5e5e5;
    background-color: #ffffff;
    .temp-item{
      width: 65px;
      height: 65px;
      text-align: center;
      border-bottom: 1px solid #e5e5e5;
      &:nth-last-child(1){
        border-bottom: 0 none;
      }
    }
    i.icon{
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-top: 6px;
    }
    .icon-jc{
      background:url("../assets/img/top1.png");
    }
    .icon-app{
      background: url("../assets/img/top2.png")
    }
     .icon-gzh{
      background: url("../assets/img/top3.png")
    }
     .icon-kf{
      background: url("../assets/img/top4.png")
    }
     .icon-top{
      background: url("../assets/img/top5.png")
    }
  }
  

</style>
