
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/check_tiku/check_tiku","pages/collect_question/collect_question","pages/my_kaoshi/my_kaoshi","pages/shuati-info/shuati-info","pages/check_class/check_class","pages/famous_teacher/famous_teacher","pages/course_class_list/course_class_list","pages/about/banner","pages/course/course","pages/msg/msg","pages/msg/msglist","pages/search/search","pages/pinglun/pinglun","pages/live-more/live-more","pages/coursemore/coursemore","pages/content-more/content-more","pages/mineExtension/mineExtension","pages/renzheng/renzheng","pages/mineExtension/extension_poster","pages/mineExtension/extension_user","pages/mineExtension/extensionuser","pages/kejian/kejian","pages/shop-car/shop-car","pages/pay/pay","pages/address/address","pages/address/add-address","pages/my/my","pages/edit_cv/edit_cv","pages/attenteacher/attenteacher","pages/about/about","pages/setting/setting","pages/yijian-fankui/yijian-fankui","pages/jifen/jifen","pages/myclass/myclass","pages/lianxi-we/lianxi-we","pages/hasbuy/hasbuy","pages/teacher/teacher","pages/moreteacher/moreteacher","pages/teacherinfo/teacherinfo","pages/mystu/mystu","pages/login/login","pages/forget_pass/forget_pass","pages/reg/reg","pages/login/xieyi","pages/edit_user/edit_user","packageB/pages/live-info/testplay","packageB/pages/live-info/android","packageB/pages/content-detail/content-detail","packageB/pages/live-info/live-infoplay","packageB/pages/live_course_info/live_course_info","packageB/pages/content-info/content-info","packageB/pages/courseinfo/courseinfo"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#323232","selectedColor":"#2C62EF","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabbar-wechat/index_tabbar-wechat.png","iconWidth":"16px","selectedIconPath":"static/tabbar-wechat/index_tabbar_selected-wechat.png"},{"pagePath":"pages/course/course","text":"我的课程","iconPath":"static/tabbar-wechat/my_course_-wechat.png","selectedIconPath":"static/tabbar-wechat/my_course_selected-wechat.png"},{"pagePath":"pages/msg/msg","text":"消息","iconPath":"static/tabbar-wechat/message_-wechat.png","selectedIconPath":"static/tabbar-wechat/message-selected-wechat.png"},{"pagePath":"pages/my/my","text":"个人中心","iconPath":"static/tabbar-wechat/my_tabbar_-wechat.png","selectedIconPath":"static/tabbar-wechat/my_tabbar_selected-wechat.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"万岳机构版","compilerVersion":"2.9.8","subPackages":[{"root":"packageB"}],"entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/check_tiku/check_tiku","meta":{},"window":{"navigationBarTitleText":"选择刷题题库"}},{"path":"/pages/collect_question/collect_question","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/my_kaoshi/my_kaoshi","meta":{},"window":{"navigationBarTitleText":"考试详情"}},{"path":"/pages/shuati-info/shuati-info","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/check_class/check_class","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/famous_teacher/famous_teacher","meta":{},"window":{"navigationBarTitleText":"名师名课"}},{"path":"/pages/course_class_list/course_class_list","meta":{},"window":{}},{"path":"/pages/about/banner","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/course/course","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/msg/msg","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/msg/msglist","meta":{},"window":{}},{"path":"/pages/search/search","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/pinglun/pinglun","meta":{},"window":{"navigationBarTitleText":"评价"}},{"path":"/pages/live-more/live-more","meta":{},"window":{"navigationBarTitleText":"直播课堂"}},{"path":"/pages/coursemore/coursemore","meta":{},"window":{"navigationBarTitleText":"好课推荐"}},{"path":"/pages/content-more/content-more","meta":{},"window":{"navigationBarTitleText":"精选内容"}},{"path":"/pages/mineExtension/mineExtension","meta":{},"window":{"navigationBarTitleText":"推广中心"}},{"path":"/pages/renzheng/renzheng","meta":{},"window":{"navigationBarTitleText":"认证推广员"}},{"path":"/pages/mineExtension/extension_poster","meta":{},"window":{"navigationBarTitleText":"海报推广"}},{"path":"/pages/mineExtension/extension_user","meta":{},"window":{"navigationBarTitleText":"推广用户"}},{"path":"/pages/mineExtension/extensionuser","meta":{},"window":{"navigationBarTitleText":"海报分享"}},{"path":"/pages/kejian/kejian","meta":{},"window":{"navigationBarTitleText":"我的课件"}},{"path":"/pages/shop-car/shop-car","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"购物车"}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarTitleText":"付款"}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"地址"}},{"path":"/pages/address/add-address","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"新建地址"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/edit_cv/edit_cv","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/attenteacher/attenteacher","meta":{},"window":{"navigationBarTitleText":"关注讲师"}},{"path":"/pages/about/about","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/setting/setting","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/yijian-fankui/yijian-fankui","meta":{},"window":{"navigationBarTitleText":"意见反馈"}},{"path":"/pages/jifen/jifen","meta":{},"window":{"navigationBarTitleText":"我的积分"}},{"path":"/pages/myclass/myclass","meta":{},"window":{"navigationBarTitleText":"我的课程"}},{"path":"/pages/lianxi-we/lianxi-we","meta":{},"window":{"navigationBarTitleText":"联系我们"}},{"path":"/pages/hasbuy/hasbuy","meta":{},"window":{"navigationBarTitleText":"已购买"}},{"path":"/pages/teacher/teacher","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/moreteacher/moreteacher","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/teacherinfo/teacherinfo","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/mystu/mystu","meta":{},"window":{"navigationBarTitleText":"我的学员"}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/forget_pass/forget_pass","meta":{},"window":{}},{"path":"/pages/reg/reg","meta":{},"window":{}},{"path":"/pages/login/xieyi","meta":{},"window":{}},{"path":"/pages/edit_user/edit_user","meta":{},"window":{"navigationBarTitleText":"编辑资料"}},{"path":"/packageB/pages/live-info/testplay","meta":{"isNVue":true},"window":{}},{"path":"/packageB/pages/live-info/android","meta":{"isNVue":true},"window":{}},{"path":"/packageB/pages/content-detail/content-detail","meta":{},"window":{"navigationBarTitleText":"内容详情"}},{"path":"/packageB/pages/live-info/live-infoplay","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/packageB/pages/live_course_info/live_course_info","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false,"navigationBarTitleText":"直播详情"}},{"path":"/packageB/pages/content-info/content-info","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"内容详情"}},{"path":"/packageB/pages/courseinfo/courseinfo","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"课程详情"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
