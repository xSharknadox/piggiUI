<template>
    <div class="login">
        <span>Login page</span>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Login',
        components: {},
        beforeCreate: function () {
            this.$store.commit('setActiveTab', "login")
        }
    }
</script>
