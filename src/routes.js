import Login from './components/Login'
import Home from './components/Home'
import SignIn from './components/SignIn'

export default [
    { 
        path:'*', 
        redirect: '/login'
    },
    { 
        path:'/' , 
        redirect: '/login' 
    },
    { 
        path:'/login' ,
        name: 'login',
        component: Login
    },
    { 
        path:'/registrar' , 
        name: 'registrar',
        component: SignIn 
    },
    { 
        path:'/home' , 
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
]