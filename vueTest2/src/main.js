import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

Vue.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

const First = {
  template: '<div><h2>我是第一个子页面</h2></div>'
}
import secondcomponent from './component/secondcomponent';

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:'/first',
      component: First
    },
    {
      path:'/second',
      component:secondcomponent
    }
  ]
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
