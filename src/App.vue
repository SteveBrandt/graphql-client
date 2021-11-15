<template>
  <div id="app">
    <h1 class="f4 bold center mw5">Add A Person</h1>
    <Form />
    <h1 class="f4 bold center mw5">Names</h1>
    <Names />
  </div>
</template>

<script>
import Form from "./components/Form";
import Names from "./components/Names";

export default {
  name: "App",
  components: {
    Form,
    Names
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
