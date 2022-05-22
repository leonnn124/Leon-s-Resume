import { createRouter, createWebHistory } from "vue-router";
import MyResume from "../views/MyResume.vue";
import MessageBoard from "../views/MessageBoard.vue";
import Login from "../views/LoginPage.vue";
import SignIn from "../views/SignInPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MyResume,
  },
  {
    path: "/board",
    name: "board",
    component: MessageBoard,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
