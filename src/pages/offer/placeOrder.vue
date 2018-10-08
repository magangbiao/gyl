<template>
  <div class="s-placeOrder-warp">
    <commonHeader :header="header"></commonHeader>
    <mainHeader :main_header="main_header"></mainHeader>
    <div class="s-placeorder-con container">
      <div class="s-placeorder-title">填写并核对订单信息</div>
      <div class="s-placeorder-form">
        <el-form :model="form" label-width="90px">
          <div class="form-item">
           <div class="title">合同信息</div>
            <el-form-item label="合同编号">
              <el-input class="form-item-input" v-model="form.name"></el-input>
            </el-form-item>
          </div>
          <div class="form-item">
            <div class="el-form-item pl-20">
              <el-radio v-model="radio" label="1" border>国内</el-radio>
              <el-radio v-model="radio" label="2" border>国际</el-radio>
            </div>
          </div>
          <div class="form-item">
           <div class="title">收货人信息 <span>新增收货地址</span></div>
            <div class="el-form-item pl-20">
              <el-radio v-model="radio1" label="1" border>公司</el-radio>
              <div class="address-info">
                <div class="name">华一凡</div>
                <div class="add">江苏省南京市江宁区将军大道78号</div>
                <div class="phone">158****1111</div>
                <div class="tip">默认地址</div>
              </div>
            </div>
            <div class="more">更多地址 <i class="iconfont icon-icon37"></i></div>
            <div class="link">
              <el-form-item label="联系人">
                <el-input class="form-item-input" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input class="form-item-input" v-model="form.name"></el-input>
              </el-form-item>
            </div>
            <div class="link">
              <el-form-item label="邮箱">
                <el-input class="form-item-input" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="存储日期">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </div>
          </div>
          <div class="form-item">
           <div class="title">付款方式</div>
            <div class="el-form-item pl-20">
              <el-radio v-model="radio2" label="1" border>一次性支付</el-radio>
              <el-radio v-model="radio2" label="2" border>分期支付</el-radio>
              <el-radio v-model="radio2" label="3" border>其他(账期)</el-radio>
            </div>
          </div>
          <div class="form-item">
           <div class="title">配送方式</div>
            <div class="el-form-item pl-20">
              <el-radio v-model="radio3" label="1" border>商家安排</el-radio>
              <el-radio v-model="radio3" label="2" border>自行安排</el-radio>
            </div>
          </div>
          <div class="form-item">
           <div class="title">仓储方式</div>
            <div class="el-form-item pl-20">
              <el-radio v-model="radio4" label="1" border>商家安排</el-radio>
              <el-radio v-model="radio4" label="2" border>自行安排</el-radio>
            </div>
          </div>
          <div class="form-item">
           <div class="title">货物保险</div>
            <div class="el-form-item pl-20">
              <el-radio v-model="radio5" label="1" border>商家安排</el-radio>
              <el-radio v-model="radio5" label="2" border>自行安排</el-radio>
            </div>
          </div>
        </el-form>
      </div>
      <div class="s-placeorder-goods">
        <div class="title">商家：南京肉品公司</div>
        <div class="goods-list">
          <el-table 
            :data="tableData"
            style="width: 100%">
            <el-table-column>
            <template slot-scope="scope">
              <img src="@/assets/goods1.png" alt="">
            </template>
            </el-table-column>
            <el-table-column
              prop="date"
              label="商品名称">
            </el-table-column>
            <el-table-column
              label="规格">
              <template slot-scope="scope">
                  <span>{{ scope.row.name }}吨</span>
                </template>
            </el-table-column>
            <el-table-column
              label="单价">
                <template slot-scope="scope">
                  <span>${{ scope.row.address }}</span>
                </template>
            </el-table-column>
            <el-table-column
              prop="num"
              label="数量">
            </el-table-column>
            <el-table-column
              label="总价">
              <template slot-scope="scope">
                  <span class="col-yellow">${{ scope.row.allpri }}</span>
                </template>
            </el-table-column>
          </el-table>
        </div>
        
        <div class="input-suffix form-item">
          <div class="label">其他服务：</div>
          <el-radio v-model="radio5" label="1" border>仓储</el-radio>
          <el-radio v-model="radio5" label="2" border>物流</el-radio>
          <el-radio v-model="radio5" label="3" border>报关</el-radio>
        </div>
       <div class="input-suffix">
          <div class="label">备注：</div>
          <el-input
            placeholder="选填：填写内容已和商家协商确认"
            v-model="input21">
          </el-input>
        </div>
      </div>
       <div class="s-placeorder-goods mt-20">
        <div class="title">货物信息 <span>新增货物</span></div>
        <div class="input-suffix">
          <div class="label">货物订单号：</div>
          <el-input
            placeholder="选填：填写内容已和商家协商确认"
            v-model="input21">
          </el-input>
        </div>
        <div class="goods-list">
          <el-table 
            :data="tableData"
            style="width: 100%">
            <el-table-column>
            <template slot-scope="scope">
              <img src="@/assets/goods1.png" alt="">
            </template>
            </el-table-column>
            <el-table-column
              prop="date"
              label="商品名称">
            </el-table-column>
            <el-table-column
              label="规格">
              <template slot-scope="scope">
                  <span>{{ scope.row.name }}吨</span>
                </template>
            </el-table-column>
            <el-table-column
              label="单价">
                <template slot-scope="scope">
                  <span>${{ scope.row.address }}</span>
                </template>
            </el-table-column>
            <el-table-column
              prop="num"
              label="数量">
            </el-table-column>
            <el-table-column
              label="总价">
              <template slot-scope="scope">
                  <span class="col-yellow">${{ scope.row.allpri }}</span>
                </template>
            </el-table-column>
          </el-table>
        </div>
       <div class="input-suffix">
          <div class="label">补充信息：</div>
          <el-input
            placeholder="选填：填写内容已和商家协商确认"
            v-model="input21">
          </el-input>
        </div>
      </div>
      <div class="s-placeorder-bottom">
        <div class="allprice">
          <div class="fl-right"><div class="text">总价：</div><div class="val">$68.00</div> </div>
        </div>
        <div class="allprice">
          <div class="fl-right"><div class="text">运费：</div><div class="val">$20.00</div> </div>
        </div>
        <div class="add">
          <div class="allprice">
            <div class="fl-right"><div class="text">应付金额：</div><div class="allpri">$68.00</div> </div>
          </div>
          <div class="allprice">
            <div class="fl-add">寄送至：中国 江苏南京 江宁区将军大道78号 华先生 158****2222 </div>
          </div>
        </div>
        <div class="form-btn">
          <el-button>提交订单</el-button>
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
  name: "placeOrder",
  data() {
    return {
      header: {
        isLogin: false,
        userName: "小明"
      },
      main_header: {
        title: "填写订单"
      },
      type: 1, // 1,
      form: {
        name: ""
      },
      value1: "",
      input21: "",
      radio: "1", //国内 国际
      radio1: "1", //收货人信息
      radio2: "1", //付款方式
      radio3: "1", //配送方式
      radio4: "1", //仓储方式
      radio5: "1", //货物保险
      tableData: [
        {
          date: "新西兰犊牛肉",
          name: "1",
          address: "68",
          num: "1",
          allpri: "68"
        },
        {
          date: "新西兰犊牛肉",
          name: "1",
          address: "68",
          num: "1",
          allpri: "68"
        }
      ]
    };
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
  color: #ff8800;
}
.s-placeOrder-warp {
  background-color: #ffffff;
}
.s-placeorder-con {
  color: #333333;
  background-color: #ffffff;
  padding-top: 20px;
  .s-placeorder-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 58px;
  }
  .s-placeorder-form {
    padding: 20px 20px 0 20px;
    margin-bottom: 20px;
    border: 1px solid #e5e5e5;
    .form-item {
      margin-bottom: 20px;
      border-bottom: 1px solid #e5e5e5;
      &:nth-last-child(1) {
        border-bottom: 0 none;
        margin-bottom: 0;
      }
      .title {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        padding-bottom: 18px;
        span {
          font-size: 14px;
          color: #0168b7;
          cursor: pointer;
        }
      }
      .form-item-input {
        width: 420px;
      }
      .address-info {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        width: 520px;
        margin-left: 20px;
        .tip {
          padding: 2px 8px;
          color: #ffffff;
          background: #7f7f7f;
        }
      }
      .more {
        margin-bottom: 20px;
        margin-left: 20px;
        display: inline-block;
        cursor: pointer;
        .iconfont {
          font-size: 12px;
          color: #999999;
        }
      }
      .link {
        display: flex;
        .el-form-item {
          width: 300px;
          .form-item-input {
            width: 220px;
          }
          & + .el-form-item {
            margin-left: 60px;
          }
        }
      }
      
    }
  }
  .el-radio {
    border-radius: 0;
    width: 150px;
    height: 35px;
    padding: 0;
    line-height: 32px;
    text-align: center;

    .el-radio__label {
      padding-left: 0;
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
  .s-placeorder-goods {
    padding: 20px 20px 0px 20px;
    border: 1px solid #e5e5e5;
    .title {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      span {
          font-size: 14px;
          color: #0168b7;
          cursor: pointer;
        }
    }
    .goods-list {
      img {
        width: 70px;
        height: 70px;
      }
    }
    .input-suffix {
      display: flex;
      width: 400px;
      margin: 20px 0;
      &.form-item{
        width: 590px;
        .el-radio{
          width: 120px;
          &.is-checked {
      background: url("../../assets/img/current.png") 101px 16px no-repeat;
          }
        }
      }
      .label {
        width: 120px;
        text-align: center;
        line-height: 40px;
      }
    }
  }
  .s-placeorder-bottom {
    padding-top: 30px;
    .allprice {
      display: flex;
      justify-content: flex-end;
      .fl-right {
        display: flex;
        width: 300px;
        justify-content: space-between;
        .text,
        .val {
          width: 150px;
          line-height: 25px;
          text-align: center;
        }
      }
      .fl-add {
        display: flex;
        width: 500px;
        line-height: 25px;
        justify-content: space-between;
      }
    }
    .add {
      margin-top: 20px;
      height: 50px;
      padding: 20px 0;
      background-color: #f4f4f4;
      .allpri {
        width: 150px;
        line-height: 25px;
        font-size: 16px;
        text-align: center;
        font-weight: 700;
        color: #ff8800;
      }
    }
    .form-btn {
      display: flex;
      margin-top: 20px;
      margin-bottom: 90px;
      justify-content: flex-end;
      .el-button {
        width: 180px;
        background-color: #0168b7;
        color: #ffffff;
      }
    }
  }
}
</style>