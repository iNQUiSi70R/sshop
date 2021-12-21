import Vue from 'vue'
import Router from 'vue-router'
import Homepage from "@/components/HomePage"
import Catalogpage from "@/components/CatalogPage"

Vue.use(Router)

export default new Router({
    router: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
        {
            path: '/catalog',
            name: 'Catalogpage',
            component: Catalogpage
        }
    ]


})