<template>
  <div class="recipes">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn
              text
              @click="addFavoriteFilter"
          >
            <v-icon v-bind:color="favoriteButton.enabled?favoriteButton.enabledColor:favoriteButton.disabledColor">
              mdi-star
            </v-icon>
          </v-btn>

          <v-btn
              text
              @click="addViewedFilter"
          >
            <v-icon v-bind:color="viewedButton.enabled?viewedButton.enabledColor:viewedButton.disabledColor">
              mdi-eye-check
            </v-icon>
          </v-btn>

          <v-btn
              text
              @click="addNotViewedFilter"
          >
            <v-icon v-bind:color="notViewedButton.enabled?notViewedButton.enabledColor:notViewedButton.disabledColor">
              mdi-eye-minus
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <RecipesCategoriesList>
      </RecipesCategoriesList>
    </v-container>
  </div>
</template>

<script>
import RecipesCategoriesList from "../components/recipes/RecipesCategoriesList";

export default {
  name: "Recipes",
  components: {RecipesCategoriesList},
  data: () => ({
    favoriteButton: {
      enabled: false,
      enabledColor: "red",
      disabledColor: "black"
    },
    viewedButton: {
      enabled: false,
      enabledColor: "red",
      disabledColor: "black"
    },
    notViewedButton: {
      enabled: false,
      enabledColor: "red",
      disabledColor: "black"
    }
  }),
  methods: {
    addFavoriteFilter() {
      this.favoriteButton.enabled = !this.favoriteButton.enabled;
      if (this.favoriteButton.enabled) {
        this.notViewedButton.enabled = false
      }
    },
    addViewedFilter() {
      this.viewedButton.enabled = !this.viewedButton.enabled;
      if (this.viewedButton.enabled) {
        this.notViewedButton.enabled = false
      }
    },
    addNotViewedFilter() {
      this.notViewedButton.enabled = !this.notViewedButton.enabled;
      if (this.notViewedButton.enabled) {
        this.viewedButton.enabled = false
        this.favoriteButton.enabled = false
      }
    }
  },
  beforeCreate: function () {
    this.$store.commit('setActiveTab', "recipes")
  }
  ,

}
</script>

<style scoped>

</style>