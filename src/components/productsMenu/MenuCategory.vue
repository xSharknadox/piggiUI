<template>
    <v-col cols="3" class="menuCategory" @click="openCategoryProducts">

        <v-card
                class="mx-auto"
        >
            <v-img
                    class="white--text align-end"
                    height="300px"
                    src="https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420"
            >

            </v-img>
            <v-card-title class="justify-center">{{category.name}}</v-card-title>

        </v-card>
    </v-col>
</template>

<script>

    export default {
        name: 'MenuCategory',
        props: ['category'],
        methods: {
            openCategoryProducts() {
                this.$router.push("/categoryProducts")
            }
        }
    }
</script>

<style scoped>

</style>
