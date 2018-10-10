<template>
<div class="bg-f9">
  <commonHeader :header="header"></commonHeader>
  <mainHeader v-on:getPathName="getPathName" :main_header="main_header"></mainHeader>
  <!-- 轮播部分 -->
    <div class="s-carousel-warp">
      <el-carousel :interval="5000" height="400px">
        <el-carousel-item v-for="(item,index) in 4" :key="index">
          
        </el-carousel-item>
      </el-carousel>
      <div class="s-banner-warp">
        <div class="container">
          <div class="s-banner-left">
            <div :class="['banner-left-item',banner_index == index?'is-active':'']" @mouseover="banner_show(index)" @mouseout="banner_hide" v-for="(item,index) in banner_items" :key="index">
              <span class="text">{{ item }}</span>
              <div class="banner-items-from" v-if="banner_index == index">
                <div class="title">{{item}}</div>
                <el-form ref="form" :model="form">
                  <el-form-item style="margin-bottom:0px;">
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox label="猪肉" name="type"></el-checkbox>
                      <el-checkbox label="牛肉" name="type"></el-checkbox>
                      <el-checkbox label="羊肉" name="type"></el-checkbox>
                      <el-checkbox label="禽类" name="type"></el-checkbox>
                      <el-checkbox label="其他" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-row>
                    <el-col :span="12">
                      <el-form-item>
                        <el-select v-model="form.region" placeholder="请选择产地">
                          <el-option label="产地一" value="shanghai"></el-option>
                          <el-option label="产地二" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item>
                          <el-input style="width:92%;" placeholder="请输入厂号" v-model="form.name"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                     <el-row>
                    <el-col :span="12">
                      <el-form-item>
                        <el-select v-model="form.region" placeholder="请选择省份">
                          <el-option label="产地一" value="shanghai"></el-option>
                          <el-option label="产地二" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item>
                          <el-select v-model="form.region" placeholder="请选择城市">
                          <el-option label="产地一" value="shanghai"></el-option>
                          <el-option label="产地二" value="beijing"></el-option>
                        </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                     <el-row>
                    <el-col :span="16">
                      <el-form-item>
                       <el-input style="width:92%;" placeholder="请输入厂号" v-model="form.name"></el-input>
                      </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item>
                          <el-button class="submit-btn" type="primary" @click="onSubmit">搜索</el-button>
                        </el-form-item>
                      </el-col>
                    </el-row>
                </el-form>
              </div>
            </div>
          </div>
          <div class="s-banner-right">
            <div class="userinfo-warp">
              <div class="top">
                <div class="user-logo">
                  <img src="@/assets/img/user-logo.png" alt="">
                </div>
                <div class="s-wel-warp">
                  <p>Hi，下午好</p>
                  <p>欢迎来到苏杭供应链</p>
                </div>
              </div>
              <div class="btns">
                <router-link class="s_login" to="/login">
                  <el-button type="primary">登录</el-button>
                </router-link>
                <router-link class="s_register" to="/register">
                  <el-button>注册</el-button>
                </router-link>
              </div>
            </div>
            <div class="news-tabs-warp">
             <div class="tabs-title-warp">
                <div :class="['tabs-item-tile',tab_acitve == index?'active':'']" @click="handleClick(index)" v-for="(item,index) in tab_items" :key="index"><span>{{item}}</span>
                    <div class="banner-list" v-if="tab_acitve == index">
                      <ul>
                        <li v-for="(item,index) in banner_tab_items" :key="index"><a href="#">{{item.data}}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 首页推荐 -->
    <div class="s-tui-warp container">
      <div class="s-tui-item">
        <img class="banner-img" src="@/assets/img_031.png" alt="">
      </div>
      <div class="s-tui-item" v-for="(item, index) in tui_items" :key="index">
         <div class="tui-group">
            <div class="title">{{item.type}}</div>
            <div class="tui-goods-img">
              <img :src="item.img" alt="">
            </div>
            <div class="tui-goods-name">{{item.name}}</div>
            <div class="tui-goods-area">产地：{{item.area}}</div>
            <div class="tui-goods-price"><span>{{item.price}}</span> 元/吨</div>
         </div>
      </div>
    </div>
    <!-- 报盘 -->
    <div class="s-offer-warp container">
      <div class="s-offer-left">
        <div class="offer-title">
          <div class="offer-name">现货报盘</div>
          <div class="offer-more">更多报盘 <i class="el-icon-arrow-right"></i></div>
        </div>

        <el-table
        :data="tableData"
        border :header-cell-style="{background:'#0168b7',color:'#ffffff'}"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="产品名称">
        </el-table-column>
        <el-table-column
          prop="country"
          label="国家">
        </el-table-column>
        <el-table-column
          prop="no"
          label="厂号">
        </el-table-column>
        <el-table-column
          prop="address"
          label="数量">
        </el-table-column>
        <el-table-column
          prop="address"
          label="包装">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期">
        </el-table-column>
      </el-table>
      </div>
      <div class="s-offer-right">
        <div class="offer-title">
          <div class="offer-name">行情指数</div>
        </div>
        <div class="s-quotation-warp">
          <div class="s-quotation-title">
            <div class="s-quotation-tab">
              <div :class="['s-quotation-item',quotation_index == index?'active':'']" @click="quotation(index)" v-for="(item,index) in quotation_items" :key="index">
                {{ item }} 
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- 期货报盘 -->
    <div class="s-offer-warp s-futures-warp container">
      <div class="s-offer-left">
        <div class="offer-title">
          <div class="offer-name">期货报盘</div>
          <div class="offer-more">更多报盘 <i class="el-icon-arrow-right"></i></div>
        </div>

        <el-table
        :data="tableData"
        border :header-cell-style="{background:'#0f9f53',color:'#ffffff'}"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="产品名称">
        </el-table-column>
        <el-table-column
          prop="country"
          label="国家">
        </el-table-column>
        <el-table-column
          prop="no"
          label="厂号">
        </el-table-column>
        <el-table-column
          prop="address"
          label="数量">
        </el-table-column>
        <el-table-column
          prop="address"
          label="包装">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期">
        </el-table-column>
      </el-table>
      </div>
      <div class="s-offer-right">
        <div class="offer-title">
          <div class="offer-name">快捷工具</div>
        </div>
        <div class="s-quotation-warp">
          <div class="s-quotation-title">
            <div class="s-quotation-tab">
              <div :class="['s-quotation-item',quotation_index == index?'active':'']" @click="quotation(index)" v-for="(item,index) in tools_items" :key="index">
                {{ item }} 
              </div>
            </div>
          </div>
          <div class="s-quotatition-tools">
            <div class="currency-item">
              <div class="top">
                <div class="left">
                  
                </div>
                <div class="right">

                </div>
              </div>
              <div class="con">
                <div class="left">
                  <el-input v-model="input"></el-input>
                </div>
                <div class="right">
                  <el-select v-model="value2" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="con">
                <div class="left">
                  <el-input v-model="input"></el-input>
                </div>
                <div class="right">
                  <el-select v-model="value3" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="s-small-banner container">
      <img src="@/assets/img_033.png" alt="">
    </div>
    <!-- 仓储物流 -->  
    <div class="s-storage-wrap container">
      <div>
        <span>仓储物流</span>
      </div>
      <div class="s-storage-con">
        <div class="s-menu-item">
          <div class="menu-tabs">
            <div class="menu-tabs-title">
              <div :class="['menu-tabs-item',storage_index == index?'active':'']" @click="storage(index)" v-for="(item,index) in story_items" :key="index">
                {{ item }}
              </div>
            </div>
              <div class="menu-tabs-con" v-if="storage_index == 0">
                 <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="(item,index) in storage_options"
                      :key="index"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <el-input v-model="input" placeholder="请输入关键词搜索"></el-input>
              </div>
              <el-button class="search-btn" v-if="storage_index == 0">搜全站</el-button>

          </div>
      </div>
      <div class="s-menu-con">
        <div class="menu-con-title">
          <div class="title-line">特惠路线</div>
          <div class="title-more">更多</div>
        </div>
        <div class="menu-line-item" v-if="line_items.length > 0" v-for="(item,index) in line_items" :key="index">
          <div class="line-item-address">
            <div class="line"></div>
            <div class="address">
              <div class="start-add">{{item.start_add}}</div>
              <div class="end-add">{{item.end_add}}</div>
            </div>
          </div>
          <div class="line-item-type">{{item.type}}</div>
          <div class="line-item-price">
            <div class="price">${{item.price}}/吨</div>
            <div class="date">{{item.date}}</div>
          </div>
        </div>
      </div>
      <div class="s-menu-hot">
        <div class="menu-con-title">
          <div class="title-line">热门仓储</div>
          <div class="title-more">更多</div>
        </div>
        <div class="storage-item" v-for="(item,index) in storage_items" :key="index">
          <div class="storage-item-info">
            <div class="img-warp">
              <img src="@/assets/img_034.png" alt="">
            </div>
            <div class="info-warp">
              <div class="name">{{item.name}}</div>
              <div class="price">{{item.price}} m<sup>2</sup>/日</div>
              <div class="add"><i class="el-icon-location"></i> {{item.address}}</div>
            </div>
          </div>
          <div class="storage-size-info">
            <div class="type">仓储类型：<div class="type-col">{{item.type}}</div> </div>
            <div class="size">可用面积：<div class="size-col">{{item.size}} m<sup>2</sup></div></div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <!-- 拍卖 -->
    <div class="s-storage-wrap container">
      <div class="s-storage-title">
        <span>拍卖</span>
        <div class="news"><i>新</i>广东顺德万香合贸易有限公司以20000元拍下猪腿肉</div>
        <div class="news"><i>新</i>广东顺德万香合贸易有限公司以20000元拍下猪腿肉</div>
        <div class="more">更多拍卖<i class="el-icon-arrow-right"></i></div>
      </div>
      <div class="s-storage-con">
        <div class="s-auction-item"></div>
         <div class="auction-list">
            <div class="auction-item" v-for="(item,index) in auction_items" :key="index">
            <div class="auction-img">
              <img src="@/assets/pm_03.png" alt="">
            </div>
            <div class="auction-con">
              <div class="name">{{item.name}}</div>
              <div class="price">当前价：<span class="price-col">￥{{item.price}}</span></div>
              <div class="date">距结束 <div class="hour">03</div> 时 <div class="hour">07</div> 分 <div class="hour">30</div> 秒</div>
            </div>
          </div>
         </div>
      </div>
    </div>
    <!-- 招标 -->
     <div class="s-storage-wrap container">
      <div class="s-storage-title">
        <span>招标</span>
        <div class="more">更多招标 <i class="el-icon-arrow-right"></i></div>
      </div>
      <div class="s-storage-con">
        <div class="s-tender-item"></div>
         <div class="tender-list">
            <div class="tender-item" v-for="(item,index) in tender_items" :key="index">
              <div class="item-con">
                <div class="title"><div class="tip">现货</div> {{item.title}}</div>
                <div class="date">距结束 <div class="hour">03</div> 时 <div class="hour">07</div> 分 <div class="hour">30</div> 秒</div>
                <div class="tender-con">
                  <div class="tender-com">发布商家：{{item.com}}</div>
                  <div class="address">提货地点：{{item.address}}</div>
                  <div class="user">联系人：{{item.user}}</div>
                  <div class="start-time">发布时间：{{item.start_time}}</div>
                  <div class="phone">联系电话：{{item.phone}}</div>
                  <div class="end-time">截止时间：{{item.end_time}}</div>
                </div>
              </div>
            </div>
         </div>
      </div>
    </div>
    <!-- 资讯 -->
     <div class="s-storage-wrap container">
      <div class="s-storage-title">
        <div class="infomation"><span>平台资讯</span> <span>行业资讯</span></div>
        <div class="more">更多资讯 <i class="el-icon-arrow-right"></i></div>
      </div>
      <div class="s-infomation-warp">
        <div class="s-infomation-con">
          <img src="@/assets/img_035.png" alt="">
          <div class="title">西藏日喀则“萝卜小镇”喜获丰收</div>
          <div class="body"> 近日，被称为“萝卜小镇”的西藏日喀则市桑珠孜区边雄乡700亩 萝卜喜获丰收，亩产达5000斤以上</div>
        </div>
        <div class="s-infomation-right">
          <div class="top">
            <div class="img-warp"><img src="@/assets/ad.png" alt=""></div>
            <div class="body">
              <div class="title">财政部：继续支持农业保险发展 完善农业制度</div>
              <div class="con">中新网8月9日电 据财政部网站消息，7月30日，财政部、农业农村部、银保监会共同</div>
            </div>
          </div>
          <div class="infomation-list">
            <div class="infomation-item" v-for="(item,index) in infomation_items" :key="index">
              <div class="title">{{item.title}}</div><div class="date">{{item.date}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 友情伙伴 -->
    <div class="s-fr-warp">
      <div class="container">
        <div class="title">友情伙伴</div>
        <div class="imgs">
          <a href="javascript:;">
            <img src="@/assets/index1.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/index2.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/index3.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/index4.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/index5.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/index1.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/index2.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/index3.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/index4.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/index5.png" alt="">
          </a>
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
  name:"index",
  data() {
    return {
      visible: false,
      header: {
        isLogin: false,
        userName: "小明"
      },
      main_header: {},
      banner_items: ["找现货", "找期货", "找求购", "找仓储", "找物流"],
      banner_index: 20,
      form: {
        type: [],
        region: "",
        name: ""
      },
      pathName:"",
      tab_items: ["最新成交", "网站公告"],
      tab_acitve: 0,
      banner_tab_items: [
        {
          data: "苏杭农产品平台全新上新苏杭农产品平台全新上新"
        },
        {
          data: "苏杭农产品平台全新上新苏杭农产品平台全新上新"
        },
        {
          data: "苏杭农产品平台全新上新苏杭农产品平台全新上新"
        },
        {
          data: "苏杭农产品平台全新上新苏杭农产品平台全新上新"
        },
        {
          data: "苏杭农产品平台全新上新苏杭农产品平台全新上新"
        }
      ],
      tui_items: [
        {
          type: "猪肉区",
          img: "@/assets/img_032.png",
          name: "熟纯牛后腿",
          area: "蒙古",
          price: "57000"
        },
        {
          type: "猪肉区",
          img: "@/assets/img_032.png",
          name: "熟纯牛后腿",
          area: "蒙古",
          price: "57000"
        },
        {
          type: "猪肉区",
          img: "@/assets/img_032.png",
          name: "熟纯牛后腿",
          area: "蒙古",
          price: "57000"
        },
        {
          type: "猪肉区",
          img: "@/assets/img_032.png",
          name: "熟纯牛后腿",
          area: "蒙古",
          price: "57000"
        }
      ],
      tableData: [
        {
          name: "猪肝",
          country: "阿根廷",
          number: "13",
          address: "真空",
          no: "20吨",
          date: "2018-07-10"
        },
        {
          name: "猪肝",
          country: "阿根廷",
          number: "13",
          address: "真空",
          no: "20吨",
          date: "2018-07-10"
        }
      ],
      quotation_items: ["牛肉", "猪肉", "羊肉", "鸡肉"],
      quotation_index: 0,
      tools_items: ["货币兑换", "成本计算", "船运查询", "重量装换"],
      story_items: ["找仓储", "找物流"],
      storage_index: 0,
      storage_options: [
        {
          value: "公路"
        },
        {
          value: "铁路"
        }
      ],
      options:[{
        value: '选项1',
        label: '美元'
      },{
        value: '选项2',
        label: '人民币'
      }],
      value: "公路",
      value2:"美元",
      value3:"人民币",
      input: "",
      line_items: [
        {
          start_add: "中国，大连",
          end_add: "伊拉克，乌姆盖斯尔",
          type: "海运",
          price: "60",
          date: "2018-10-01"
        },
        {
          start_add: "中国，大连",
          end_add: "伊拉克，乌姆盖斯尔",
          type: "海运",
          price: "60",
          date: "2018-10-01"
        },
        {
          start_add: "中国，大连",
          end_add: "伊拉克，乌姆盖斯尔",
          type: "海运",
          price: "60",
          date: "2018-10-01"
        },
        {
          start_add: "中国，大连",
          end_add: "伊拉克，乌姆盖斯尔",
          type: "海运",
          price: "60",
          date: "2018-10-01"
        }
      ],
      storage_items: [
        {
          name: "奥玛物流仓储联盟",
          price: "1.2",
          address: "非洲 南非-德班",
          type: "普通",
          size: "10000"
        },
        {
          name: "奥玛物流仓储联盟",
          price: "1.2",
          address: "非洲 南非-德班",
          type: "普通",
          size: "10000"
        },
        {
          name: "奥玛物流仓储联盟",
          price: "1.2",
          address: "非洲 南非-德班",
          type: "普通",
          size: "10000"
        }
      ],
      auction_items: [
        {
          name: "长白山猪腿肉",
          price: "2300"
        },
        {
          name: "长白山猪腿肉",
          price: "2300"
        },
        {
          name: "长白山猪腿肉",
          price: "2300"
        },
        {
          name: "长白山猪腿肉",
          price: "2300"
        }
      ],
      tender_items: [
        {
          title: "标题",
          com: "南京肉品公司",
          user: "张三",
          phone: "13822222222",
          address: "江苏南京",
          start_time: "2018-06-25 09:00",
          end_time: "2018-06-25 09:00"
        },
        {
          title: "标题",
          com: "南京肉品公司",
          user: "张三",
          phone: "13822222222",
          address: "江苏南京",
          start_time: "2018-06-25 09:00",
          end_time: "2018-06-25 09:00"
        },
        {
          title: "标题",
          com: "南京肉品公司",
          user: "张三",
          phone: "13822222222",
          address: "江苏南京",
          start_time: "2018-06-25 09:00",
          end_time: "2018-06-25 09:00"
        },
        {
          title: "标题",
          com: "南京肉品公司",
          user: "张三",
          phone: "13822222222",
          address: "江苏南京",
          start_time: "2018-06-25 09:00",
          end_time: "2018-06-25 09:00"
        }
      ],
      infomation_items: [
        {
          title: "从“挖山”到“养山”——河北一个太行山乡镇的全域旅游经",
          date: "2018-07-21"
        },
        {
          title: "三部门将三大粮食作物纳入农业保险保险费补贴目录",
          date: "2018-07-21"
        },
        {
          title: "从“打工”到“上班”的太行山乡镇的全域旅游经",
          date: "2018-07-21"
        },
        {
          title: "三部门将三大粮食作物纳入农业保险保险费补贴目录",
          date: "2018-07-21"
        },
        {
          title: "从“挖山”到“养山”——河北一个太行山乡镇的全域旅游经",
          date: "2018-07-21"
        },
        {
          title: "从“打工”到“上班”的太行山乡镇的全域旅游经",
          date: "2018-07-21"
        }
      ]
    };
  },
  methods: {
    banner_show: function(index) {
      this.banner_index = index;
    },
    banner_hide: function(params) {
      this.banner_index = 20;
    },
    onSubmit: function() {},
    handleClick(index) {
      this.tab_acitve = index;
    },
    //行情切换
    quotation: function(index) {
      this.quotation_index = index;
    },
    //找仓储找物流
    storage: function(index) {
      this.storage_index = index;
    },
    getPathName:function (params) {
      this.pathName=params;
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
//首页轮播部分
.s-carousel-warp {
  position: relative;
  .s-banner-warp {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    .container {
      display: flex;
      height: 400px;
      align-items: center;
      justify-content: space-between;
      .s-banner-left {
        background-color: #f4f7fd;
        position: relative;
        .banner-left-item {
          padding: 0 12px;
          &.is-active {
            span.text {
              color: #046ab8;
            }
          }
          span.text {
            width: 76px;
            height: 72px;
            display: inline-block;
            text-align: center;
            cursor: pointer;
            line-height: 72px;
            border-bottom: 1px solid #e5e5e5;
          }

          &:nth-last-child(1) span.text {
            border: 0 none;
          }
        }
        .banner-items-from {
          position: absolute;
          top: 0;
          left: 100px;
          padding: 20px 30px;
          width: 470px;
          height: 324px;
          background-color: #ffffff;
          .title {
            border-bottom: 1px solid #e5e5e5;
            font-size: 18px;
            color: #046ab8;
            line-height: 40px;
          }
          .el-checkbox-group {
            .el-checkbox + .el-checkbox {
              margin-left: 50px;
            }
          }
          .submit-btn {
            width: 100%;
            background-color: #0168b7;
          }
        }
      }
      .s-banner-right {
        width: 240px;
        height: 364px;
        background-color: #ffffff;
        .userinfo-warp {
          padding: 20px 20px 0 20px;
          .top {
            display: flex;
            align-items: center;
          
          }
          .btns {
            text-align: center;
            margin: 15px 0;
            .el-button {
              width: 90px;
              height: 35px;
              padding: 0 20px;
            }
            .el-button--primary {
              background-color: #0168b7;
            }
            .el-button--default {
              border: 2px solid #0168b7;
              color: #0168b7;
            }
          }
          .user-logo {
            width: 60px;
            height: 60px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .s-wel-warp {
            margin-left: 10px;
            p {
              line-height: 20px;
            }
          }
        }
        .news-tabs-warp {
          position: relative;
          .tabs-title-warp {
            display: flex;
            border-bottom: 1px solid #e5e5e5;
            .tabs-item-tile {
              flex: 1;
              height: 30px;
              text-align: center;
              span {
                padding: 10px;
              }
              &.active {
                span {
                  color: #0168b7;
                  border-bottom: 2px solid #0168b7;
                }
              }
            }
            .banner-list {
              position: absolute;
              top: 30px;
              left: 0;
              padding: 20px;
              height: 130px;
              overflow: hidden;
              li {
                a {
                  color: #333333;
                  display: inline-block;
                  width: 196px;
                  height: 28px;
                  line-height: 28px;
                  position: relative;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  &::after {
                    content: "...";
                    font-weight: bold;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    padding: 0 20px 1px 45px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

//首页推荐
.s-tui-warp {
  display: flex;
  background-color: #ffffff;
  .s-tui-item {
    &:nth-child(2) {
      .title {
        background-color: #f35d48;
      }
    }
    &:nth-child(3) {
      .title {
        background-color: #ff8800;
      }
    }
    &:nth-child(4) {
      .title {
        background-color: #6d779d;
      }
    }
    &:nth-child(5) {
      .title {
        background-color: #1a83d3;
      }
      .tui-group::after {
        display: none;
      }
    }
  }

  .s-tui-item {
    flex: 1;
    width: 240px;
    height: 300px;
    margin-top: 40px;
    img.banner-img {
      width: 100%;
      height: 100%;
    }
    .tui-group {
      text-align: center;
      position: relative;
      .title {
        width: 65px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        margin: 0 auto;
        color: #ffffff;
      }
      .tui-goods-img {
        width: 160px;
        height: 140px;
        margin: 35px auto 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .tui-goods-name {
        font-size: 16px;
        color: #333333;
        line-height: 28px;
      }
      .tui-goods-area {
        line-height: 28px;
        color: #999999;
      }
      .tui-goods-price {
        color: #ff8800;
        span {
          font-size: 16px;
          line-height: 28px;
        }
      }
      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 250px;
        position: absolute;
        right: 0;
        top: 30px;
        background-color: #e5e5e5;
      }
    }
  }
}
//报盘
.s-offer-warp {
  display: flex;
  margin-top: 20px;
  background-color: #f9f9f9;
  .s-offer-left {
    background-color: #ffffff;
    margin-right: 10px;
    width: 840px;
    .offer-title {
      display: flex;
      line-height: 32px;
      justify-content: space-between;
      padding: 20px 10px 20px 0;
      background-color: #f9f9f9;
      .offer-name {
        padding-left: 15px;
        font-size: 24px;
        border-left: 4px solid #0168b7;
      }
      .offer-more {
        cursor: pointer;
        line-height: 24px;
        color: #999999;
      }
    }
    .el-table--border td {
      border-right: 0 none;
    }
  }
  .s-offer-right {
    width: 350px;
    background-color: #ffffff;
    .offer-title {
      display: flex;
      justify-content: space-between;
      padding: 20px 10px 20px 0;
      line-height: 32px;
      background-color: #f9f9f9;
      .offer-name {
        padding-left: 15px;
        font-size: 24px;
        border-left: 4px solid #0168b7;
      }
    }
    .s-quotation-warp {
      .s-quotation-title {
        padding: 10px 15px 0 15px;
        background-color: #0168b7;
        .s-quotation-tab {
          display: flex;
          .s-quotation-item {
            height: 38px;
            line-height: 38px;
            color: #ffffff;
            width: 70px;
            margin: 0 5px;
            text-align: center;
            &.active {
              background-color: #ffffff;
              color: #0168b7;
            }
          }
        }
      }
    }
  }
}
//期货报盘
.s-offer-warp.s-futures-warp {
  .s-offer-left,
  .s-offer-right {
    .offer-title {
      background-color: #f9f9f9;
      .offer-name {
        border-left-color: #0f9f53;
      }
    }
    .s-quotation-warp {
      .s-quotation-title {
        background-color: #0f9f53;
        .s-quotation-tab {
          .s-quotation-item {
            &.active {
              color: #0f9f53;
            }
          }
        }
      }
    }
  }
}
.s-quotatition-tools{
  padding: 30px;
  .currency-item{
    .top{
      padding: 15px;
      display: flex;
      border: 1px solid #e5e5e5;
      background-color: #f9f9f9;
      .left{
        width: 60px;
        height: 60px;
        background: url(../assets/img/currency_03.png);
      }
    }
    .con{
      display: flex;
      margin-top: 20px;
      .left{
        width: 85px;
        margin-right: 20px;
      }
    }
  }
}
.s-small-banner {
  margin-top: 40px;
  width: 1198px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
}
//仓储物流
.s-storage-wrap {
  .s-storage-title {
    padding-bottom: 20px;
    padding-top: 40px;
    background-color: #f9f9f9;
    span {
      border-left: 4px solid;
      padding-left: 15px;
      font-size: 24px;
    }
  }
  .s-storage-con {
    display: flex;
    .s-menu-item {
      width: 240px;
      height: 400px;
    }
    .s-menu-con {
      width: 470px;
      margin: 0 10px;
    }
    .s-menu-hot {
      width: 470px;
    }
  }
}

.s-storage-wrap {
  .s-storage-title {
    display: flex;
    justify-content: space-between;
    span {
      border-left: 4px solid #0168b7;
    }
    .infomation {
      span {
        font-weight: 600;
        color: #0168b7;
        border: 0 none;
        padding-right: 20px;
        padding-left: 0;
        &:nth-child(2) {
          font-weight: normal;
          color: #999999;
          padding-left: 20px;
          border-left: 1px solid #ccc;
        }
      }
    }
    .news {
      color: #999999;
      line-height: 30px;
      i {
        background-color: #0168b7;
        font-style: normal;
        color: #fff;
        padding: 2px;
        font-size: 12px;
        text-align: center;
        margin-right: 10px;
      }
    }
    .more {
      font-size: 14px;
      color: #999999;
      line-height: 30px;
      cursor: pointer;
      i {
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
  .s-storage-con {
    .s-menu-item {
      background: url("../assets/storage_031.png") center center no-repeat;
      .menu-tabs {
        margin: 150px auto 0;
        width: 190px;
        height: 185px;
        .menu-tabs-title {
          display: flex;
          background-color: #ffffff;
          .menu-tabs-item {
            width: 50px;
            text-align: center;
            margin: 0 20px;
            height: 40px;
            line-height: 40px;
            &.active {
              color: #0168b7;
              border-bottom: 2px solid #0168b7;
            }
          }
        }
        .menu-tabs-con {
          background: #ffffff;
          & > .el-input > .el-input__inner {
            border: 0 none;
          }
        }
        .search-btn {
          width: 190px;
          margin-top: 22px;
        }
      }
    }
    .s-menu-con,
    .s-menu-hot {
      width: 470px;
      height: 400px;
      overflow: hidden;
      margin: 0 10px;
      background-color: #ffffff;
      .menu-con-title {
        padding: 10px 0;
        margin: 0 10px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #d8d8d8;
        .title-line {
          font-size: 20px;
          font-weight: 700;
          color: #555555;
        }
        .title-more {
          cursor: pointer;
          color: #999999;
          line-height: 26px;
        }
      } 
    }
    .s-menu-con {
      .menu-line-item {
        margin: 0 10px;
        padding: 20px 0;
        display: flex;
        border-bottom: 1px dashed #e5e5e5;
        &:nth-last-child(1) {
          border-bottom: 0 none;
        }
        .line-item-address {
          display: flex;
          width: 180px;
          .line {
            width: 9px;
            height: 45px;
            background: url("../assets/img/time-line.png") center center
              no-repeat;
          }
          .address {
            line-height: 12px;
            margin-left: 10px;
            .start-add {
              margin-bottom: 24px;
            }
          }
        }
        .line-item-type {
          width: 170px;
          color: #999999;
          text-align: center;
          line-height: 48px;
        }
        .line-item-price {
          line-height: 24px;
          .price {
            color: #ff8200;
            font-size: 16px;
          }
          .date {
            color: #999999;
          }
        }
      }
    }
    .s-menu-hot {
      .storage-item {
        padding: 19px 0;
        margin: 0 10px;
        display: flex;
        border-bottom: 1px dashed #e5e5e5;
        .storage-item-info {
          display: flex;
          width: 295px;
          .img-warp {
            width: 110px;
            height: 80px;
            img {
              width: 100%;
              height: 100%;
              vertical-align: top;
            }
          }
          .info-warp {
            margin-left: 10px;
            line-height: 24px;
            .price {
              color: #ff8800;
            }
            .add {
              color: #999999;
            }
          }
        }
        .storage-size-info {
          line-height: 24px;
          color: #999999;
          .type-col {
            color: #333333;
          }
          .size,
          .type {
            display: flex;
            .size-col {
              color: #ff8800;
            }
          }
        }
      }
    }
  }
}
//拍卖
.s-auction-item {
  width: 240px;
  height: 400px;
  background: url("../assets/storage_032.png") center center no-repeat;
}
.auction-list,
.tender-list {
  display: flex;
  flex-wrap: wrap;
  width: 950px;
  .auction-item,
  .tender-item {
    display: flex;
    width: 465px;
    height: 195px;
    margin-left: 10px;
    margin-bottom: 10px;
    background-color: #ffffff;
    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
    .auction-img {
      display: flex;
      margin: 0 25px 0 15px;
      align-items: center;
      img {
        width: 145px;
        height: 145px;
      }
    }
    .auction-con {
      margin-top: 40px;
      .name {
        color: #333333;
        font-size: 16px;
        line-height: 24px;
      }
      .price {
        color: #999999;
        line-height: 24px;
        font-size: 12px;
        .price-col {
          font-size: 14px;
          color: #333333;
        }
      }
      .date {
        color: #999999;
        margin-top: 30px;
        .hour {
          display: inline-block;
          color: #ff8800;
          font-size: 24px;
        }
      }
    }
  }
}
//招标
.s-tender-item {
  width: 240px;
  height: 400px;
  background: url("../assets/storage_033.png") center center no-repeat;
}
.tender-list {
  .tender-item {
    .item-con {
      color: #999999;
      padding: 20px;
      .title {
        color: #333333;
        margin-bottom: 10px;
        font-size: 16px;
        width: 280px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .tip {
          display: inline-block;
          font-size: 12px;
          background-color: #ff8800;
          text-align: center;
          color: #fff;
          padding: 2px 5px;
          border-radius: 2px;
        }
      }
      .date {
        .hour {
          display: inline-block;
          color: #ff8800;
          font-size: 24px;
        }
      }
      .tender-con {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        div {
          width: 200px;
          line-height: 28px;
        }
      }
    }
  }
}
//行业资讯
.s-infomation-warp {
  display: flex;
  background-color: #ffffff;
  .s-infomation-con {
    padding: 20px;
    img {
      width: 400px;
      height: 270px;
    }
    .title {
      margin: 10px 0;
      font-size: 18px;
      color: #ff8800;
      width: 400px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .body {
      width: 400px;
      height: 38px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 14px;
      flex-wrap: wrap;
    }
  }
  .s-infomation-right {
    padding: 20px;
    .top {
      display: flex;
      padding-bottom: 20px;
      border-bottom: 1px solid #e5e5e5;
      .img-warp {
        margin-right: 16px;
        width: 160px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .body {
        .title {
          margin: 10px 0;
          font-size: 18px;
          color: #ff8800;
          width: 540px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .con {
          height: 38px;
          width: 540px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 14px;
          flex-wrap: wrap;
        }
      }
    }
    .infomation-list {
      padding-top: 10px;
      .infomation-item {
        display: flex;
        justify-content: space-between;
        line-height: 36px;
        .title {
          padding-left: 20px;
          position: relative;
          &::before {
            content: "";
            display: block;
            width: 4px;
            height: 4px;
            background-color: #666666;
            position: absolute;
            left: 0;
            top: 16px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
//友情伙伴
.s-fr-warp {
  margin-top: 60px;
  padding: 40px 40px 0 40px;
  background-color: #ffffff;
  .container {
    width: 1200px;
  }
  .title {
    font-size: 24px;
    font-weight: 700;
    padding-left: 15px;
    line-height: 30px;
    margin-bottom: 40px;
    border-left: 4px solid #0168b7;
  }
  .imgs {
    height: 230px;
    a {
      width: 240px;
      height: 60px;
      float: left;
      margin-bottom: 60px;
      img {
        vertical-align: top;
      }
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__indicator {
  &.is-active {
    .el-carousel__button {
      background-color: #ffffff;
    }
  }
  .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba($color: #000000, $alpha: 0.1);
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__arrow.el-carousel__arrow--left {
  display: none;
}
.el-carousel__arrow.el-carousel__arrow--right {
  display: none;
}
</style>
