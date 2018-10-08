<template>
  <div class="s-main-header">
   <div class="container">
    <div class="s-main-logo">
      <div class="s-logo-warp">
        <a href="#" class="logo"></a>
      </div>
      <div class="s-title-warp" v-if="main_header.title">
        <p>{{main_header.title}}</p>
      </div>
    </div>
    <div class="s-main-search">
      <div class="s-search-warp">
        <div class="search-group">
          <el-input placeholder="" v-model="input">
            <template slot="append">搜索</template>
          </el-input>
        </div>
      </div>
      <ul class="s-link-warp">
        <li v-for="(item,index) in items" :key="index">
          <router-link :to="item.link">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "mainHeader",
  props: ["main_header"],
  data() {
    return {
      pathname: "",
      items: [
        {
          name: "首页",
          link: "/index"
        },
        {
          name: "报盘",
          link: "/offer/offerList"
        },
        {
          name: "求购",
          link: "/offer/wantBuy"
        },
        {
          name: "物流",
          link: "/logistics"
        },
        {
          name: "仓储",
          link: "/storage"
        },
        {
          name: "报关",
          link: "/customs"
        },
        {
          name: "代理",
          link: "/agent"
        },
        {
          name: "金融",
          link: "/finance"
        },
        {
          name: "保险",
          link: "/insurance"
        }
      ],
      input: ""
    };
  },
  mounted() {
    //  console.log(window.location.pathname);
     this.pathname=window.location.pathname;
     this.$emit('getPathName', this.pathname)
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        // console.log(val.path);
        this.pathname = val.path;
        this.$emit('getPathName', this.pathname)
      },
      deep: true
    }
  },
  methods: {
    
  }
};
</script>

<style lang="scss">
.s-main-header {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  .container {
    // height: 135px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .s-main-logo {
    display: flex;
    .s-logo-warp {
      a {
        display: inline-block;
        width: 220px;
        height: 100px;
        background: url(../assets/img/head-logo.png);
      }
    }
    .s-title-warp {
      p {
        font-size: 24px;
        color: #666;
        margin-top: 25px;
        margin-left: 30px;
        padding-left: 30px;
        border-left: 1px solid #e5e5e5;
      }
    }
  }
  .s-main-search {
    .s-search-warp {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
    }
    .search-group {
      width: 480px;
      // margin-right: 30px;
      .el-input__inner {
        border: 2px solid #0168b7;
        box-sizing: border-box;
      }
      .el-input-group__append,
      .el-input-group__prepend {
        cursor: pointer;
        background-color: #0168b7;
        border: 2px solid #0168b7;
        color: #ffffff;
      }
    }
    .s-link-warp {
      width: 800px;
      display: flex;
      margin-top: 30px;
      justify-content: space-between;
      li {
        flex: 1;
        height: 34px;
        line-height: 34px;
        text-align: right;
        a {
          color: #333333;
          display: inline-block;
          height: 100%;
          font-size: 16px;
          font-weight: 700;
          // width: 100%;
          &.router-link-active {
            color: #0168b7;
          }
        }
      }
    }
  }
}
</style>
