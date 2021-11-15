<template>
  <form
    class="pa4 black-80"
    v-on:submit.prevent="onSubmit"
  >
    <div class="measure center">
      <label htmlFor="name" class="avenir f6 b db mb2">
        Name
      </label>
      <input
        id="name"
        class="avenir input-reset ba b--black-20 pa2 mb2 db w-100"
        type="text"
        required
        aria-describedby="name-desc"
        v-model="person"
      />
    </div>
    <div v-if="error">{{error}}</div>

  </form>
</template>

<script>
import { GET_NAMES, ADD_NAME } from "../queries";
export default {
  name: "Form",
  data() {
    return {
      person: "",
      error: null
    };
  },
  methods: {
    onSubmit() {
      const name = this.person;
      this.person = "";
      this.$apollo
        .mutate({
          mutation: ADD_NAME,
          variables: {
            name
          },
          update: (cache, { data: { createNames } }) => {
            const { allNames } = cache.readQuery({ query: GET_NAMES });

            cache.writeQuery({
              query: GET_NAMES,
              data: {
                allNames: allNames.concat(createNames)
              }
            });
          },
          optimisticResponse: {
            __typename: "Mutation",
            createNames: {
              id: -1,
              __typename: "Name",
              name
            }
          }
        })
        .catch(error => {
          console.error(error);
          this.person = name;
          this.error = `There has been a problem adding ${name} :(`;
        });
    }
  }
};
</script>

<style scoped>

</style>
