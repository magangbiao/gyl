<template>
  <div class="s-news-warp">
    <commonHeader :header="header"></commonHeader>
    <mainHeader :main_header="main_header"></mainHeader>
    <div class="news-con container">
      <newsLeft :newsLeft="newsLeft"></newsLeft>
      <div class="s-news-right">
        <div class="news-list">
          <div class="news-item" v-for="(item, index) in items" :key="index">
            <div class="title">{{item.title}}</div>
            <div class="con">{{item.con}}</div>
            <div class="date"><i class="el-icon-time"></i>{{item.date}} </div>
          </div>
        </div>
       <div class="pagination">
          <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
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
      items: [
        {
          title: "海关总署披露：我国上月猪肉进口进六成来自欧盟",
          con:
            "世界三大学三大排名榜为：QS世界大学排名、泰晤士世界大学排名。最后便是，ARWU上交大世界大学学术排名。作为三大排名人气最高的TIMES泰晤士排名，在刚刚发布了2018-2019年的最新排名。作为最古老且认知度最高的排名，今年出的排名会给各位带去什么惊喜？",
          date: "2018-07-11"
        },
        {
          title: "海关总署披露：我国上月猪肉进口进六成来自欧盟",
          con:
            "世界三大学三大排名榜为：QS世界大学排名、泰晤士世界大学排名。最后便是，ARWU上交大世界大学学术排名。作为三大排名人气最高的TIMES泰晤士排名，在刚刚发布了2018-2019年的最新排名。作为最古老且认知度最高的排名，今年出的排名会给各位带去什么惊喜？",
          date: "2018-07-11"
        },
        {
          title: "海关总署披露：我国上月猪肉进口进六成来自欧盟",
          con:
            "世界三大学三大排名榜为：QS世界大学排名、泰晤士世界大学排名。最后便是，ARWU上交大世界大学学术排名。作为三大排名人气最高的TIMES泰晤士排名，在刚刚发布了2018-2019年的最新排名。作为最古老且认知度最高的排名，今年出的排名会给各位带去什么惊喜？",
          date: "2018-07-11"
        },
        {
          title: "海关总署披露：我国上月猪肉进口进六成来自欧盟",
          con:
            "世界三大学三大排名榜为：QS世界大学排名、泰晤士世界大学排名。最后便是，ARWU上交大世界大学学术排名。作为三大排名人气最高的TIMES泰晤士排名，在刚刚发布了2018-2019年的最新排名。作为最古老且认知度最高的排名，今年出的排名会给各位带去什么惊喜？",
          date: "2018-07-11"
        },
        {
          title: "海关总署披露：我国上月猪肉进口进六成来自欧盟",
          con:
            "世界三大学三大排名榜为：QS世界大学排名、泰晤士世界大学排名。最后便是，ARWU上交大世界大学学术排名。作为三大排名人气最高的TIMES泰晤士排名，在刚刚发布了2018-2019年的最新排名。作为最古老且认知度最高的排名，今年出的排名会给各位带去什么惊喜？",
          date: "2018-07-11"
        },
        {
          title: "海关总署披露：我国上月猪肉进口进六成来自欧盟",
          con:
            "世界三大学三大排名榜为：QS世界大学排名、泰晤士世界大学排名。最后便是，ARWU上交大世界大学学术排名。作为三大排名人气最高的TIMES泰晤士排名，在刚刚发布了2018-2019年的最新排名。作为最古老且认知度最高的排名，今年出的排名会给各位带去什么惊喜？",
          date: "2018-07-11"
        }
      ]
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
  background-color: #ffffff;
  .news-con {
    display: flex;
    .s-news-right {
      margin-left: 30px;
      width: 930px;
      padding-top: 70px;
      .news-list {
        padding: 30px;
        border: 1px solid #e5e5e5;
        .news-item {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e5e5e5;
          &:nth-last-child(1) {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: 0 none;
          }
          .title {
            font-size: 16px;
            color: #0168b7;
          }
          .con{
            width: 100%;
            height: 32px;
            line-height: 32px;
            overflow: hidden;
            color: #999999;
          }
          .date{
            color: #999999;
            i{
              margin-right: 10px;
            }
          }
        }
      }
      .pagination{
        width: 400px;
        margin: 50px auto 30px;
      }
    }
  }
}
</style>