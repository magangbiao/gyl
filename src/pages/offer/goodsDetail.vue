<template>
  <div class="goods-detail-warp"> 
    <commonHeader :header="header"></commonHeader>
    <mainHeader :main_header="main_header"></mainHeader>
    <div class="goods-detail-con container">
      <div class="bread-title">
        当前位置：
        <el-breadcrumb class="bread-top" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>报盘</el-breadcrumb-item>
          <el-breadcrumb-item>现货</el-breadcrumb-item>
          <el-breadcrumb-item>商品详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="goods-info">
        <div class="goods-img">
          <div class="img-lag-warp">
            <img src="@/assets/detail11.png" alt="">
          </div>
          <div class="img-list">
            <img src="@/assets/detail12.png" alt="">
            <img src="@/assets/detail13.png" alt="">
            <img src="@/assets/detail13.png" alt="">
            <img src="@/assets/detail13.png" alt="">
            <img src="@/assets/detail13.png" alt="">
          </div>
        </div>
        <div class="goods-info-detail">
          <div class="goods-name">【柜拼】新西兰犊牛肉</div>
          <div class="goods-price-warp">
            <div class="goods-price">
              <span class="title">报价</span> <span class="price">$58.1</span>
            </div>
            <div class="goods-bz">
             <span class="title">包装：</span> 真空
            </div>
            <div class="goods-cq">
              <span class="title">船期：</span>2018-08
            </div>
          </div>
          <div class="goods-info-warp">
            <div class="goods-info-item">
              <div class="info">2018-07-10</div>
              <div class="title">发布时间</div>
            </div>
            <div class="goods-info-item">
              <div class="info">吨</div>
              <div class="title">单位</div>
            </div>
            <div class="goods-info-item">
              <div class="info">南京</div>
              <div class="title">国家</div>
            </div>
            <div class="goods-info-item">
              <div class="info">132</div>
              <div class="title">厂号</div>
            </div>
          </div>
          <div class="goods-controls-warp">
            <div class="controls-item">
              数量 <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1"></el-input-number>
            </div>
            <div class="controls-kc">
              库存：300件
            </div>
          </div>
          <div class="goods-btns">
            <el-button class="btn-qt">在线洽谈</el-button>
            <el-button class="btn-pg">拼柜</el-button>
          </div>
        </div>
        <div class="shop-info">
          <div class="shop-info-title">
            <span>商家信息</span>
          </div>
          <div class="shop-info-con">
            <div class="shop-info-top">
              <div class="logo">
                <img src="@/assets/shop-logo.png" alt="">
              </div>
              <div class="shop-name">南京汉钦食品有限公司</div>
              <div class="shop-xy">
                <div class="shop-xyd">信用度：</div>
                <el-rate v-model="value" disabled show-score text-color="#ff9900"></el-rate>
              </div>
            </div>
            <div class="shop-info-bottom">
              <div class="shop-link-man">联系人：张三</div>
              <div class="shop-link-phone">联系电话：15922222222</div>
              <el-button class="toshop">进入商家店铺</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-detail-warp">
        <div class="goods-detail-left">
          <div class="warp-group">
            <div class="title">
              <span>成本计算</span>
            </div>
            <div class="goods-detial-cost">
              <div class="cost-con">{{costInput}}{{costValue}} = {{currencyValue}}</div>
              <div class="cost-row">
                <div class="cost-input">
                  <el-input v-model="costInput"></el-input>
                  <el-select v-model="costValue">
                    <el-option
                      v-for="item in costOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="cost-fromPrice">
                  <el-select v-model="fromPriceValue">
                    <el-option
                      v-for="item in fromPrice"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="cost-row">
                <i class="el-icon-plus"></i>
                 <div class="cost-input1">
                  <el-input value="代理费"></el-input>
                </div>
                <el-button class="zh-btn"><i class="iconfont icon-weibiaoti"></i></el-button>
                 <div class="cost-fromPrice">
                  <el-select v-model="currencyValue">
                    <el-option
                      v-for="item in currency"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="cost-row">
                <el-button class="btns-zh">转换</el-button>
              </div>
            </div>
          </div>
          <div class="warp-group">
            <div class="title">
              <span>相关商品</span>
            </div>
            <div class="detail-shop-list">
              <div class="detail-shop-item" v-for="(item,index) in shop_items" :key="index">
                <div class="goods-img">
                  <img src="@/assets/goods1.png" alt="">
                </div>
                <div class="goods-name">{{item.goodsName}}</div>
                <div class="goods-price">￥{{item.price}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="goods-detail-right">
          <div class="warp-group table-warp">
            <div class="title">
              <span>商品信息</span>
            </div>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="name"
                label="名称">
              </el-table-column>
              <el-table-column
                label="价格">
                <template slot-scope="scope">
                  <span class="tabel-price">${{ scope.row.price }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="产地">
              </el-table-column>
              <el-table-column
                prop="no"
                label="厂号">
              </el-table-column>
              <el-table-column
                label="数量">
                <template slot-scope="scope">
                  {{ scope.row.num }}吨
                </template>
              </el-table-column>
              <el-table-column
                prop="bz"
                label="包装">
              </el-table-column>
            </el-table>
          </div>
             <div class="warp-group">
            <div class="title">
              <span>历史价格走势</span>
            </div>
            <div id="main" style="width: 900px;height: 325px;"></div>
          </div>
          <div class="warp-group">
            <div class="title">
              <span>产品描述</span>
            </div>
            <div class="detial-right-warp">
              <p><img src="@/assets/detail14.png" alt=""></p>
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
import echarts from "echarts";
export default {
  name: "goodsDetail",
  data() {
    return {
      header: {
        isLogin: false,
        userName: "小明"
      },
      main_header: {},
      num: 1,
      value: 4.0,
      costInput: "",
      costOptions: [
        {
          value: "美元",
          label: "美元"
        }
      ],
      costValue: "",
      fromPrice: [
        {
          value: "10%",
          label: "从价10%"
        }
      ],
      fromPriceValue: "",
      currency: [
        {
          value: "人民币",
          label: "人民币"
        }
      ],
      currencyValue: "",
      shop_items: [
        {
          goodsName: "澳洲原切牛排",
          price: "258.00"
        },
        {
          goodsName: "澳洲原切牛排",
          price: "258.00"
        },
        {
          goodsName: "澳洲原切牛排",
          price: "258.00"
        },
        {
          goodsName: "澳洲原切牛排",
          price: "258.00"
        },
        {
          goodsName: "澳洲原切牛排",
          price: "258.00"
        },
        {
          goodsName: "澳洲原切牛排",
          price: "258.00"
        }
      ],
      tableData: [
        {
          name: "牛肉",
          price: "58.00",
          address: "新西兰",
          no: 123,
          num: 9,
          bz: "真空"
        }
      ],
      charts: "",
      opinion: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      opinionData: [
        { value: 50 },
        { value: 60 },
        { value: 56 },
        { value: 55 },
        { value: 58 },
        { value: 56 },
        { value: 60 },
        { value: 54 },
        { value: 55 },
        { value: 58 },
        { value: 56 },
        { value: 60 }
      ]
    };
  },
  methods: {
    handleChange: function(num) {
      console.log(num);
    },
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        xAxis: {
          data: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "${value}"
          },
          min: 40,
          max: 65
        },
        series: [
          {
            data: this.opinionData,
            type: "line"
          }
        ]
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawPie("main");
    });
  },
  components: {
    commonHeader,
    mainHeader,
    commonFooter
  }
};
</script>

