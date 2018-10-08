<template>
  <div class="s-login-footer">
<div class="list container" v-if="loginFooter.showLink">
  <ul>
      <li><a href="javascript:;">首页</a></li>
      <li><a href="javascript:;">报盘</a></li>
      <li><a href="javascript:;">求购</a></li>
      <li><a href="javascript:;">物流</a></li>
      <li><a href="javascript:;">仓储</a></li>
      <li><a href="javascript:;">报关</a></li>
      <li><a href="javascript:;">代理</a></li>
      <li><a href="javascript:;">金融</a></li>
      <li><a href="javascript:;">保险</a></li>
  </ul>
</div>
 <div class="copyRight container">Copyright © 2018-2020 suhangguoji.com All rights reserved. Powered by wzlue.苏ICP备17048396号-1</div>
  </div>
</template>

<script>
export default {
  name: "loginFooter",
  props: ["loginFooter"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.s-login-footer {
  background-color: #ffffff;
  height: 160px;
  padding-top: 30px;
  .list {
    width: 810px;
    margin: 0 auto;
    margin-bottom: 15px;
    ul {
      display: flex;
      li {
        flex: 1;
        line-height: 16px;
        text-align: center;
        border-right: 1px solid #666;
        a{
          color: #333333;
        }
        &:nth-last-child(1){
          border-right: 0 none;
        }
      }
    }
  }
  .copyRight{
    text-align: center;
  }
}
</style>