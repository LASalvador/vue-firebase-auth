import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

router.beforeEach((to, from,next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else if(!requiresAuth && currentUser) next('home');
  else next();
});


var firebaseConfig = require('./firebase');
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let app = ''

firebase.auth().onAuthStateChanged( () => {
  if(!app) {
    app = new Vue({
      render: h => h(App),
      router: router
    }).$mount('#app')
  }
});

