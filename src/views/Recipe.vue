<template>
    <v-container fluid v-bind:class="[isScrollVisible ? 'enableScroll':'disableScroll']" class="containerHeight"
                 v-on:click="disableScroll" v-on:mousemove="disableScroll" v-on:wheel="enableScroll">
        <v-row>
            <v-col cols="6">
                <v-card class="colHeight">
                    <v-img
                            class="white--text align-end"
                            v-bind:src="recipe.image"
                    ></v-img>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card
                        class="mx-auto colHeight"
                        tile
                >
                    <v-card-title class="justify-center">
                        Potato
                    </v-card-title>

                    <v-card-text>
                        Time for cook: {{recipe.timeToCook}} min
                    </v-card-text>

                    <v-card-text>
                        Portions: {{recipe.portions}}
                    </v-card-text>

                    <v-card-text>
                        Ingredients: {{ingredients}}
                    </v-card-text>

                </v-card>
            </v-col>

        </v-row>
        <v-row>
            <v-col cols="6">
                <v-card class="colHeight">
                    <v-card-title class="justify-center">
                        Recipe
                    </v-card-title>
                    <v-card-text>
                        Bla bla bla
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card class="colHeight">
                    <v-card-title class="justify-center">
                        Video
                    </v-card-title>
                    <v-card-text>
                        <iframe class="videoSize" v-bind:src="recipe.videoSrc" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Recipe",
        data: () => ({
            scrollVisibility: false,
            recipe: {
                name: "Potato",
                image: "https://gotovim-doma.ru/images/recipe/8/01/801dfbfc272b13f476e2fbf42c89b233.jpg",
                timeToCook: 25,
                portions: 2,
                videoSrc: "https://www.youtube.com/embed/gbIO_RDrMU8",
                products: [
                    {
                        name: "картопля",
                        howMuch: 3,
                        units: "шт"
                    },
                    {
                        name: "сіль",
                        howMuch: 1,
                        units: "шт"
                    },
                    {
                        name: "перець",
                        howMuch: 4,
                        units: "шт"
                    }
                ]
            },
            ingredients: ""
        }),
        computed: {
            isScrollVisible() {
                return this.scrollVisibility
            }
        },
        methods: {
            getIngredients() {
                for (let product of this.products) {
                    this.ingredients = this.ingredients + product.name + " " + product.howMuch + " " + product.units
                }
            },
            enableScroll() {
                this.scrollVisibility = true;
            },
            disableScroll() {
                this.scrollVisibility = false;
            }
        }
    }
</script>

<style scoped>
    .videoSize {
        width: 100%;
        height: 400px;
    }

    .containerHeight {
        height: 85vh;
        overflow-y: auto;
    }

    .colHeight {
        height: 100%;
    }
</style>