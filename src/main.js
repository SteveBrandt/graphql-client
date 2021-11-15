import Vue from "vue";
import App from "./App";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

Vue.use(VueApollo);

new Vue({
  el: "#app",
  components: { App },
  provide: apolloProvider.provide(),
  template: "<App/>"
});
