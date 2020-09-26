<template>
    <v-container fluid>
        <v-row>
            <RecipesCategory v-for="category in categories" v-bind:key="category.id"
                             v-bind:category="category"></RecipesCategory>
        </v-row>
    </v-container>
</template>

<script>
    import RecipesCategory from '@/components/recipes/RecipesCategory'

    export default {
        name: "RecipesCategoriesList",
        components: {RecipesCategory},
        data: () => ({
            categories: [
                {
                    id: 1,
                    name: "Cold",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420"
                },
                {
                    id: 2,
                    name: "Hot",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420"
                },
                {
                    id: 3,
                    name: "French",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420"
                },
            ]
        })
    }
</script>

<style scoped>
    .containerHeight {
        height: 85vh;
        overflow-y: auto;
    }
</style>