<style lang="scss">
.el-input-number__decrease:hover,
.el-input-number__increase:hover {
  color: #666666;
}
.el-input-number__decrease:hover:not(.is-disabled)
  ~ .el-input
  .el-input__inner:not(.is-disabled),
.el-input-number__increase:hover:not(.is-disabled)
  ~ .el-input
  .el-input__inner:not(.is-disabled) {
  border-color: #e5e5e5;
}
.el-button:active {
  border-color: #fff;
  outline: 0;
}
.el-rate__text {
  display: none;
}

.el-table--border th {
  border-right: 1px solid #ebeef5;
}
.el-input__inner {
  padding-left: 8px;
}
.el-input--suffix .el-input__inner {
  padding-left: 22px;
}
.cost-row + .cost-row {
  margin-top: 20px;
}
.tabel-price {
  color: #ff8800;
}
.goods-detail-warp {
  background-color: #ffffff;
}
.goods-detail-con {
  .bread-title {
    display: flex;
    margin-top: 30px;
    margin-bottom: 25px;
    .bread-top {
      .el-breadcrumb__item {
        margin-top: 3px;
      }
    }
  }
  .goods-info {
    display: flex;
    justify-content: space-between;
    .goods-img {
      width: 400px;
      height: 487px;
      .img-lag-warp {
        width: 400px;
        height: 400px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .img-list {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        img {
          width: 72px;
          height: 72px;
          cursor: pointer;
        }
      }
    }
    .goods-info-detail {
      width: 550px;
      height: 480px;
      .goods-name {
        color: #333333;
        font-size: 22px;
      }
      .goods-price-warp {
        color: #333333;
        width: 550px;
        height: 80px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        background: url("../../assets/img/detail1.png");
        .goods-price {
          .price {
            color: #ff8800;
            font-size: 22px;
            margin-left: 30px;
          }
        }
        .goods-bz,
        .goods-cq,
        .goods-price {
          flex: 1;
          text-align: center;
          .title {
            color: #999999;
          }
        }
      }
      .goods-info-warp {
        padding: 40px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed #e5e5e5;
        .goods-info-item {
          text-align: center;
          flex: 1;
          line-height: 30px;
          position: relative;
          &::after {
            width: 1px;
            height: 30px;
            display: block;
            content: "";
            background-color: #e5e5e5;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -15px;
          }
          &:nth-last-child(1) {
            &::after {
              display: none;
            }
          }
        }
      }
      .goods-controls-warp {
        color: #999999;
        display: flex;
        margin-top: 35px;
        align-items: center;
        .controls-item {
          margin: 0 30px;
          .el-input-number {
            width: 100px;
            margin-left: 30px;
          }
        }
      }
      .goods-btns {
        margin-top: 45px;
        text-align: center;
        .btn-qt,
        .btn-pg {
          font-size: 16px;
          color: #ffffff;
          width: 200px;
          height: 50px;
        }
        .btn-qt {
          background-color: #0168b7;
        }
        .btn-pg {
          background-color: #ff8200;
        }
      }
    }
    .shop-info {
      width: 190px;
      height: 456px;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      .shop-info-title {
        padding-left: 10px;
        background-color: #f5f5f5;
        color: #666666;
        height: 40px;
        line-height: 40px;
        span {
          padding-left: 10px;
          border-left: 4px solid #0168b7;
        }
      }
      .shop-info-con {
        padding: 15px;
        text-align: center;
        .shop-info-top {
          border-bottom: 1px solid #e5e5e5;
          .logo {
            margin: 15px auto;
            width: 70px;
            height: 70px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .shop-name {
            margin-bottom: 10px;
          }
          .shop-xy {
            margin-bottom: 20px;
            .shop-xyd {
              color: #999999;
              margin-bottom: 8px;
            }
          }
        }
        .shop-info-bottom {
          padding-top: 10px;
          .shop-link-man,
          .shop-link-phone {
            color: #666666;
            text-align: left;
            line-height: 36px;
          }
          .toshop {
            color: #0168b7;
            margin-top: 40px;
            border: 1px solid #0168b7;
          }
        }
      }
    }
  }
  .goods-detail-warp {
    display: flex;
    margin-top: 40px;
    .warp-group {
      border: 1px solid #e5e5e5;
      & + .warp-group {
        margin-top: 20px;
      }
      &.table-warp {
        border: 0 none;
        border-top: 1px solid #e5e5e5;
      }
      .title {
        padding-left: 10px;
        height: 40px;
        line-height: 40px;
        color: #333333;
        background-color: #f5f5f5;
        span {
          padding-left: 10px;
          border-left: 4px solid #0168b7;
        }
      }
    }
    .goods-detail-left {
      width: 270px;
      margin-right: 30px;
      .goods-detial-cost {
        .cost-row {
          font-size: 12px;
          padding: 0px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .zh-btn {
            width: 40px;
            height: 40px;
            padding: 0;
            i {
              color: #24bd6c;
              font-size: 24px;
            }
          }
          .cost-fromPrice {
            width: 88px;
            .el-input__inner {
              padding-left: 8px;
            }
          }
        }
        .cost-con {
          height: 68px;
          line-height: 68px;
          padding-left: 45px;
        }
        .el-icon-plus {
          color: #777777;
          font-size: 24px;
        }
        .cost-input {
          display: flex;
          width: 140px;
          height: 40px;
          .el-input,
          .el-select {
            width: 70px;
          }
          .el-input .el-input__inner,
          .el-select .el-input__inner {
            border-radius: 0;
            padding-left: 8px;
          }
          .el-input + .el-select .el-input__inner {
            border-left: 0 none;
          }
        }
        .cost-input1 {
          width: 70px;
        }
        .cost-fromPrice {
          width: 90px;
        }
        .btns-zh {
          margin: 10px auto 30px;
          color: #fff;
          width: 238px;
          height: 40px;
          background-color: #0168b7;
        }
      }
      .detail-shop-list {
        padding: 42px;
        .detail-shop-item {
          // display: flex;
          margin-bottom: 20px;
          text-align: center;
          &:nth-last-child(1) {
            margin-bottom: 0;
          }
          .goods-img {
            width: 180px;
            height: 180px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .goods-name {
            font-size: 16px;
            margin-top: 15px;
          }
          .goods-price {
            margin-top: 8px;
            color: #ff8800;
          }
        }
      }
    }
    .goods-detail-right {
      width: 900px;
      .detial-right-warp {
        padding-top: 40px;
        width: 900px;
        text-align: center;
      }
    }
  }
}
</style>