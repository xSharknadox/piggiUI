<template>
    <v-col cols="3" class="freezerProduct">

        <v-card
                class="mx-auto"
                @click.stop="enableDialogFreezerTypeChoice"
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
                        <v-col v-if="isHave" cols="12" class="lightPrimaryColor text-center pa-0">
                            <v-icon class="lightPrimaryColor">mdi-fridge</v-icon>
                            <p class="font-weight-bold">{{product.haveCount}}
                                {{product.units}}</p>
                        </v-col>
                        <v-col v-else cols="12" class="redPrimaryColor text-center pa-0">
                            <v-icon class="redPrimaryColor">mdi-fridge</v-icon>
                            <p class="font-weight-bold">{{product.needCount}}
                                {{product.units}}</p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <!--DIALOG CHANGE PRODUCT-->

            <v-dialog v-model="dialogProductChange" max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">'{{product.name}}' {{isHaveDialogSelected?'for freezer have':'for freezer need'}}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field label="Count" required></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-autocomplete
                                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                            label="Units"
                                            multiple
                                    ></v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn v-if="!isHaveDialogSelected" color="secondary" text @click="dialogProductChange=false">
                            Delete
                        </v-btn>
                        <v-btn v-if="isHaveDialogSelected" color="success" text @click="dialogProductChange = false">
                            Add
                        </v-btn>
                        <v-btn v-else color="error" text @click="dialogProductChange = false">Change</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!--DIALOG HAVE/NEED CHANGE PRODUCT-->

            <v-dialog v-model="dialogFreezerTypeChoice" max-width="600px">
                <v-card>
                    <v-card-title class="justify-center">
                        <span class="headline">{{product.name}}</span>
                    </v-card-title>
                    <v-card-actions class="justify-space-around">
                        <v-btn color="success" text @click="enableDialogProductChange(true)">Add to Have</v-btn>
                        <v-btn color="error" text @click="enableDialogProductChange(false)">Change in Need</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-card>

    </v-col>
</template>

<script>

    export default {
        name: 'FreezerProduct',
        props: ['product', "isHave"],
        data() {
            return {
                dialogProductChange: false,
                dialogFreezerTypeChoice: false,
                isHaveDialogSelected: false
            }
        },
        methods: {
            enableDialogProductChange(isHaveDialogSelected) {
                this.dialogFreezerTypeChoice = false
                this.dialogProductChange = true
                this.isHaveDialogSelected = isHaveDialogSelected

            },
            enableDialogFreezerTypeChoice() {
                this.dialogFreezerTypeChoice = true
            }
        }

    }
</script>

<style scoped>

</style>
