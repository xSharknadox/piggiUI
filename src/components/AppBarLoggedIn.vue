<template>
    <v-app-bar
            app
            color="#041c16"
            dark
            elevation="0"
    >

        <v-spacer></v-spacer>

        <v-btn
                href="/recipes"
                text
                v-bind:class="{activeColor:activeTab==='recipes'}"
        >
            <v-icon>mdi-book-open-variant</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
                href="/tables"
                text
                v-bind:class="{activeColor:activeTab==='tables'}"
        >
            <v-icon>mdi-arrange-bring-forward</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-toolbar-title>{{title}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
                href="/freezer"
                text
                v-bind:class="{activeColor:activeTab==='freezer'}"
        >
            <v-icon>mdi-fridge</v-icon>
        </v-btn>


        <v-spacer></v-spacer>

        <v-btn
                href="/productsMenu"
                text
                v-bind:class="{activeColor:activeTab==='productsMenu'}"
        >
            <v-icon>mdi-basket-plus</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBarLoggedIn",
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