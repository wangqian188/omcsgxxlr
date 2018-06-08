/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import App from './app.vue';
import $ from 'jquery';
import MintUI from 'mint-ui';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import search from './routers/search.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);

//Vue.prototype.$prefix = "http://47.92.145.21:81" //图片前缀（47的图片服务器）
Vue.prototype.$prefix = "http://116.62.68.26:80" //图片前缀（116的图片服务器）

// 测试环境
//Vue.prototype.$api = "http://192.168.0.222:8080" //api地址

// 生产环境
//Vue.prototype.$api = "http://omc.urskongjian.com" //api地址线上
Vue.prototype.$api = "http://116.62.68.26:8080" //api地址116的服务地址
//Vue.prototype.$api = "http://yhcms.tunnel.qydev.com" //api地址本地

Vue.config.debug = true;// 开启debug模式

var router = new VueRouter({
  mode: "hash",
  hashbang: false,
  routes: [
    {
      path: '/',
      component: require('./routers/loupan_list.vue'),
      /*component: require('./routers/fang_photo.vue')*/
    },
    {
      path: '/test',
      component: require('./routers/test.vue')
      /*component: require('./routers/fang_photo.vue')*/
    },
    {
      path: '/test1',
      component: require('./routers/test1.vue')
    },
    {
      path: '/yixing_genjin',//意向业主跟进列表
      component: require('./routers/yixing_genjin.vue')
    },
    {
        path: '/genjingongdan/:fyyzid/:fyid',//意向业主跟进工单
        component: require('./routers/genjingongdan.vue')
    },
    {
      path: '/tianxiefenjin/:fyyzid/:fyid',//填写跟进
      component: require('./routers/tianxiefenjin.vue')
    },
    {
      path: '/genjinjilu/:fyyzid/:fyid',//跟进记录
      component: require('./routers/genjinjilu.vue')
    },
    {
      path: '/index',
      component: require('./routers/loupan_list.vue'),
        meta: {
            keepAlive: true
        }
      /*component: require('./routers/fang_photo.vue')*/
    },
    {
      path: '/fang_fenxi/:lpid',
      component: require('./routers/fang_fenxi.vue')
    },

    {
      path: '/detail',
      component: require('./routers/detail.vue')
    },
    {
      path: '/order',
      component: require('./routers/order.vue')
    },
    {
      path: '/loupan_basic/:lpid',
      component: require('./routers/loupan_basic.vue')
    },
    {
        path: '/loupan_property_wlyyxx/:lpid',
        component: require('./routers/loupan_property_wlyyxx.vue')
    },
    {
        path: '/loupan_property_dhyyxx/:lpid',
        component: require('./routers/loupan_property_dhyyxx.vue')
    },
    {
        path: '/loupan_property_wyxxsee/:lpid/:val',
        component: require('./routers/loupan_property_wyxxsee.vue')
    },

    {
        path: '/loupan_property_wyxx/:lpid',
        component: require('./routers/loupan_property_wyxx.vue')
    },
    {
      path: '/loupan_households/:lpid',
      component: require('./routers/loupan_households.vue')
    },
    {
      path: '/loupan_property/:lpid',
      component: require('./routers/loupan_property.vue')
    },
    {
      path: '/loupan_area/:lpid',
      component: require('./routers/loupan_area.vue')
    },
    {
      path: '/loupan_parking/:lpid',
      component: require('./routers/loupan_parking.vue')
    },
    {
      path: '/loupan_image/:lpid',
      component: require('./routers/loupan_image.vue')
    },
    {
      path: '/loupan_analyse/:lpid',
      component: require('./routers/loupan_analyse.vue')
    },
    {
      path: '/zuodong_list/:lpid',
      component: require('./routers/zuodong_list.vue')
    },
    {
        path: '/loupan_pro',
        component: require('./routers/lpwuxx.vue')
    },
    {
      path: '/fang_list/:lpid',
      component: require('./routers/fang_list.vue')
    },
    {
      path: '/zuodong_basic/:lpid/:zdid',
      component: require('./routers/zuodong_basic.vue')
    },
    {
      path: '/zuodong_elevator/:zdid',
      component: require('./routers/zuodong_elevator.vue')
    },
    {
      path: '/zuodong_area/:zdid',
      component: require('./routers/zuodong_area.vue')
    },
    {
      path: '/zuodong_households/:zdid',
      component: require('./routers/zuodong_households.vue')
    },
    {
      path: '/zuodong_price/:zdid',
      component: require('./routers/zuodong_price.vue')
    },
    {
      path: '/zuodong_image/:zdid',
      component: require('./routers/zuodong_image.vue')
    },
    {
      path: '/zuodong_rent/:zdid',
      component: require('./routers/zuodong_rent.vue')
    },
    {
      path: '/zuodong_property/:zdid',
      component: require('./routers/zuodong_property.vue')
    },
   /* {
      path: '/fang_list/:lpid/:zdid',
      component: require('./routers/fang_list.vue')
    },*/
    {
        path: '/fang_list/:lpid/:zdid',
        component: require('./routers/fang_list.vue')
    },
    {
        path: '/fang_list/:lpid',
        component: require('./routers/fang_list.vue')
    },
    {
        path: '/fang_basic/:lpid/:zdid/:fyid',
        component: require('./routers/fang_basic.vue')
    },
    {
        path: '/fang_genjin/:lpid/:fyid',
        component: require('./routers/fang_genjin.vue')
    },
    {
      path: '/fang_shouzbg/:fyid',
      component: require('./routers/fang_shouzbg.vue')
    },
    {
        path: '/fang_basic/:lpid/:fyid',
        component: require('./routers/fang_basic.vue')
    },
    /*{
      path: '/fang_basic/:lpid/:fyid',
      component: require('./routers/fang_basic.vue')
    },*/
    {
      path: '/fang_struct/:fyid',
      component: require('./routers/fang_struct.vue')
    },
    {
      path: '/fang_owner/:fyid',
      component: require('./routers/fang_owner.vue')
    },
    {
      path: '/fang_owner/add/:fyid',
      component: require('./routers/fang_add_owner.vue')
    },
    {
      path: '/fang_owner/edit/:yzid',
      component: require('./routers/fang_edit_owner.vue')
    },
    {
        path: '/fang_owner/see/:yzid',
        component: require('./routers/fang_see_owner.vue')
    },
    {
      path: '/fang_agenter/:fyid',
      component: require('./routers/fang_agenter.vue')
    },
    {
      path: '/fang_agenter/add/:fyid',
      component: require('./routers/fang_add_agent.vue')
    },
    {
      path: '/fang_agenter/edit/:dlid',
      component: require('./routers/fang_edit_agent.vue')
    },
    {
      path: '/fang_agenter/see/:dlid',
      component: require('./routers/fang_see_agent.vue')
    },
    {
      path: '/fang_renter/:fyid',
      component: require('./routers/fang_renter.vue')
    },
    {
      path: '/fang_renter/add/:fyid',
      component: require('./routers/fang_add_rent.vue')
    },
    {
      path: '/fang_renter/edit/:zhid/:fyid',
      component: require('./routers/fang_edit_rent.vue')
    },
    {
      path: '/fang_renter/see/:zhid/:fyid',
      component: require('./routers/fang_see_rent.vue')
    },
    {
      path: '/fang_image/:fyid',
      component: require('./routers/fang_image.vue')
    },
    {
      path: '/fang_analyse/:fyid',
      component: require('./routers/fang_analyse.vue')
    },
    {
      path: '/fang_decor/:fyid',
      component: require('./routers/fang_decor.vue')
    },
    {
        path: '/filter',
        component: require('./routers/search.vue'),
    },
    {
      path: '/fang_reg/:fyid',
      component: require('./routers/fang_reg.vue')
    },
    /*{
      path: '/fang_photo/',
      component: require('./routers/fang_photo.vue')
    },*/
    {
      path: '/fang_detail/',
      component: require('./routers/fang_detail.vue')
    },
    {
      path: '/modify_pwd',
      component: require('./routers/modify_pwd.vue')
    },
    {
      path: '/login',
      component: require('./routers/login.vue')
    },
    {
      path: '/search',
      component: require('./routers/search.vue')
    },

    {
      path: '*',
      component: require('./routers/login.vue')
    },
    {
      path: '/uphtm',//系统跟新维护中的页面
      component: require('./routers/uphtm.vue')
    }
  ]
});



