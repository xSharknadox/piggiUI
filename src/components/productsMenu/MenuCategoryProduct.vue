<template>
    <v-col cols="3" class="menuCategoryProduct">

        <v-card
                class="mx-auto"
        >
            <v-img
                    class="white--text align-end"
                    height="300px"
                    v-bind:src="product.image"
            >

            </v-img>
            <v-card-title class="justify-center">{{product.name}}</v-card-title>

            <v-card-text class="text--primary pa-0">
                <v-container fluid>
                    <v-row class="pa-0">
                        <v-col cols="4" class="primaryColor text-center pa-0">
                            <v-icon class="primaryColor">mdi-basket-plus</v-icon>
                            <p class="font-weight-bold">100 gr</p>
                        </v-col>
                        <v-col cols="4" class="lightPrimaryColor text-center pa-0">
                            <v-icon v-if="product.haveCount>0" class="lightPrimaryColor">mdi-fridge</v-icon>
                            <p v-if="product.haveCount>0" class="font-weight-bold">{{product.haveCount}}
                                {{product.units}}</p>
                        </v-col>
                        <v-col cols="4" class="redPrimaryColor text-center pa-0">
                            <v-icon v-if="product.needCount>0" class="redPrimaryColor">mdi-fridge</v-icon>
                            <p v-if="product.needCount>0" class="font-weight-bold">{{product.needCount}}
                                {{product.units}}</p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

        </v-card>
    </v-col>
</template>

<script>

    export default {
        name: 'MenuCategoryProduct',
        props: ['product']

    }
</script>

<style scoped>

</style>
