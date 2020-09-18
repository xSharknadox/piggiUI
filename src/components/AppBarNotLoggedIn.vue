<template>
    <v-app-bar
            app
            color="#041c16"
            dark
            elevation="0"
    >

        <v-spacer></v-spacer>

        <v-btn
                href="/"
                text
                v-bind:class="{activeColor:activeTab==='home'}"
        >
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-toolbar-title>{{title}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
                href="/login"
                text
                v-bind:class="{activeColor:activeTab==='login'}"
        >
            <v-icon>mdi-login</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBarNotLoggedIn",
        computed: {
            activeTab() {
                return this.$store.getters.getActiveTab
            },
            title() {
                return this.$store.getters.getTitle
            }
        }
    }
</script>

<style scoped>

</style>