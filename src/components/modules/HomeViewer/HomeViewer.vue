<template>
  <div>
    <v-toolbar color="white" class="grey--text text--darken-4" flat>
      <v-toolbar-title
        class="toolbarTitle font-weight-light display-1 pl-3 mt-3"
      >Welcome to Northcoders News!</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout column justify-center>
        <p class="pa-3">
          Northcoders News is a social news aggregation, web content rating, and discussion website.
          Northcoders News has articles which are divided into topics. Each article has user curated
          ratings and can be up or down voted using the API. Users can also add comments about an article.
          Comments can also be up or down voted. A user can add comments and remove any comments
          (comment can only be deleted by its author, so please select the correct current user to delete
          a comment) which they have added.
        </p>
        <v-flex wrap class="justify-space-between">
          <p class="ma-2">
            <v-chip large class="secondary lighten-1">Click the topics or user on the left to browse</v-chip>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeViewer"
};
</script>
