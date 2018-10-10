<template>
  <div class="offer-list-warp">
    <commonHeader :header="header"></commonHeader>
    <mainHeader v-on:getPathName="getPathName" :main_header="main_header"></mainHeader>
    <div class="offer-banner">
      <img v-if="pathName == '/offer/offerList'" src="@/assets/img/baopan-banner_02.png" alt="">
      <img v-if="pathName == '/offer/wantBuy'" src="@/assets/img/qiugou_02.png" alt="">
    </div>
    <div class="offer-list-con container">
      <el-input placeholder="请输入审批名称/厂号/提货地点" v-model="input1" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="期货" name="first">
          <div class="offer-search-warp">
            <el-form ref="form" :model="form" label-width="80px">
              <div class="offer-search-top">
                <div class="offer-search-type">
                  <el-form-item label="分类" style="margin-bottom:0;">
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox label="猪肉" name="type"></el-checkbox>
                      <el-checkbox label="牛肉" name="type"></el-checkbox>
                      <el-checkbox label="羊肉" name="type"></el-checkbox>
                      <el-checkbox label="禽肉" name="type"></el-checkbox>
                      <el-checkbox label="其他" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
                <div class="offer-search-add">
                  <el-form-item label="产地" style="margin-bottom:0;">
                    <el-checkbox-group v-model="form.country">
                      <el-checkbox label="美国" name="type"></el-checkbox>
                      <el-checkbox label="英国" name="type"></el-checkbox>
                      <el-checkbox label="新西兰" name="type"></el-checkbox>
                      <el-checkbox label="德国" name="type"></el-checkbox>
                      <el-checkbox label="荷兰" name="type"></el-checkbox>
                      <el-checkbox label="新加坡" name="type"></el-checkbox>
                      <el-checkbox label="内蒙古" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
                <div class="offer-search-delivery" v-if="pathName == '/offer/wantBuy'">
                  <el-form-item label="提货" style="margin-bottom:0;">
                    <el-select v-model="value" placeholder="省份">
                      <el-option
                        v-for="item in prioptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <el-select v-model="value" placeholder="城市">
                      <el-option
                        v-for="item in cityoptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="offer-search-sear">
                  <div class="left">
                    <el-form-item label="商家" style="margin-bottom:0;">
                  <el-input placeholder="请输入商家名称" v-model="input1" class="search-input">
                      <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                  </el-form-item>
                  </div>
                  <div class="right">
                    <span>共1234件商品</span>
                  </div>
                </div>
              </div>
            </el-form>

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
                    <el-radio-button label="1"><i class="el-icon-menu"></i></el-radio-button>
                    <el-radio-button label="2"><i class="iconfont icon-spread-h-bar"></i></el-radio-button>
                    <el-button>
                      <i class="el-icon-arrow-left"></i>
                      1/100
                      <i class="el-icon-arrow-right"></i>
                    </el-button>
                  </el-radio-group>
                </div>
              </div>
              <el-table class="offer-table" v-if="radio2 == 2"
                :data="tableData"
                style="width: 100%;margin-top:-1px">
                <el-table-column
                  fixed
                  prop="date"
                  label="商品名称">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="产地">
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="厂号">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="包装">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="数量">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="提货地点">
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="发货时间">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="goods-list" v-if="radio2 == 1">
                <div :class="['goods-item',showIndex == index?'isHover':'']" v-for="(item,index) in tableData" :key="index" @mouseenter="showFade(index)" @mouseleave="hideFade(index)">
                  <div class="goods-img-warp">
                    <div class="goods-logo" v-if="true">
                      <img src="@/assets/goods2.png" alt="">
                    </div>
                    <img src="@/assets/goods1.png" alt="">
                  </div>
                  <transition name="fade">
                    <div class="goods-item-info" >
                      <div class="goods-name">{{item.date}}</div>
                      <div class="goods-info-list">
                        <div class="goods-info-item">
                          <div class="top">产地</div>
                          <div class="bottom">{{item.name}}</div>
                        </div>
                        <div class="goods-info-item">
                          <div class="top">厂号</div>
                          <div class="bottom">{{item.province}}</div>
                        </div>
                        <div class="goods-info-item">
                          <div class="top">船期</div>
                          <div class="bottom">{{item.time | date_filter}}</div>
                        </div>
                        <div class="goods-info-item">
                          <div class="top">数量</div>
                          <div class="bottom">{{item.address}}吨</div>
                        </div>
                      </div>
                      <div class="goods-price" v-if="header.isLogin">$68.0</div>
                      <div class="goods-isLogin"><a href="#">登录</a>/<a href="#">注册</a>后可看到报价</div>
                      <div class="goods-buy-btn">立即购买</div>
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
        <el-tab-pane label="现货" name="second">
          <div class="offer-search-warp">
            <el-form ref="form" :model="form" label-width="80px">
              <div class="offer-search-top">
                <div class="offer-search-type">
                  <el-form-item label="分类" style="margin-bottom:0;">
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox label="猪肉" name="type"></el-checkbox>
                      <el-checkbox label="牛肉" name="type"></el-checkbox>
                      <el-checkbox label="羊肉" name="type"></el-checkbox>
                      <el-checkbox label="禽肉" name="type"></el-checkbox>
                      <el-checkbox label="其他" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
                <div class="offer-search-add">
                  <el-form-item label="产地" style="margin-bottom:0;">
                    <el-checkbox-group v-model="form.country">
                      <el-checkbox label="美国" name="type"></el-checkbox>
                      <el-checkbox label="英国" name="type"></el-checkbox>
                      <el-checkbox label="新西兰" name="type"></el-checkbox>
                      <el-checkbox label="德国" name="type"></el-checkbox>
                      <el-checkbox label="荷兰" name="type"></el-checkbox>
                      <el-checkbox label="新加坡" name="type"></el-checkbox>
                      <el-checkbox label="内蒙古" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
                <div class="offer-search-sear">
                  <div class="left">
                    <el-form-item label="商家" style="margin-bottom:0;">
                  <el-input placeholder="请输入商家名称" v-model="input1" class="search-input">
                      <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                  </el-form-item>
                  </div>
                </div>
              </div>
            </el-form>

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
                    <el-radio-button label="1"><i class="el-icon-menu"></i></el-radio-button>
                    <el-radio-button label="2"><i class="iconfont icon-spread-h-bar"></i></el-radio-button>
                    <el-button>
                      <i class="el-icon-arrow-left"></i>
                      1/100
                      <i class="el-icon-arrow-right"></i>
                    </el-button>
                  </el-radio-group>
                </div>
              </div>
              <el-table class="offer-table" v-if="radio2 == 2"
                :data="tableData"
                style="width: 100%;margin-top:-1px">
                <el-table-column
                  fixed
                  prop="date"
                  label="商品名称">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="产地">
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="厂号">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="包装">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="数量">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="提货地点">
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="发货时间">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="goods-list" v-if="radio2 == 1">
                <div :class="['goods-item',showIndex == index?'isHover':'']" v-for="(item,index) in tableData" :key="index" @mouseenter="showFade(index)" @mouseleave="hideFade(index)">
                  <div class="goods-img-warp">
                    <div class="goods-logo" v-if="true">
                      <img src="@/assets/goods2.png" alt="">
                    </div>
                    <img src="@/assets/goods1.png" alt="">
                  </div>
                  <transition name="fade">
                    <div class="goods-item-info" >
                      <div class="goods-name">{{item.date}}</div>
                      <div class="goods-info-list">
                        <div class="goods-info-item">
                          <div class="top">产地</div>
                          <div class="bottom">{{item.name}}</div>
                        </div>
                        <div class="goods-info-item">
                          <div class="top">厂号</div>
                          <div class="bottom">{{item.province}}</div>
                        </div>
                        <div class="goods-info-item">
                          <div class="top">船期</div>
                          <div class="bottom">{{item.time | date_filter}}</div>
                        </div>
                        <div class="goods-info-item">
                          <div class="top">数量</div>
                          <div class="bottom">{{item.address}}吨</div>
                        </div>
                      </div>
                      <div class="goods-price" v-if="header.isLogin">$68.0</div>
                      <div class="goods-isLogin"><a href="#">登录</a>/<a href="#">注册</a>后可看到报价</div>
                      <div class="goods-buy-btn">立即购买</div>
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
import goTop from "@/components/goTop.vue";
export default {
  name: "offerList",
  data() {
    return {
      pathName: "",
      header: {
        isLogin: false,
        userName: "小明"
      },
      main_header: {},
      activeName: "first",
      input1: "",
      value: "",
      form: {
        type: [],
        country: []
      },
      radio1: "1",
      radio2: "2",
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
      ],
      prioptions: [],
      cityoptions: []
    };
  },
  methods: {
    handleClick: function() {},
    handleScroll() {},
    showFade: function(index) {
      if (this.header.isLogin) {
        this.showIndex = index;
      }
    },
    hideFade: function(index) {
      this.showIndex = -1;
    },
    getPathName: function(params) {
      this.pathName = params;
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
.tools-left,
.tools-right{
  border: 1px solid #e5e5e5;
}
.el-radio-button {
  height: 48px;
  line-height: 48px;
  border-right: 1px solid #e5e5e5;
  .el-radio-button__inner {
    height: 48px;
    line-height: 22px;
    background-color: #fafafa;
    border: 0 none;
  }
}
.el-radio-button.is-active {
  border: 0 none;
  border-right: 1px solid #e5e5e5;
  .el-radio-button__inner {
    background-color: #ffffff;
    color: #0778ce;
    border: 0 none;
    
  }
}
.el-radio-button:first-child .el-radio-button__inner{
  border-left: 0 none;
}
.el-radio-button__orig-radio:checked+.el-radio-button__inner{
  box-shadow: -1px 0 0 0 #ffffff;
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
  .offer-search-warp {
    .offer-search-top {
      margin-bottom: 30px;
      border: 1px solid #e5e5e5;
      .offer-search-type,
      .offer-search-add,
      .offer-search-delivery {
        border-bottom: 1px solid #e5e5e5;
      }
      .offer-search-delivery {
        .el-select {
          margin-top: 4px;
          margin-right: 10px;
          width: 180px;
          height: 36px;
          .el-input__inner {
            height: 36px;
          }
        }
      }
      .offer-search-sear {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          width: 500px;
        }
        .right {
          margin-right: 20px;
        }
        .search-input {
          width: 300px;
          margin-top: 11px;
        }
        .el-form-item__label {
          height: 62px;
          line-height: 62px;
        }
        .el-input__inner {
          border-right: 0 none;
        }
        .el-input-group__append {
          .el-button {
            padding: 9px 20px;
            background-color: #ffffff;
            .el-icon-search {
              font-size: 18px;
              color: #333333;
              font-weight: 700;
            }
          }
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
      .el-icon-menu,
      .icon-spread-h-bar {
        font-size: 22px;
        line-height: 24px;
      }
      .el-button {
        height: 48px;
        border-left: 0 none;
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
      .goods-info-list {
        display: flex;
        .goods-info-item {
          width: 70px;
          font-size: 12px;
          border-right: 1px solid #e5e5e5;
          &:nth-last-child(1) {
            border-right: 0 none;
          }
          .top {
            color: #999999;
          }
          .bottom,
          .top {
            width: 50px;
            padding-left: 20px;
            height: 20px;
            line-height: 20px;
            overflow: hidden;
          }
        }
      }
      .goods-price {
        padding-left: 20px;
        font-size: 16px;
        margin-top: 10px;
        color: #ff8800;
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