<template>
  <div class="offer-list-warp">
    <commonHeader :header="header"></commonHeader>
    <mainHeader v-on:getPathName="getPathName" :main_header="main_header"></mainHeader>
    <div class="offer-banner">
      <img v-if="pathName == '/logistics'" src="@/assets/img/wuliu-banner_02.png" alt="">
      <img v-if="pathName == '/storage'" src="@/assets/img/cangchu_02.png" alt="">
      <img v-if="pathName == '/customs'" src="@/assets/img/baoguan_02.png" alt="">
      <img v-if="pathName == '/agent'" src="@/assets/img/daili_02.png" alt="">
    </div>
    <div class="offer-list-con container">
      <el-input placeholder="请输入审批名称/厂号/提货地点" v-model="input1" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane  name="first">
          <span slot="label" v-if="pathName == '/logistics'">物流</span>
          <span slot="label" v-if="pathName == '/storage'">仓储</span>
          <span slot="label" v-if="pathName == '/customs'">报关</span>
          <span slot="label" v-if="pathName == '/agent'">代理服务</span>
          <div class="offer-search-warp">
            <el-form ref="form" :model="form" label-width="80px" v-if="pathName == '/logistics'">
              <div class="offer-search-top">
                <div class="offer-search-type">
                  <el-form-item style="margin-bottom:0;">
                    <span slot="label" v-if="pathName == '/logistics'">分类</span>
                    <span slot="label" v-else>求购</span>
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox border label="海运" name="type"></el-checkbox>
                      <el-checkbox border label="陆运" name="type"></el-checkbox>
                      <el-checkbox border label="空运" name="type"></el-checkbox>
                      <el-checkbox border label="铁路" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
                <div class="offer-search-type">
                  <el-form-item label="类型" style="margin-bottom:0;">
                    <el-checkbox-group v-model="form.country">
                      <el-checkbox label="全部" name="type"></el-checkbox>
                      <el-checkbox label="国内物流" name="type"></el-checkbox>
                      <el-checkbox label="国际物流" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
                <div class="offer-search-type">
                  <el-form-item label="线路" style="margin-bottom:0;">
                    <span>始发地：</span>
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
                    <span style="margin-left:80px">目的地：</span>
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
              </div>
            </el-form>

            <div class="offer-list-content">
              <el-table class="offer-table" :data="tableData" style="width: 100%;">
                  
                  <el-table-column v-for="(date, index) in logistics_table" :key="index" :prop="date.prop" :label="date.name">
                    
                  </el-table-column>
                <el-table-column label="操作">
                      <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                      </template>
                </el-table-column>
              </el-table>
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
            <el-form ref="form" :model="form" label-width="80px"  v-if="pathName == '/logistics'">
              <div class="offer-search-top">
                  <div class="offer-search-type">
                  <el-form-item style="margin-bottom:0;">
                    <span slot="label">分类</span>
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox border label="海运" name="type"></el-checkbox>
                      <el-checkbox border label="陆运" name="type"></el-checkbox>
                      <el-checkbox border label="空运" name="type"></el-checkbox>
                      <el-checkbox border label="铁路" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
                <div class="offer-search-type">
                  <el-form-item label="类型" style="margin-bottom:0;">
                    <el-checkbox-group v-model="form.country">
                      <el-checkbox label="全部" name="type"></el-checkbox>
                      <el-checkbox label="国内物流" name="type"></el-checkbox>
                      <el-checkbox label="国际物流" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
                <div class="offer-search-type">
                  <el-form-item label="线路" style="margin-bottom:0;">
                    <span>始发地：</span>
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
                    <span style="margin-left:80px">目的地：</span>
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
              </div>
            </el-form>

            <div class="offer-list-content">
              <el-table class="offer-table"
                :data="tableData"
                style="width: 100%;">
                <el-table-column v-for="(item, index) in logistics_table2" :key="index" :prop="item.prop" :label="item.name"></el-table-column>
               
                <el-table-column
                  fixed="right"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
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
import goTop from '@/components/goTop.vue';
export default {
  name: "offerList",
  data() {
    return {
      pathName:"",
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
      radio2: "2",
      value:"",
      showIndex: -1,
      tableData: [
        {
          time: "2018-10-01",
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333,
          id:1
        },
        {
          time: "2018-10-01",
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333,
          id:2
        },
        {
          time: "2018-10-01",
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333,
          id:3
        },
        {
          time: "2018-10-01",
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333,
          id:4
        }
      ],
      prioptions:[
        {
          value:"",
          label:""
        }
      ],
      cityoptions:[{
        value:"",
        label:""
      }],
      logistics:[{
        tabName:"物流"
      },{
        tabName:"求购"
      }],
       logistics_search:[{
        type:"分类",
        list:["海运","陆运","空运","铁路"]
      },{
        type:"类型",
        list:["全部","国内物流","国际物流"]
      },{
        type:"路线"
      }],
      logistics_table:[{
        name:"名称",
        prop:"name"
      },{
        name:"物流类型",
        prop:"province"
      },{
        name:"分类",
        prop:"address"
      },{
        name:"收费",prop:"city"
      },{
        name:"收费单位",prop:"zip"
      },{
        name:"公司名称",prop:"date"
      },{
        name:"发布日期",prop:"time"
      }],
       logistics_table2:[{
        name:"物流类型",
        prop:"name"
      },{
        name:"分类",
        prop:"province"
      },{
        name:"出发地",
        prop:"address"
      },{
        name:"目的地",prop:"city"
      },{
        name:"运输货物",prop:"zip"
      },{
        name:"重量（吨）",prop:"date"
      },{
        name:"发布日期",prop:"time"
      }]
    };
  },
  methods: {
    handleClick: function(data) {
      console.log(data);
      
    },
    handleScroll() {
      
      
    },
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
      console.log(this.pathName);
      
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
  },
  watch:{
  
  }
};
</script>

<style lang="scss">
.el-tabs__nav{
  height: 40px;
  line-height: 40px;
}
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
  height: 52px;
  line-height: 52px;
  background-color: #fafafa;
  margin-right: 15px;
}
.el-checkbox {
  height: 48px;
  line-height: 48px;
}
.el-checkbox.is-bordered{
    padding: 0;
    border-radius: 2px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    line-height: 32px;
    height: 32px;
    width: 80px;
    text-align: center;
    margin-top: 10px;
    .el-checkbox__input{
      display: none;
    }
    .el-checkbox__label{
      padding-left: 0;
    }
    &.is-checked{
      background-color: #0168b7;
      color: #ffffff;
    }
}
.is-bordered .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #ffffff;
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
  font-size: 18px;
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
      // border-right: 0 none;
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
      .offer-search-type{
        border-bottom: 1px solid #e5e5e5;
        &:nth-last-child(1){
          border-bottom: 0 none;
        }
      }
      .offer-search-type{
        .el-select{
          margin-top: 6px;
          margin-right: 10px;
          width: 140px;
          height: 36px;
          .el-input__inner{
            height: 36px;
          }
        }
      }
      .offer-search-type {
        .search-input {
          width: 300px;
          margin-top: 11px;
        }
        .el-form-item__label {
          // height: 62px;
          // line-height: 62px;
        }
        // .el-input__inner {
        //   border-right: 0 none;
        // }
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

  .offer-table {
    color: #666666;
    border: 1px solid #e5e5e5;
    thead{
      color: #666666;
    }
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