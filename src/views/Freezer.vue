<template>
    <div class="login">
        <FreezerTabs></FreezerTabs>
    </div>
</template>

<script>
    import FreezerTabs from '@/components/FreezerTabs'

    export default {
        name: 'Login',
        components: {FreezerTabs},
        beforeCreate: function () {
            this.$store.commit('setActiveTab', "freezer")
        }
    }
</script>
