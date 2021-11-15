<template>
  <ApolloQuery :query="query">
    <template slot-scope="{ result: { loading, error, data } }">
      <span v-if="loading">Loading...</span>
      <span v-else-if="error">An error occured</span>

      <section v-if="data">
        <ul v-if="data.allNames.length" class="avenir list pl0 ml0 center mw5 ba b--light-silver br3">
          <li :key="name.id" v-for="name in data.allNames" class="avenir ph3 pv2 bb b--light-silver">
            {{name.name}}
            <span class="fr red pointer" v-on:click="deleteName(name.id)">
              x
            </span>
          </li>
        </ul>

        <span v-else>No result :(</span>
      </section>
    </template>
  </ApolloQuery>
</template>

<script>
import { GET_NAMES, DELETE_NAME } from "../queries.js";

export default {
  name: "Names",
  data() {
    return {
      query: GET_NAMES
    };
  },
  methods: {
    deleteName(id) {
      this.$apollo
        .mutate({
          mutation: DELETE_NAME,
          variables: {
            id
          },
          update: (cache, { data: { deleteNames } }) => {
            const { allNames } = cache.readQuery({ query: GET_NAMES });
            cache.writeQuery({
              query: GET_NAMES,
              data: {
                allNames: allNames.filter(n => n.id !== deleteNames.id)
              }
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
