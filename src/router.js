import Foo from "./components/Foo";
import Bar from "./components/Bar";
import Home from "./components/Home";
import VueRouter from "vue-router";

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: Home}
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export {router}
