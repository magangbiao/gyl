<template>
  <div class="commom-footer">
    <div class="enterprise">
       <div class="container">
        <div class="enterprise-left">
          <h2 class="enterprise-name">江苏苏航供应链管理有限公司</h2>
           <div class="enterprise-address">南京市秦淮区石门坎104号现代服务大厦C座11楼</div>
           <div class="enterprise-tel">传真：025-84218829</div> 
           <div class="enterprise-email">邮箱：servise@suhangguoji.com</div>
           <div class="enterprise-email">官网：www.suhangguoji.com</div>
        </div>
        <div class="enterprise-center">
          <div class="spread-wrap">业务咨询：</div>
          <div class="telePhone">400-800-0000</div>
          <div class="date">周一至周日 8:00-18:00</div>
        </div>
        <div class="enterprise-right">
         <div class="right-warp">
            <div class="app-warp">
            <div class="img-box"><img src="@/assets/img/app.png" alt=""></div>
            <div class="text">
              <p>扫一扫下载</p>
              <p>手机app</p>
            </div>
          </div>
          <div class="wx-warp">
            <div class="img-box"><img src="@/assets/img/wx.png" alt=""></div>
            <div class="text"><p>扫码关注</p><p>官方微信</p></div>
          </div>
         </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <div class="copyRight">Copyright © 2018-2020 suhangguoji.com All rights reserved. Powered by wzlue.苏ICP备17048396号-1</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonFooter",
  props: ["footer"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.commom-footer {
  .enterprise {
    background-color: #f9f9f9;
    height: 225px;
    .container {
      display: flex;
      align-items: center;
      .enterprise-left {
        flex: 1;
        text-align: left;
        padding:30px 35px;
        .enterprise-name{
          font-size: 20px;
          color: #333333;
          margin-bottom: 10px;
        }
        div{
          line-height: 32px;
          color: #7f7f7f;
        }
      }
      .enterprise-center {
        flex: 1;
        // text-align: center;
        padding: 50px 110px;
        height: 125px;
        .spread-wrap{
          margin-left: 20px;
          font-size: 14px;
          color: #555555;
          line-height: 20px;
        }
        .telePhone{
          margin:10px auto 30px 20px;
          font-size: 28px;
          color: #0168b7;
        }
        .date{
          color: #7f7f7f;
          margin-left: 20px;
        }
      }
      .enterprise-right {
        flex: 1;
        .right-warp{
          display: flex;
          text-align: center;
          justify-content: flex-end;
         
          .app-warp,.wx-warp{
            margin-right: 30px;
          }
          .img-box{
            img{
              width: 100px;
              height: 100px;
            }
          }
          .text p{
            color: #333333;
            line-height: 20px;
          }
        }
      }
    }
  }
  .footer-copyright {
    background-color: #666666;
    color: #ffffff;
    text-align: center;
    height: 80px;
    line-height: 80px;
    .copyRight {
      font-size: 16px;
    }
  }
}
</style>
