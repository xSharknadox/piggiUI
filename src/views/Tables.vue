<template>
    <div class="tables">

    </div>
</template>

<script>
    export default {
        name: "Tables",
        beforeCreate: function () {
            this.$store.commit('setActiveTab', "tables")
        }
    }
</script>

<style scoped>

</style>