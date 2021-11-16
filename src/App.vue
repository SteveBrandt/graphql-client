<template>
  <div id="app" class="center avenir tc">

    <nav class="pa3 pa4-ns">
      <router-link class="link dim black b f6 f5-ns dib mr3" to="/" title="Home">graphql-client</router-link>
      <router-link class="link dim gray    f6 f5-ns dib mr3" to="/foo" title="Foo">Foo</router-link>
      <router-link class="link dim gray    f6 f5-ns dib mr3" to="/bar" title="Bar">Bar</router-link>
    </nav>

    <div>
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
