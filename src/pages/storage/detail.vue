<template>
  <div class="goods-detail-warp"> 
    <commonHeader :header="header"></commonHeader>
    <mainHeader :main_header="main_header"></mainHeader>
    <div class="goods-detail-con container">
      <div class="bread-title">
        当前位置：
        <el-breadcrumb class="bread-top" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>物流</el-breadcrumb-item>
          <el-breadcrumb-item>物流详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="goods-info">
        <div class="storage-info">
          <div class="warp-group">
            <div class="title">
              <span>长途路线</span>
            </div>
            <div class="date">发布时间:2018-09-04</div>
          </div>
          <div class="baojia-prev">
            <div class="info-list">
              <div class="info-item">
                <div class="top">编码</div>
                <div class="con">12306</div>
              </div>
              <div class="info-item">
                <div class="top">物流类型</div>
                <div class="con">国内物流</div>
              </div>
              <div class="info-item">
                <div class="top">分类</div>
                <div class="con">陆运</div>
              </div>
              <div class="info-item">
                <div class="top">联系人</div>
                <div class="con">李志成</div>
              </div>
              <div class="info-item">
                <div class="top">联系电话</div>
                <div class="con">13912345678</div>
              </div>
            </div>
            <div class="baojia-right">
              报价: <div class="price">￥5.0</div> /km
            </div>
          </div>
          <div class="num-warp">
            <div class="num">
              数量
              <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
              件
            </div>
            <div class="stora">库存：300件</div>
          </div>
          <div class="btns-warp">
            <el-button class="btn-qt">在线洽谈</el-button>
            <el-button class="btn-xd">立即下单</el-button>
          </div>
          <div class="bottom-box"></div>
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
                <el-rate v-model="xyvalue" disabled show-score text-color="#ff9900"></el-rate>
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
          <New></New>
          <div class="warp-group">
            <div class="title">
              <span>推荐商家</span>
            </div>
            <div class="detail-shop-list">
              <div class="detail-shop-item" v-for="(item,index) in shop_items" :key="index">
                <div class="goods-logo">
                  <img src="@/assets/shop-logo.png" alt="">
                </div>
                <div class="goods-name">{{item.goodsName}}</div>
                <div class="shop-xy">
                  <div class="shop-xyd">信用度：</div>
                  <el-rate v-model="item.price" disabled show-score text-color="#ff9900"></el-rate>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="goods-detail-right">
        <div class="warp-group">
          <div class="title">
            <span>运输线路</span>
          </div>
          <div class="list">
           <div class="item">南京-长春</div><div class="item">南京-长春</div><div class="item">南京-长春</div><div class="item">南京-长春</div>
           <div class="item">南京-长春</div><div class="item">南京-长春</div><div class="item">南京-长春</div><div class="item">南京-长春</div>  
           <div class="item">南京-长春</div><div class="item">南京-长春</div><div class="item">南京-长春</div><div class="item">南京-长春</div>
         </div>
         </div>
         <div class="warp-group">
          <div class="title">
            <span>业务介绍</span>
          </div>
          <div class="content">
              <p> 厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司
              厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司
              厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司</p>
          </div>
         </div>
          <div class="warp-group">
          <div class="title">
            <span>公司简介</span>
          </div>
          <div class="content">
              <p> 厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司
              厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司
              厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司厦门中贸国际货运输公司</p>
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
import New from "@/components/New.vue";
export default {
  name: "detail",
  data() {
    return {
      header: {
        isLogin: false,
        userName: "小明"
      },
      main_header: {},
      num: 1,
      xyvalue: 4,
      num1:"",
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
          goodsName: "厦门中贸国际货运输公司",
          price: 4
        },
        {
          goodsName: "厦门中贸国际货运输公司",
          price: 4
        },
        {
          goodsName: "厦门中贸国际货运输公司",
          price: 4
        },
        {
          goodsName: "厦门中贸国际货运输公司",
          price: 4
        },
        {
          goodsName: "厦门中贸国际货运输公司",
          price: 4
        },
        {
          goodsName: "厦门中贸国际货运输公司",
          price: 4
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
   
    };
  },
  methods: {
    handleChange: function(num) {
      console.log(num);
    },
   
  },
 
  components: {
    commonHeader,
    mainHeader,
    commonFooter,
    New
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
    position: relative;
   .storage-info{
    width: 980px;
    border: 1px solid #e5e5e5;
    padding-top: 30px;
     .warp-group{
       display: flex;
       justify-content: space-between;
       .title{
         padding-left: 10px;
         font-size: 16px;
         margin-left: 40px;
         border-left: 4px solid #0168b7;
       }
       .date{
         color: #999999;
       }
     }
     .baojia-prev{
        margin-left: 20px;
       margin-top: 30px;
       align-items: center;
        height: 70px;
       display: flex;
       justify-content: space-between;
       position: relative;
       .baojia-right{
         width: 322px;
         height: 70px;
         background: url(../../assets/img/detail_03.png);
         position: absolute;
         top: 0;
         right: -8px;
         padding-left: 50px;
         color: #fff;
         line-height: 60px;
         .price{
           margin-left: 20px;
           display: inline-block;
           font-size: 24px;
         }
       }
     }
     .num-warp{
       margin-top: 30px;
       margin-bottom: 45px;
       display: flex;
       align-items: center;
       padding-left: 40px;
       .num{
         color: #666666;
         .el-input-number{
           width: 110px;
           height: 30px;
           line-height: 30px;
           margin-left: 20px;
           margin-right: 5px;
           span{
             width: 30px;
             line-height: 28px;
           }
         }
         .el-input__inner{
           height: 30px;
         }
       }
       .stora{
         color: #666666;
         margin-left: 30px;
       }
     }
     .btns-warp{
       margin-left: 40px;
        .btn-qt,
        .btn-xd{
          width: 180px;
          color: #ffffff;
        }
        .btn-qt{
          background-color: #0168b7;
        }
        .btn-xd{
          background-color: #ff8800;
        }
     }
     .bottom-box{
       width: 983px;
       height: 90px;
       background: url(../../assets/img/detail_031.png) center center no-repeat;
       background-size: cover;
       position: absolute;
       left: 0;
       bottom: 0;
     }
     .info-list{
       display: flex;
       .info-item{
         min-width: 80px;
         padding-left: 20px;
         text-align: left;
         line-height: 30px;
         position: relative;
         .top{
           color: #666666;
         }
         &:nth-last-child(1){
           &::after{
             display: none;
           }
           }
         &::after{
           width: 1px;
           height: 48px;
           background-color: #e5e5e5;
           display: block;
           content: "";
           position: absolute;
           right: 0;
           top: 50%;
           margin-top: -24px;
           
         }
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
     
      .detail-shop-list {
        padding: 22px 42px;
        .detail-shop-item {
          padding-top: 20px;
          text-align: center;
          border-bottom: 1px solid #e5e5e5;
          &:nth-last-child(1) {
            margin-bottom: 0;
            border-bottom: 0 none;
          }
          .goods-img {
            width: 180px;
            height: 180px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .goods-logo{
            width: 70px;
            height: 70px;
            margin: 0 auto;
          }
          .goods-name {
            font-size: 16px;
            margin-top: 15px;
          }
          .shop-xy {
            margin-top: 10px;
            margin-bottom: 20px;
            .shop-xyd {
              color: #999999;
              margin-bottom: 8px;
            }
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
      .list{
        padding: 20px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        .item{
          width: 160px;
          line-height: 40px;
          text-align: center;
        }
      }
      .content{
        padding: 30px;
        p{
          line-height: 24px;
          letter-spacing:0.5px;
          text-indent:2em;
        }
        
      }
    }
  }
}
</style>