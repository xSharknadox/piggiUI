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

        <v-toolbar-title>
            <v-menu offset-y>
                <template v-slot:activator="{on, attrs}">
                    <v-btn
                            text
                            v-bind="attrs"
                            v-on="on"
                    >
                        {{title}}
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item-group>

                        <v-list-item href="/freezers">
                            <v-list-item-title>
                                Freezers
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item href="/settings">
                            <v-list-item-title>
                                Settings
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item href="/logout">
                            <v-list-item-title>Log out</v-list-item-title>
                        </v-list-item>

                    </v-list-item-group>

                </v-list>

            </v-menu>

        </v-toolbar-title>

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