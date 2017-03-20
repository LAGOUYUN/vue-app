import Promise from 'es6-promise'
import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'

import App from './App'
import router from './router'
import store from './store'

Vue.use(VueRouter)

// promise 兼容
Promise.polyfill()
    // 移动设备 点击兼容
FastClick.attach(document.body)

Vue.config.productionTip = false

// 注册木块

store.registerModule('home', {
    state: {
        direction: ''
    },
    mutations: {
        updateDirection(state, payload) {
            state.direction = payload.direction
        }
    }
})


// 路由设置

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach((to, from, next) => {
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)

    if (toIndex) {
        if (toIndex > fromIndex || !fromIndex || (toIndex === '0' &&
                fromIndex === '0')) {
            store.commit('updateDirection', {
                direction: 'forward'
            })
        } else {
            store.commit('updateDirection', {
                direction: 'reverse'
            })
        }
    } else {
        ++historyCount
        history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
        store.commit('updateDirection', {
            direction: 'forward'
        })
    }

    if (/\/http/.test(to.path)) {
        let url = to.path.split('http')[1]
        window.location.href = `http${url}`
    } else {
        next()
    }

})

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