//判断user的用户名和密码以及它的有效时间
/*router.beforeEach(function(to, from, next){
    const user = JSON.parse(localStorage.getItem('login'));
  if (!user && to.path != '/login') {
        next({ path: '/login' });
    }else{
      if(user!=null) {
          const time = user.time == null ? 0 : user.time, now = (new Date).getMilliseconds(), delta = now - time;
          if (delta > 86400 * 3) {
              next({path: '/login'});
          } else {
              const user22 = JSON.parse(localStorage.getItem('cook'));
              $.post("http://116.62.68.26:8080/yhcms/web/wxqx/getSgLogin.do", {
                      "foreEndType": 2,
                      "code": "300000045",
                      "cookie": user22.sjs,
                  },
                  function (data) {
                      if (data.success) {
                          next();
                      } else {
                          if (data.userzt == 2) {
                              Toast({
                                  message: '此用户已被删除或被禁用，请联系管理员！',
                                  position: 'bottom'
                              });
                          } else {
                              next({path: '/login'});
                          }
                      }
                      //alert(data); // John
                  }, "json");
             this.$http.post(
             this.$api + "/yhcms/web/wxqx/getXsLogin.do",
             {
             "foreEndType": 2,
             "code": "300000045",
             "cookie":user22.sjs,
             }
             ).then(function (res) {

             }, function (res) {
             Indicator.close();
             Toast({
             message: '登录失败! 请稍候再试',
             position: 'bottom'
             });
             });
             /!* const msg = {"user": name,"time":(new Date).getMilliseconds()};
             localStorage.setItem('login', JSON.stringify(msg));*!/
             next();
          }
      }else{
          next();
      }
    }
});*/



