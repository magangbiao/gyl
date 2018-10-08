<template>
  <div class="s-news-left">
    <div class="top">
      <span>当前位置：</span>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/newsList'}">新闻资讯</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="news-banner">
      <div class="banner">
        
      </div>
      <div class="list">
        <div class="list-item">
          平台资讯 <i class="el-icon-arrow-right"></i>
        </div>
        <div class="list-item">
          行业资讯 <i class="el-icon-arrow-right"></i>
        </div>
        <div class="list-item">
          网站公告 <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="link">
        <div class="title">联系我们</div>
        <div class="phone">
          <i class="icon-weibiaoti1 iconfont"></i>电话：025-83320779
        </div>
         <div class="phone">
          <i class="icon-chuanzhen iconfont"></i>传真：025-84218829
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name:"newsLeft",
    props:["newsLeft"],
    data(){
      return{

      }
    }

  }
</script>

<style lang="scss">
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
  cursor: pointer;
}
.s-news-left{
  width: 240px;
  .top{
    display: flex;
    padding: 28px 0;
    span{
      line-height: 14px;
    }
  }
  .news-banner{
    margin-bottom: 200px;
    .banner{
      width: 240px;
      height: 100px;
      background: url(../assets/img/news.png);
    }
    .list{
      padding: 20px 20px 0px 20px;
      border: 1px solid #e5e5e5;
      border-top: 0 none;
      
      .list-item{
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        border-bottom: 1px solid #e5e5e5;
        i{
          line-height: 50px;
        }
        &:nth-last-child(1){
        border-bottom: 0 none;
      }
      }
    }
    .link{
      padding:10px 20px 20px;
      margin-top: 20px;
      border: 1px solid #e5e5e5;
      .title{
        margin-bottom: 15px;
        font-size: 16px;
        font-weight: 700;
        line-height: 42px;
        border-bottom: 1px solid #e5e5e5;
      }
      .phone{
        line-height: 30px;
        i{
          margin-right: 10px;
        }
      }
    }
  }
}
</style>