<template>
    <div class="productsMenu">
        <MenuCategoryList></MenuCategoryList>
    </div>
</template>

<script>
    import MenuCategoryList from "../components/productsMenu/MenuCategoryList";

    export default {
        name: "ProductsMenu",
        components: {MenuCategoryList},
        beforeCreate: function () {
            this.$store.commit('setActiveTab', "productsMenu")
        }
    }
</script>

<style scoped>

</style>