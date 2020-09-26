<template>
    <div>
        <v-container fluid v-bind:class="[isScrollVisible ? 'enableScroll':'disableScroll']" class="containerHeight"
                     v-on:click="disableScroll" v-on:mousemove="disableScroll" v-on:wheel="enableScroll">
            <v-row>
                <Product v-for="product in products" v-bind:product="product" v-bind:isHave=true
                         v-bind:key="product.id"></Product>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import Product from '@/components/freezer/FreezerProduct'

    export default {
        name: "HaveProductsList",
        components: {
            Product
        },
        data: () => ({
            scrollVisibility: false,
            products: [
                {
                    id: 1,
                    name: "Tomato",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420",
                    primaryCount: 100,
                    haveCount: 200,
                    needCount: 300,
                    units: "gr"
                },
                {
                    id: 2,
                    name: "Potato",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420",
                    primaryCount: 100,
                    haveCount: 0,
                    needCount: 300,
                    units: "gr"
                },
                {
                    id: 3,
                    name: "Cheese",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420",
                    primaryCount: 100,
                    haveCount: 200,
                    needCount: 0,
                    units: "gr"
                },
                {
                    id: 4,
                    name: "Beer",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420",
                    primaryCount: 100,
                    haveCount: 200,
                    needCount: 0,
                    units: "gr"
                },
                {
                    id: 5,
                    name: "Pepsi",
                    image: "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420",
                    primaryCount: 100,
                    haveCount: 200,
                    needCount: 0,
                    units: "gr"
                }
            ]
        }),
        computed: {
            isScrollVisible() {
                return this.scrollVisibility
            }
        },
        methods: {
            enableScroll() {
                this.scrollVisibility = true;
            },
            disableScroll() {
                this.scrollVisibility = false;
            }
        }
    }
</script>

<style scoped>
    .containerHeight {
        height: 85vh;
        overflow-y: auto;
    }
</style>