//判断user的用户名和密码以及它的有效时间
router.beforeEach(function(to, from, next){
    const user = JSON.parse(localStorage.getItem('login'));
    if (!user && to.path != '/login') {
        next({ path: '/login' });
    }else  if (!user && to.path == '/login') {
        next();
    }else  if (user && to.path == '/login') {
        next();
    }
    else{
        if(user!=null) {
            const time = user.time == null ? 0 : user.time, now = (new Date).getMilliseconds(), delta = now - time;
            if (delta > 86400 * 30) {
                next({path: '/login'});
            } else {
                const user22 = JSON.parse(localStorage.getItem('cook'));
                if(user22 != null){
                    next();
                }else{
                    next({path: '/login'});
                }
                $.post("http://116.62.68.26:8080/yhcms/web/wxqx/getSgLogin.do", {
                        "foreEndType": 2,
                        "code": "300000045",
                        "cookie": user22.sjs,
                    },
                    function (data) {
                            next();
                            if (data.success) {
                        } else {
                            if (data.userzt == 2) {
                                Toast({
                                    message: '此用户已被删除或被禁用，请联系管理员！',
                                    position: 'bottom'
                                });
                            } else {
                                next({path: '/login'});
                            }
                        }
                        //alert(data); // John
                    }, "json").catch(function (error) {
                    window.location.href = "http://omc.urskongjian.com/error/uphtm.html";
                });
            }
        }else{
            next({path: '/login'});
            //next();
        }
    }
});

new Vue({
  el: '#app',
  router: router,
  render: function (h) {
    return h(App)
  }
});
