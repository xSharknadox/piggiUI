<template>
    <v-container fluid>
        <v-row>
            <MenuCategory v-for="category in categories" v-bind:key="category.id"
                          v-bind:category="category"></MenuCategory>
        </v-row>
    </v-container>
</template>

<script>
    import MenuCategory from "./MenuCategory";

    export default {
        name: "MenuCategoryList",
        components: {MenuCategory},
        data: () => ({
            categories: [
                {
                    id: 1,
                    name: "Milk"
                },
                {
                    id: 2,
                    name: "Meat"
                },
                {
                    id: 3,
                    name: "Souses"
                },
            ]
        })
    }
</script>

<style scoped>

</style>