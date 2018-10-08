<template>
  <div class="offer-list-warp">
    <commonHeader :header="header"></commonHeader>
    <mainHeader :main_header="main_header"></mainHeader>
    
    <div class="offer-list-con container">
      <el-input placeholder="请输入商品名称" v-model="input1" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部商品" name="first">
          <div class="offer-search-warp">
            <div class="offer-list-content">
              <div class="top-tools">
                <div class="tools-left">
                  <el-radio-group v-model="radio1">
                    <el-radio-button label="1">价格从高到低<i class="iconfont icon-xia"></i></el-radio-button>
                    <el-radio-button label="2">价格从低到高<i class="iconfont icon-up"></i></el-radio-button>
                    <el-radio-button label="3">发布时间</el-radio-button>
                  </el-radio-group>
                </div>
                <div class="tools-right">
                  <el-radio-group v-model="radio2">
                    <el-button>
                      <i class="el-icon-arrow-left"></i>
                      1/100
                      <i class="el-icon-arrow-right"></i>
                    </el-button>
                  </el-radio-group>
                </div>
              </div>
             
              <div class="goods-list">
                <div :class="['goods-item',showIndex == index?'isHover':'']" v-for="(item,index) in tableData" :key="index">
                  <div class="goods-img-warp">
                    <div class="goods-logo" v-if="true">
                      <img src="@/assets/goods2.png" alt="">
                    </div>
                    <img src="@/assets/goods1.png" alt="">
                  </div>
                  <transition name="fade">
                    <div class="goods-item-info" >
                      <div class="goods-name">{{item.date}}</div>
                      <div class="goods-price"><div class="price">$68.0</div><div class="size">规格单位：<div class="unit">吨</div></div></div>
                    </div> 
                  </transition>
                </div>
              </div>
              <el-pagination class="pagination-table"
                background
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane> 
        <el-tab-pane label="商家资质" name="second">
          
        </el-tab-pane>
      </el-tabs>
      <goTop></goTop>
      </div>
    
    <commonFooter></commonFooter>
  </div>
</template>

<script>
import commonHeader from "@/components/Header.vue";
import mainHeader from "@/components/mainHeader.vue";
import commonFooter from "@/components/Footer.vue";
import goTop from '@/components/goTop.vue';
export default {
  name: "shop",
  data() {
    return {
      header: {
        isLogin: false,
        userName: "小明"
      },
      main_header: {},
      activeName: "first",
      input1: "",
      form: {
        type: [],
        country: []
      },
      radio1: "1",
      radio2:"2",
      showIndex: -1,
      tableData: [
        {
          time: "2018-10-01",
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        },
        {
          time: "2018-10-01",
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        },
        {
          time: "2018-10-01",
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        },
        {
          time: "2018-10-01",
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    handleClick: function() {},
    handleScroll() {
      
      
    },
    showFade: function(index) {
      if (this.header.isLogin) {
        this.showIndex = index;
      }
    },
    hideFade: function(index) {
      this.showIndex = -1;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    commonHeader,
    mainHeader,
    commonFooter,
    goTop
  },
  filters: {
    date_filter: function(date) {
      let newDate = new Date(date);
      let newYear = newDate.getFullYear();
      let newMon = newDate.getMonth();
      return newYear + "-" + newMon;
    }
  }
};
</script>

<style lang="scss">
.el-radio-button {
  height: 48px;
  line-height: 48px;
  .el-radio-button__inner {
    height: 48px;
    line-height: 22px;
    background-color: #fafafa;
  }
}
.el-radio-button.is-active {
  .el-radio-button__inner {
    background-color: #ffffff;
    color: #0168b7;
    border: 1px solid #e5e5e5;
  }
}
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  box-shadow: none;
}
.el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
  box-shadow: none;
}
.offer-list-warp {
  background-color: #ffffff;
}
.el-tabs__nav-wrap::after {
  background-color: transparent;
}
.el-tabs__item.is-active {
  color: #0168b7;
}
.el-tabs__active-bar {
  font-size: 50px;
  background-color: #0168b7;
}
.el-tabs__item:hover {
  color: #0168b7;
}
.el-form-item__label {
  height: 48px;
  line-height: 48px;
  background-color: #fafafa;
  margin-right: 15px;
}
.el-checkbox {
  height: 48px;
  line-height: 48px;
}
.offer-banner {
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
}
.el-tabs__item {
  font-size: 24px;
}
.offer-list-con {
  margin-top: 25px;
  position: relative;
  .input-with-select {
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    z-index: 2;
    .el-input__inner {
      border-right: 0 none;
    }
    .el-input-group__append {
      .el-button {
        padding: 9px 20px;
        background-color: #ffffff;
        .el-icon-search {
          color: #333333;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
 
  .top-tools {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fafafa;
    .tools-right {
     
      .el-button {
        height: 48px;
        vertical-align: middle;
        color: #333333;
        border-radius: 0 4px 4px 0;
        background-color: #fafafa;
        &:active,
        &:focus,
        &:hover {
          border-color: #e5e5e5;
          outline: 0;
        }
      }
    }
  }
  .offer-table {
    border: 1px solid #e5e5e5;
    .el-button {
      width: 70px;
      color: #ffffff;
      background-color: #0168b7;
    }
  }
  .pagination-table {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 30px;
    .el-pager li:not(.disabled).active {
      background-color: #ffffff;
      color: #0168b7;
    }
  }
  .goods-list {
    display: flex;
    justify-content: space-between;
    .goods-item {
      margin-top: 20px;
      height: 400px;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      &.isHover {
        .goods-item-info {
          top: 226px;
        }
      }
      .goods-img-warp {
        width: 285px;
        height: 285px;
        overflow: hidden;
        position: relative;
        .goods-logo {
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 50px;
          text-align: center;
        }
      }
      .goods-item-info {
        transition: 0.3s all;
        position: absolute;
        width: 100%;
        top: 285px;
        left: 0;
        background-color: #ffffff;
      }
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.5s;
      }
      .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }
      .goods-name {
        padding-left: 20px;
        font-size: 16px;
        margin: 10px 0;
      }
    
      .goods-price {
        padding-left: 20px;
        font-size: 16px;
        margin-top: 10px;
        display: flex;
        .price{
        color: #ff8800;
        }
        .size{
          font-size: 14px;
          width: 100px;
          display: flex;
          margin-left: 20px;
          color: #999999;
          line-height: 16px;
        }
      }
      .goods-isLogin {
        color: #999999;
        padding-left: 20px;
        margin-top: 10px;
        a {
          color: #0168b7;
        }
      }
      .goods-buy-btn {
        height: 46px;
        line-height: 46px;
        text-align: center;
        background-color: #0168b7;
        color: #ffffff;
        font-size: 16px;
        margin-top: 20px;
      }
    }
  }
}
</style>