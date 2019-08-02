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


var firebaseConfig = {
  apiKey: "AIzaSyAAMO0TMcmXCPM3JVRrdiUb2b7epc7KoQo",
  authDomain: "vue-firebase-e8c5d.firebaseapp.com",
  databaseURL: "https://vue-firebase-e8c5d.firebaseio.com",
  projectId: "vue-firebase-e8c5d",
  storageBucket: "",
  messagingSenderId: "803030173782",
  appId: "1:803030173782:web:cdc73778935b2eb0"
};
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

