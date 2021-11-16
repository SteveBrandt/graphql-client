import Vue from "vue";
import App from "./App";
import {router} from "./router";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import VueRouter from 'vue-router'

Vue.config.productionTip = false;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const apolloProvider = new VueApollo({
  defaultClient: client,
  defaultOptions: {
    $loadingKey: 'loading'
  }
});

Vue.use(VueApollo);
Vue.use(VueRouter)

new Vue({
  el: "#main",
  provide: apolloProvider.provide(),
  router,
  render: h => h(App)
});

