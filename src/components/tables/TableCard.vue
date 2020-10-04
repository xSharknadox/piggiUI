<template>
  <v-col cols="3" class="table">

    <v-card
        class="mx-auto textColor"
        v-bind:color="table.color"
    >

      <v-card-actions>
        <v-card-title class="justify-center" @click="goToTable">
          {{ table.name }}
        </v-card-title>

        <v-spacer></v-spacer>

        <v-btn v-bind:color="table.color+' lighten'" dark v-on:click="$emit('setSelectedTable')"></v-btn>

        <v-spacer></v-spacer>

        <v-btn
            icon
            @click="show = !show"
        >
          <v-icon color="#ffffff">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-actions>
          </v-card-actions>
          <v-card-text>
            <v-list v-bind:color="table.color" class="textColor">
              <v-list-item-title v-if="table.recipes">
                Recipes:
              </v-list-item-title>
              <v-list-item-title v-else>
                Recipes list is empty
              </v-list-item-title>
              <v-list-item v-for="recipe in table.recipes" v-bind:key="recipe.id">
                <p class="textColor my-0 py-0">{{ recipe.name }} x {{ recipe.count }}</p>
              </v-list-item>
            </v-list>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Table",
  props: ['table'],
  data: () => ({
    show: false,
  }),
  methods: {
    goToTable() {
      this.$router.push("/table")
    }
  }
}
</script>

<style scoped>
.textColor {
  color: #ffffff !important;
}
</style>