<template>
  <div>
    <h1 class="f4 bold center mw5">Add A Person</h1>
    <Form />
    <h1 class="f4 bold center mw5">Names</h1>
    <Names />
  </div>
</template>

<script>
import Form from "./Form";
import Names from "./Names";

export default {
  name: "Home",
  components: {
    Form,
    Names
  }
};
</script>
