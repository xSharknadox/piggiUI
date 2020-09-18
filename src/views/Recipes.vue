<template>
    <div class="recipes">
    </div>
</template>

<script>
    export default {
        name: "Recipes",
        beforeCreate: function () {
            this.$store.commit('setActiveTab', "recipes")
        }
    }
</script>

<style scoped>

</style>