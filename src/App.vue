<template>
    <v-app>
        <AppBarLoggedIn v-if="isLoggedIn"></AppBarLoggedIn>
        <AppBarNotLoggedIn v-else></AppBarNotLoggedIn>

        <v-main class="">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>

    import AppBarLoggedIn from '@/components/AppBarLoggedIn'
    import AppBarNotLoggedIn from '@/components/AppBarNotLoggedIn'

    export default {
        name: 'App',

        components: {AppBarLoggedIn, AppBarNotLoggedIn},

        data: () => ({
            //
        }),

        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            }
        }

    };
</script>

<style>
    .activeColor {
        color: #7db492 !important;
    }

    .primaryColor {
        color: #004119 !important;
    }

    .lightPrimaryColor {
        color: #628744 !important;
    }

    .redPrimaryColor {
        color: #fc7a7a !important;
    }

    .primaryBackgroundColor {
        background-color: #041c16 !important;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(125, 180, 146, 1);
        border-radius: 5px;
    }

    .enableScroll::-webkit-scrollbar-thumb {
        background-color: rgba(125, 180, 146, 0.6);
    }

    .disableScroll::-webkit-scrollbar-thumb {
        background-color: rgba(125, 180, 146, 0);
    }

    html {
        overflow: hidden;
    }

</style>
