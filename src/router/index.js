import Vue from 'vue'
import Router from 'vue-router'
import index from "@/pages/index"; //首页
import login from "@/pages/login"; //登录页
import retrieve from "@/pages/retrieve";//找回密码
import register from "@/pages/register";//注册
import offerList from "@/pages/offer/offerList"; //
import wantBuy from "@/pages/offer/offerList"; //
import shop from '@/pages/offer/shop'; //商家店铺
import goodsDetail from "@/pages/offer/goodsDetail";//商品详情
import pay from '@/pages/offer/pay'; //支付订单
import placeOrder from "@/pages/offer/placeOrder"; //提交订单
import detail from '@/pages/storage/detail';
import list from '@/pages/storage/list'; 
import logistics from "@/pages/storage/list"; //物流
import storage from "@/pages/storage/list"; //仓储
import customs from "@/pages/storage/list"; //报关
import agent from "@/pages/storage/list"; //代理
import finance from "@/pages/storage/finance";
import insurance from "@/pages/storage/insurance";
import news from "@/pages/storage/news";
import newsList from "@/pages/storage/newsList";
import tender from '@/pages/storage/tender';

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      //首页
      path: "/",
      name: "index",
      component: index
    },
    {
      //首页
      path: "/index",
      name: "index",
      component: index
    },
    {
      //登录页
      path: "/login",
      name: "login",
      component: login
    },
    {
      //找回密码
      path: "/retrieve",
      name: "retrieve",
      component: retrieve
    },
    {
      //注册
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/offer/offerList",
      name: "offerList",
      component: offerList
    },
    {
      path: "/offer/wantBuy",
      name: "wantBuy",
      component: wantBuy
    },
    {
      path: "/offer/shop",
      name: "shop",
      component: shop
    },
    {
      path: "/offer/goodsDetail",
      name: "goodsDetail",
      component: goodsDetail
    },
    {
      //支付
      path: "/offer/pay",
      name: "pay",
      component: pay
    },
    {
      //提交订单
      path: "/offer/placeOrder",
      name: "placeOrder",
      component: placeOrder
    },
    {
      path: "/storage/detail",
      name: "detail",
      component: detail
    },
    {
      path: "/storage/list",
      name: "list",
      component: list
    },
    {
      //物流
      path: "/logistics",
      name: "logistics",
      component: logistics
    },
    {
      //仓储
      path: "/storage",
      name: "storage",
      component: storage
    },
    {
      //报关
      path: "/customs",
      name: "customs",
      component: customs
    },
    {
      //代理
      path: "/agent",
      name: "agent",
      component: agent
    },
    {
      //金融
      path: "/finance",
      name: "finance",
      component: finance
    },
    {
      //保险
      path: "/insurance",
      name: "insurance",
      component: insurance
    },
    {
      path: "/storage/news",
      name: "news",
      component: news
    },
    {
      path: "/storage/newsList",
      name: "newsList",
      component: newsList
    },
    {
      path: "/storage/tender",
      name: "tender",
      component: tender
    }
  ]
});
