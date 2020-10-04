<template>
    <v-col cols="3" class="recipesCategory" @click="openCategoryRecipes">

      <v-card
          class="mx-auto"
      >
        <v-img
            class="white--text align-end"
            height="300px"
            v-bind:src="category.image"
        >

        </v-img>
            <v-card-title class="justify-center">{{category.name}}</v-card-title>

        </v-card>
    </v-col>
</template>

<script>
    export default {
        name: "RecipesCategory",
        props: ['category'],
        methods: {
            openCategoryRecipes() {
                this.$router.push("/categoryRecipes")
            }
        }
    }
</script>

<style scoped>

</style>