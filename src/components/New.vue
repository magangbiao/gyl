<template>
  <div class="s-new-warp mb-20">
    <div class="warp-group">
      <div class="title">
        <span>最新成交</span>
      </div>
       <div class="new-list">
      <div class="new-item">
       <div class="left">
          <div class="tip">现货</div>
        牛前腱
       </div>
       <div class="right">
         成交量：1.0吨
       </div>
      </div>
      <div class="new-item">
       <div class="left">
          <div class="tip">现货</div>
        牛前腱
       </div>
       <div class="right">
         成交量：1.0吨
       </div>
      </div>
      <div class="new-item">
       <div class="left">
          <div class="tip">现货</div>
        牛前腱
       </div>
       <div class="right">
         成交量：1.0吨
       </div>
      </div>
      <div class="new-item">
       <div class="left">
          <div class="tip">现货</div>
        牛前腱
       </div>
       <div class="right">
         成交量：1.0吨
       </div>
      </div>
      <div class="new-item">
       <div class="left">
          <div class="tip">现货</div>
        牛前腱
       </div>
       <div class="right">
         成交量：1.0吨
       </div>
      </div>
      <div class="new-item">
       <div class="left">
          <div class="tip">现货</div>
        牛前腱
       </div>
       <div class="right">
         成交量：1.0吨
       </div>
      </div>
      <div class="new-item">
       <div class="left">
          <div class="tip">现货</div>
        牛前腱
       </div>
       <div class="right">
         成交量：1.0吨
       </div>
      </div>
    </div>
    </div>
   
  </div>
</template>

<script>
  export default {
    name:"new",
    props:["new"],
    data(){
      return{

      }
    }
  }
</script>

<style lang="scss">
.mb-20{
  margin-bottom: 20px;
}

.new-list{
  padding: 20px;
  height: 195px;
  overflow: hidden;
}
.new-item{
  color: #666666;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left{
    display: flex;
    align-items: center;
    .tip{
      margin-right: 10px;
      height: 16px;
      font-size: 12px;
      background-color: #ff8800;
      color: #fff;
      padding: 0px 5px;
      line-height: 16px;
    }
  }
}
</style>