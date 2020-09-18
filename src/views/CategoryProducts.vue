<template>
    <div class="categoryProducts">
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
        <ProductMenuList></ProductMenuList>
    </div>
</template>

<script>
    import ProductMenuList from "../components/productsMenu/ProductsMenuList";

    export default {
        name: "CategoryProducts",
        components: {ProductMenuList}
    }
</script>

<style scoped>
    .search {
        border-radius: 0;
    }

</style>