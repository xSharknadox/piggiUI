<template>
    <div class="categoryRecipes">
        <v-form>
            <v-text-field
                    append-icon="mdi-volume-high"
                    flat
                    hide-details
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    solo-inverted
                    class="search"
                    color="#ffffff"
                    background-color="#041c16"
                    dark
            ></v-text-field>
        </v-form>
        <CategoryRecipesList></CategoryRecipesList>
    </div>
</template>

<script>
    import CategoryRecipesList from "../components/recipes/CategoryRecipesList";

    export default {
        name: "CategoryRecipes",
        components: {CategoryRecipesList}
    }
</script>

<style scoped>
    .search {
        border-radius: 0;
    }
</style>