<template>
    <v-container fluid>
        <!--ADD FREEZER-->
        <v-row>
            <v-col cols="3">
                <v-dialog
                        v-model="dialogAddFreezer"
                        scrollable
                        max-width="300px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                class="maxWidth"
                                dark
                                v-bind="attrs"
                                v-on="on"
                        >
                            Add new
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>Add new freezer</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="addFreezerName" label="Freezer name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-radio-group
                                                v-model="addFreezerColor"
                                                column
                                        >
                                            <v-radio v-for="color in freezerColors"
                                                     v-bind:label="color.name"
                                                     v-bind:color="color.color"
                                                     v-bind:value="color.color"
                                                     :key="color.color"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="secondary"
                                    text
                                    @click="dialogAddFreezer = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="addFreezer"
                            >
                                Add
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>

            <!--DELETE FREEZER-->
            <v-col cols="3">
                <v-dialog
                        v-model="dialogDeleteFreezer"
                        scrollable
                        max-width="300px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                class="maxWidth"
                                dark
                                v-bind="attrs"
                                v-on="on"
                        >
                            Delete selected
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>Delete freezer</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12">
                                        Do you realy want to delete freezer '{{selectedFreezer.name}}'?
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="secondary"
                                    text
                                    @click="dialogDeleteFreezer = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                    color="error"
                                    text
                                    @click="deleteFreezer"
                            >
                                Delete
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-snackbar
                        v-model="alert"
                >
                    {{alertText}}
                    <template v-slot:action="{ attrs }">
                        <v-btn
                                color="pink"
                                text
                                v-bind="attrs"
                                @click="alert = false"
                        >
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>
            </v-col>

            <!--SET FREEZER COLOR-->
            <v-col cols="3">
                <v-dialog
                        v-model="dialogChangeColor"
                        scrollable
                        max-width="300px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                class="maxWidth"
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                        >
                            Change color
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>Change freezer color</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12">
                                        <v-radio-group
                                                v-model="selectedFreezerColorToChange"
                                                column
                                        >
                                            <v-radio v-for="color in freezerColors"
                                                     v-bind:label="color.name"
                                                     v-bind:color="color.color"
                                                     v-bind:value="color.color"
                                                     :key="color.color"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="secondary"
                                    text
                                    @click="dialogChangeColor = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="saveSelectedFreezerColor"
                            >
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>

            <!--SELECTED FREEZER-->
            <v-col cols="3">
                <v-btn class="maxWidth" v-bind:color="getSelectedFreezer.color" dark>
                    Selected: {{getSelectedFreezer.name}}
                </v-btn>
            </v-col>
        </v-row>

        <!--FREEZERS-->
        <v-row>
            <v-col class="justify-center">
                <p class="text-h4 text-center ma-0">Freezers</p>
            </v-col>
        </v-row>
        <v-row>
            <v-container fluid v-bind:class="[isScrollVisible ? 'enableScroll':'disableScroll']" class="containerHeight"
                         v-on:click="disableScroll" v-on:mousemove="disableScroll" v-on:wheel="enableScroll">
                <v-row>
                    <v-col
                            cols="3"
                            v-for="freezer in freezers"
                            :key="freezer.id"
                            class="autoHeight"
                    >
                        <v-btn
                                dark
                                class="maxWidth"
                                v-bind:color="freezer.color"
                                @click="setSelectedFreezer(freezer.id)"
                        >
                            {{freezer.name}}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: "Freezers",
        data: () => ({
            alert: false,
            alertText: "Can't remove freezer if it only one",
            scrollVisibility: false,
            dialogChangeColor: false,
            dialogAddFreezer: false,
            dialogDeleteFreezer: false,
            selectedFreezerColorToChange: "red",
            addFreezerName: "",
            addFreezerColor: "red",
            selectedFreezer: {
                id: 1,
                name: "Home",
                color: "red"
            },
            freezers: [
                {
                    id: 1,
                    name: "Home",
                    color: "red"
                },
                {
                    id: 2,
                    name: "Work",
                    color: "blue"
                },
                {
                    id: 3,
                    name: "College",
                    color: "indigo"
                },
                {
                    id: 4,
                    name: "Girlfriend",
                    color: "teal"
                }
            ],
            freezerColors: [
                {
                    name: "red",
                    color: "red"
                },
                {
                    name: "teal",
                    color: "teal"
                },
                {
                    name: "indigo",
                    color: "indigo"
                },
                {
                    name: "orange",
                    color: "orange"
                },
                {
                    name: "blue",
                    color: "blue"
                }
            ]
        }),
        computed: {
            isScrollVisible() {
                return this.scrollVisibility
            },
            getSelectedFreezer() {
                return this.selectedFreezer
            }
        },
        methods: {
            enableScroll() {
                this.scrollVisibility = true;
            },
            disableScroll() {
                this.scrollVisibility = false;
            },
            setSelectedFreezer(id) {
                for (const freezer of this.freezers) {
                    if (freezer.id === id) {
                        this.selectedFreezer = freezer
                        this.selectedFreezerColorToChange = freezer.color
                    }
                }
            },
            saveSelectedFreezerColor() {
                this.selectedFreezer.color = this.selectedFreezerColorToChange
                let id = this.selectedFreezer.id
                for (const freezer of this.freezers) {
                    if (freezer.id === id) {
                        freezer.color = this.selectedFreezerColorToChange
                    }
                }
                this.dialogChangeColor = false
            },
            deleteFreezer() {
                if (this.freezers.length > 1) {
                    let indexForRemove;
                    let selectedFreezerId = this.selectedFreezer.id
                    for (const index in this.freezers) {
                        if (this.freezers[index].id === selectedFreezerId) {
                            indexForRemove = index
                        }
                    }
                    this.freezers.splice(indexForRemove, 1)
                    this.setSelectedFreezer(this.freezers[0].id)
                    this.dialogDeleteFreezer = false
                } else {
                    this.alert = true
                }
            },
            addFreezer() {
                const freezer = {
                    id: this.freezers.length,
                    name: this.addFreezerName,
                    color: this.addFreezerColor
                }
                this.freezers.push(freezer)
                this.dialogAddFreezer = false
            }
        }
    }
</script>

<style scoped>
    .maxWidth {
        width: 100%;
    }

    .containerHeight {
        height: 75vh;
        overflow-y: auto;
    }
</style>