import { createWebHistory, createRouter } from "vue-router";
import MainPage from '../Components/MainPage.vue';
import DetailsPage from '../Components/DetailsPage.vue'
const routes = [{
        path: "/",
        name: "Home",
        component: MainPage,
    },
    {
        path: "/details/:gameId",
        name: "Details",
        component: DetailsPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;