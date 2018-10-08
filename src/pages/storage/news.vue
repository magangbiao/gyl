<template>
  <div class="s-news-warp">
    <commonHeader :header="header"></commonHeader>
    <mainHeader :main_header="main_header"></mainHeader>
    <div class="news-con container">
      <newsLeft :newsLeft="newsLeft"></newsLeft>
      <div class="s-news-right">
        <div class="news-right-con">
          <div class="news-con-top">
            <div class="title">{{news.title}}</div>
            <div class="info"><div class="user"><i class="icon-user"></i>{{news.user}}</div><div class="date"><i class="el-icon-time"></i>{{news.date}}</div></div>
            <div class="con" v-html="news.con"></div>
          </div>
          <div class="news-con-bottom">
            <div class="left">
              上一篇：南怀瑾辞世六年，巨额著作权纠纷案今日在沪二审落槌南怀瑾辞世六年，巨额著作权纠纷案今日在沪二审落槌  
            </div>
            <div class="right">
              下一篇：南怀瑾辞世六年，巨额著作权纠纷案今日在沪二审落槌南怀瑾辞世六年，巨额著作权纠纷案今日在沪二审落槌
            </div>
          </div>
        </div>
      </div>
    </div>
    <commonFooter></commonFooter>
  </div>
</template>

<script>
import commonHeader from "@/components/Header.vue";
import mainHeader from "@/components/mainHeader.vue";
import commonFooter from "@/components/Footer.vue";
import newsLeft from "@/components/newsLeft.vue";
export default {
  name: "news",
  data() {
    return {
      header: {
        isLogin: false,
        userName: "小明"
      },
      main_header: {},
      newsLeft: {},
    news:{
      title:"各地纪念孔子诞辰2569年",
      user:"李志成",
      date:"2018-07-11",
      con:"<p>9月28日，身着传统汉礼服的乐舞生再现古代祭孔仪式。当日，孔子诞辰2569周年纪念大典在北京孔庙举行。中新社记者 卞正锋 摄</p><p>9月28日，各界民众聚集在建水文庙前，祭拜孔子。当日，云南省建水县举办“孔子文化节”庆祝孔子诞辰，并进行祭孔仪式。建水文庙始建于公元1285年，至今有700多年历史，占地面积7.6万平方米。中新社记者 任东 摄</p><p>9月28日，身着传统汉礼服的乐舞生再现古代祭孔仪式。当日，孔子诞辰2569周年纪念大典在北京孔庙举行。中新社记者 卞正锋 摄</p><p>9月28日，各界民众聚集在建水文庙前，祭拜孔子。当日，云南省建水县举办“孔子文化节”庆祝孔子诞辰，并进行祭孔仪式。建水文庙始建于公元1285年，至今有700多年历史，占地面积7.6万平方米。中新社记者 任东 摄</p><p>9月28日，身着传统汉礼服的乐舞生再现古代祭孔仪式。当日，孔子诞辰2569周年纪念大典在北京孔庙举行。中新社记者 卞正锋 摄</p><p>9月28日，各界民众聚集在建水文庙前，祭拜孔子。当日，云南省建水县举办“孔子文化节”庆祝孔子诞辰，并进行祭孔仪式。建水文庙始建于公元1285年，至今有700多年历史，占地面积7.6万平方米。中新社记者 任东 摄</p><p>9月28日，身着传统汉礼服的乐舞生再现古代祭孔仪式。当日，孔子诞辰2569周年纪念大典在北京孔庙举行。中新社记者 卞正锋 摄</p><p>9月28日，各界民众聚集在建水文庙前，祭拜孔子。当日，云南省建水县举办“孔子文化节”庆祝孔子诞辰，并进行祭孔仪式。建水文庙始建于公元1285年，至今有700多年历史，占地面积7.6万平方米。中新社记者 任东 摄</p>",
    }
    };
  },
  components: {
    commonHeader,
    mainHeader,
    commonFooter,
    newsLeft
  }
};
</script>

<style lang="scss">
.s-news-warp {
  color: #333333;
  background-color: #ffffff;
  .news-con {
    display: flex;
    .s-news-right {
      margin-left: 30px;
      width: 930px;
      padding-top: 70px;
      margin-bottom: 80px;
      .news-right-con{
        padding: 20px 20px 0 20px;
        border: 1px solid #e5e5e5;
        .news-con-bottom{
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left,.right{
            width: 430px;
            height: 19px;
            line-height: 19px;
            overflow: hidden;
          }
        }
      }
     .icon-user{
       margin-right: 10px; 
       width: 18px;
       height: 18px;
       vertical-align: bottom;
       display: inline-block;
       background: url(../../assets/img/login-user.png);
       background-size: cover;
     }
     .title{
       font-size: 16px;
       margin-bottom: 10px;
     }
     .info{
       margin-bottom: 30px;
       display: flex;
       align-items: center;
       .date{
         margin-left: 50px;
         i{
           margin-right: 10px;
         }
       }
     }
     .con{
         padding-top: 20px;
         border: 1px solid #e5e5e5;
         border-left: 0 none;
         border-right: 0 none;
       p{
          color: #666666;
          margin-bottom: 20px;
          line-height: 24px;
         text-indent: 2em;
         letter-spacing: 0.5px;
       }
     }
    }
  }
}
</style>