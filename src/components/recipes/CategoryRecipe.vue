<template>
    <v-col cols="3" class="recipe">

        <v-card
                class="mx-auto"
        >
            <v-img
                    class="white--text align-end"
                    height="300px"
                    v-bind:src="recipe.image"
                    @click="goToRecipe"
            >

            </v-img>

            <v-card-actions>
                <v-card-title class="justify-center">{{recipe.name}}</v-card-title>

                <v-spacer></v-spacer>

                <v-btn
                        icon
                        @click="show = !show"
                >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                        time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                        data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                        I've got to find a way to escape.
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        name: "CategoryRecipe",
        props: ['recipe'],
        data: () => ({
            show: false,
        }),
        methods: {
            goToRecipe() {
                this.$router.push("/recipe")
            }
        }
    }
</script>

<style scoped>

</style>