<template>
    <v-container fluid v-bind:class="[isScrollVisible ? 'enableScroll':'disableScroll']" class="containerHeight"
                 v-on:click="disableScroll" v-on:mousemove="disableScroll" v-on:wheel="enableScroll">
        <v-row>
            <CategoryRecipe v-for="recipe in recipes" v-bind:key="recipe.id"
                            v-bind:recipe="recipe"></CategoryRecipe>
        </v-row>
    </v-container>
</template>

<script>
    import CategoryRecipe from '@/components/recipes/CategoryRecipe'

    export default {
        name: "CategoryRecipesList",
        components: {CategoryRecipe},
        data: () => ({
            recipes: [
                {
                    id: 1,
                    name: "Milk",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420"
                },
                {
                    id: 2,
                    name: "Meat",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420"
                },
                {
                    id: 3,
                    name: "Souses",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420"
                },
                {
                    id: 4,
                    name: "Souses",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420"
                },
                {
                    id: 5,
                    name: "Souses",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420"
                },
                {
                    id: 6,
                    name: "Souses",
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