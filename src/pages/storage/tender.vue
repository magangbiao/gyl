<template>
  <div class="s-tender-warp">
    <commonHeader :header="header"></commonHeader>
    <mainHeader :main_header="main_header"></mainHeader>
    <div class="s-tender-banner">
      <img src="@/assets/img/zhaobiao_02.png" alt="">
    </div>
    <div class="container">
      <div class="tender-top">
       <div class="left">
          当前位置：
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
       </div>
       <div class="right">
          <el-input placeholder="请输入搜索关键字" v-model="input1" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
       </div>
      </div>
      <div class="tender-list-warp">
        <div class="ender-list-top">
          <div class="title">全部招标</div>
          <div class="right">
            <div class="all">共20个</div>
            <div class="pagination-top">
              <i class="el-icon-arrow-left"></i>
              1/100
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
        <div class="tender-list-con">
          <div class="tender-list-item" v-for="(item, index) in tender_list" :key="index">
            <div class="left">
              <div class="title">
                <div class="tip">现货</div>{{item.title}}
              </div>
              <div class="tender-con-list">
                <div class="tender-con-item">
                  <div class="item">发布商家：{{item.name}}</div>
                  <div class="item">联系人：{{item.linkman}}</div>
                  <div class="item">联系电话：{{item.phone}}</div>
                </div>
                <div class="tender-con-item">
                  <div class="item">发布时间：{{item.create}}</div>
                  <div class="item">截止时间：{{item.end}}</div>
                  <div class="item">提货地点：{{item.add}}</div>
                </div>
                <div class="tender-con-item" style="text-align:center;">
                  <div class="time">距结束<div class="col-yellow">03</div>时<div class="col-yellow">07</div>分<div class="col-yellow">12</div>秒</div>
                  <div>已有<div class="col-yellow">3人</div>参与竞标</div>
                </div>
              </div>
            </div>
           <div class="right">
             <el-button>参与竞标</el-button>
           </div>
          </div>
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
    <commonFooter></commonFooter>
    <goTop></goTop>
  </div>
</template>

<script>
import commonHeader from "@/components/Header.vue";
import mainHeader from "@/components/mainHeader.vue";
import commonFooter from "@/components/Footer.vue";
import goTop from "@/components/goTop.vue";
export default {
  name: "insurance",
  data() {
    return {
      header: {
        isLogin: false,
        userName: "小明"
      },
      main_header: {},
      input1: "",
      tender_list: [
        {
          title: "新西兰犊牛肉招商公告",
          name: "南京肉品公司",
          linkman: "张三",
          phone: "13588888888",
          create: "2018-07-12",
          end: "2018-07-12",
          add: "江苏南京"
        },
         {
          title: "新西兰犊牛肉招商公告",
          name: "南京肉品公司",
          linkman: "张三",
          phone: "13588888888",
          create: "2018-07-12",
          end: "2018-07-12",
          add: "江苏南京"
        }, {
          title: "新西兰犊牛肉招商公告",
          name: "南京肉品公司",
          linkman: "张三",
          phone: "13588888888",
          create: "2018-07-12",
          end: "2018-07-12",
          add: "江苏南京"
        }, {
          title: "新西兰犊牛肉招商公告",
          name: "南京肉品公司",
          linkman: "张三",
          phone: "13588888888",
          create: "2018-07-12",
          end: "2018-07-12",
          add: "江苏南京"
        }, {
          title: "新西兰犊牛肉招商公告",
          name: "南京肉品公司",
          linkman: "张三",
          phone: "13588888888",
          create: "2018-07-12",
          end: "2018-07-12",
          add: "江苏南京"
        }
      ]
    };
  },
  components: {
    commonHeader,
    mainHeader,
    commonFooter,
    goTop
  }
};
</script>

<style lang="scss">
.col-yellow {
  color: #ff8800;
  display: inline-block;
}
.s-tender-warp {
  background-color: #ffffff;
}
.s-tender-banner {
  height: 300px;
}
.tender-top {
  padding-top: 26px;
  padding-bottom: 26px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    height: 40px;
    line-height: 40px;
    .el-breadcrumb__item {
      line-height: 40px;
    }
  }
  .right {
    .input-with-select {
      .el-input__inner {
        border-right: 0 none;
      }
    }
    .el-input-group__append {
      .el-button {
        padding: 9px 20px;
        background-color: #ffffff;
        .el-icon-search {
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
  }
}
.tender-list-warp {
  border: 1px solid #e5e5e5;
  .ender-list-top {
    padding-left: 30px;
    height: 48px;
    line-height: 46px;
    display: flex;
    justify-content: space-between;
    background-color: #fafafa;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    .title {
      font-size: 16px;
    }

    .right {
      display: flex;
      .all {
        margin-right: 20px;
      }
      .pagination-top {
        width: 100px;
        text-align: center;
        border-left: 1px solid #e5e5e5;
        i {
          cursor: pointer;
        }
      }
    }
  }
  .tender-list-con {
    padding: 0 30px;
    .tender-list-item {
      color: #333333;
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
            border-bottom: 1px solid #e5e5e5;
&:nth-last-child(1){
  border-bottom: 0 none;
}
      .left {
        .title {
          font-size: 16px;
          .tip {
            margin-right: 15px;
            font-size: 12px;
            padding: 2px 5px;
            background-color: #ff8800;
            color: #ffffff;
            display: inline-block;
          }
        }
        .tender-con-list {
          display: flex;
          width: 900px;
          justify-content: space-between;
          .tender-con-item {
            flex: 1;
            margin-top: 10px;
            line-height: 30px;
            &:nth-child(2){
              .item{
                padding-left: 60px;
              }
            }
            .time {
              .col-yellow {
                font-size: 20px;
                margin: 0px 5px;
              }
            }
          }
        }
      }
      .right {
        .el-button {
          color: #ffffff;
          width: 150px;
          height: 46px;
          background-color: #0168b7;
        }
      }
    }
  }
}
.pagination {
  width: 420px;
  margin: 50px auto 30px;
}
</style>