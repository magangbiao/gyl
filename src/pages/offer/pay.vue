<template>
  <div class="pay-warp">
    <commonHeader :header="header"></commonHeader>
    <mainHeader :main_header="main_header"></mainHeader>
    <div class="pay-con-warp container">
      <div class="pay-con-title">结算</div>
      <div class="pay-price-con">
        <div class="pay-row">
          <div class="left">订单提交成功，请尽快付款！</div>
          <div class="right">订单号：<div class="order-number">20189999525515155</div> </div>
        </div>
        <div class="pay-row">
          应付金额：<div class="pay-price">$59</div>
        </div>
      </div>
      <div class="pay-type-warp">
        <div class="pay-type-text">支付方式</div>
        <div class="redio-groups">
           <el-radio v-model="radio1" label="1" border>在线支付</el-radio>
           <el-radio v-model="radio1" label="2" border>线下转账</el-radio>
        </div>
        <div class="pay-radio-warp" v-if="radio1 == 1">
          <div class="pay-row">
            <el-radio v-model="radio2" label="1" size="medium"><img src="@/assets/img/yue.png" alt=""> 账号余额0元</el-radio>
            <div class="pay-radio-right">余额不足，可先充值</div>
          </div>
           <div class="pay-row">
            <div class="pay-row-left">
              <el-radio v-model="radio2" label="2" size="medium"><img src="@/assets/bank.png" alt=""> 招商银行 </el-radio>
              <div class="bank-num"><div class="bank-number">**2315</div>储蓄卡 | 网银</div>
            </div>
            <div class="pay-radio-right">支付 <div class="price">68.0 </div> 元</div>
          </div>
        </div>
        <div class="pass-warp" v-if="radio1 == 1">
          <div class="pay-type-text">支付密码</div>
          <div class="pass-warp-input">
            <el-input type="password" v-model="passInput"></el-input>
          </div>
          <el-button class="pay-btn">确认支付</el-button>
        </div>
        <div class="offline-pay" v-if="radio1 == 2">
          <div class="pay-type-text">线下支付</div>
          <ul class="offline-node">
            <li>1、线下公司转账需将此 <div class="col-yellow">订单号</div> 填写至电汇凭证的【<div class="col-yellow">汇款用途</div>】、【<div class="col-yellow">附言</div>】、【<div class="col-yellow">摘要</div>】栏内！可加快审核。 </li>
            <li>2、转账后在此页面提交确认付款</li>
            <li class="col-yellow">注意事项：汇款时需要注意以下信息，请牢记！</li>
            <li>银行账号：62222222222222222222</li>
            <li>户名：张三</li>
            <li>开户行：农业银行</li>
          </ul>
          <el-form class="form-group" label-width="100px" :model="formInline">
              <el-form-item label="打款人姓名：">
                <el-input v-model="formInline.name"></el-input>
              </el-form-item>
              <el-form-item label="打款金额：">
                <el-input v-model="formInline.num"></el-input>
              </el-form-item>
              <el-form-item label="打款时间：">
                 <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
              <el-form-item label="打款凭证：">
                 <button type="button" class="upload-btn">
                    浏览
                   <input class="upload-input" type="file" name="">
                 </button>
                 <span class="upload-btn-right">未选择文件</span>
              </el-form-item>
              <el-form-item>
                <el-button class="pay-btn">确认支付</el-button>
              </el-form-item>
          </el-form>
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
export default {
  name: "pay",
  data() {
    return {
      header: {
        isLogin: false,
        userName: "小明"
      },
      main_header: {
        title: "收银台"
      },
      radio1: "1",
      radio2: "1",
      passInput: "",
      formInline: {
        name: "",
        user: "",
        num: "",
        date1: ""
      },
      fileList2: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  components: {
    commonHeader,
    mainHeader,
    commonFooter
  }
};
</script>

<style lang="scss">
.col-yellow {
  display: inline-block;
  color: #ff8800;
}

.pay-warp {
  background-color: #ffffff;
  .pay-con-warp {
    margin-bottom: 90px;
    .pay-con-title {
      color: #333333;
      font-size: 18px;
      font-weight: 700;
      padding-top: 40px;
      padding-bottom: 20px;
    }
    .pay-price-con {
      margin-bottom: 20px;
      padding: 20px 30px;
      height: 55px;
      background-color: #f5f5f5;
      .pay-row {
        display: flex;
        color: #666666;
        .left {
          margin-right: 140px;
        }
        .order-number {
          display: inline-block;
          color: #0168b7;
        }
        .pay-price {
          color: #ff8800;
          font-size: 16px;
        }
        & + .pay-row {
          margin-top: 15px;
        }
      }
    }
    .pay-type-warp {
      padding: 25px 20px;
      border: 1px solid #e5e5e5;
      .pay-type-text {
        font-size: 16px;
        color: #666666;
        font-weight: 500;
      }
      .redio-groups {
        padding-left: 20px;
        padding-top: 20px;
        .el-radio {
          border-radius: 0;
          width: 150px;
          height: 35px;
          padding: 0;
          line-height: 32px;
          text-align: center;

          .el-radio__label {
            color: #666666;
          }
          &.is-checked {
            background: url("../../assets/img/current.png") 131px 16px no-repeat;
            .el-radio__label {
              color: #666666;
            }
            border: 2px solid #0168b7;
          }
        }
        .el-radio__input {
          display: none;
        }
      }
      .pay-radio-warp {
        margin-top: 20px;
        border-top: 1px solid #e5e5e5;
        .pay-row {
          height: 60px;
          line-height: 60px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #e5e5e5;
          .pay-row-left {
            display: flex;
            color: #666666;
            .bank-num {
              display: flex;
              margin-left: 100px;
              .bank-number {
                margin-right: 20px;
              }
            }
          }
          img {
            vertical-align: middle;
            margin: 0px 15px;
          }
          .el-radio__input {
            line-height: 60px;
          }
          .pay-radio-right {
            color: #999999;
            .price {
              display: inline-block;
              font-size: 16px;
              font-weight: 700;
              color: #ff8800;
            }
          }
        }
      }
    }
    .pass-warp {
      padding-top: 20px;
      .pass-warp-input {
        padding-left: 20px;
        margin: 20px 0;
        width: 345px;
      }
      .pay-btn {
        width: 180px;
        color: #ffffff;
        margin-left: 20px;
        background-color: #0168b7;
      }
    }
    .offline-pay {
      color: #666666;
      border-top: 1px solid #e5e5e5;
      margin-top: 20px;
      padding-top: 20px;
      .offline-node {
        margin-top: 5px;
        line-height: 30px;
      }
      .form-group {
        width: 1000px;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #e5e5e5;
        .el-form-item {
          &:nth-child(2n) {
            margin-left: 80px;
          }
          .el-form-item__label {
            text-align: left;
          }
          margin-left: 20px;
          display: inline-block;
          width: 340px;
          .upload-btn {
            color: #666666;
            width: 120px;
            height: 40px;
            line-height: 36px;
            background-color: #f5f5f5;
            border: 1px solid #e5e5e5;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            input[type="file"] {
              opacity: 0;
            }
            .upload-input {
              cursor: pointer;
              z-index: 99;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          }
          .upload-btn-right {
            margin-left: 20px;
          }
          .pay-btn {
            margin-top: 20px;
            margin-left: -100px;
            width: 180px;
            color: #ffffff;
            background-color: #0168b7;
          }
        }
      }
    }
  }
}
</style>