<template>
    <div class="home">
        <span>Welcome to best food app</span>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Home',
        components: {},
        beforeCreate: function () {
            this.$store.commit('setActiveTab', "home")
        }
    }
</script>
