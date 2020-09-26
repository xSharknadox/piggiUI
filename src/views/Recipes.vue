<template>
    <div class="recipes">
        <RecipesCategoriesList>
        </RecipesCategoriesList>
    </div>
</template>

<script>
    import RecipesCategoriesList from "../components/recipes/RecipesCategoriesList";

    export default {
        name: "Recipes",
        components: {RecipesCategoriesList},
        beforeCreate: function () {
            this.$store.commit('setActiveTab', "recipes")
        },

    }
</script>

<style scoped>

</style>