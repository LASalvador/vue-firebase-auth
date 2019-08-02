import Login from './components/Login'
import Home from './components/Home'
import SignIn from './components/SignIn'

export default [
    { path:'/login' , component: Login},
    { path:'/' , component: Home},
    { path:'/registrar' , component: SignIn },
]