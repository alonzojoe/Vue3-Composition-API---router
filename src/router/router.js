import { createRouter,createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue"
import Car from "../views/CarView.vue"
import About from "../views/AboutView.vue"
import Contact from "../views/ContactView.vue"
import NotFound from "../views/404View.vue"
import CarInfo from "../views/CarPreview.vue"
import CarDealer from "../views/CarDealer.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/cars",
            name: "cars",
            component: Car,
        },
        {
            path: "/cars/:id",
            name: "carpreview",
            component: CarInfo,
            children: [
                {
                    path: "contact",
                    component: CarDealer
                }
            ]
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/:catchall(.*)*",
            component: NotFound
        }
    ]
})

export default router