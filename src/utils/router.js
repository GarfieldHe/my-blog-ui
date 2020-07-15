import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/index',
        name: 'index',
        component: () => import('@/pages/Index')
    }, {
        path: '/blog',
        name: 'blog-list',
        component: () => import('@/pages/BlogList')
    }, {
        path: '/blog/:id',
        name: 'blog',
        component: () => import('@/pages/Blog')
    }, {
        path: '/lifelog',
        name: 'lifelog',
        component: () => import('@/pages/LifeLog')
    }, {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/About')
    }, {
        path: '/new',
        name: 'new',
        component: () => import('@/pages/NewBlog')
    }, {
        path: '*',
        name: 'undefine',
        component: () => import('@/pages/Undefine')
    }],
    // scrollBehavior (to, from, savedPosition) {
    //     // return 期望滚动到哪个的位置
    //     console.log(from.fullPath, to.fullPath, savedPosition.x)
    // }
})
router.beforeEach((from, to, next) => {
    console.log("路由守卫：", from.fullPath, to.fullPath, next.length)
    next();
})
export default router