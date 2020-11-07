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
                v-if="selectedFreezer.id"
                class="maxWidth"
                dark
                v-bind="attrs"
                v-on="on"
            >
              Delete selected
            </v-btn>
            <v-btn
                v-else
                disabled
                class="maxWidth"
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
                    Do you realy want to delete freezer '{{ selectedFreezer.name }}'?
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
          {{ alertText }}
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
                v-if="selectedFreezer.id"
                class="maxWidth"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >
              Change color
            </v-btn>
            <v-btn
                v-else
                disabled
                class="maxWidth"
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
          <span v-if="getSelectedFreezer.name">Selected: {{ getSelectedFreezer.name }}</span>
          <span v-else>No one selected</span>
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
              {{ freezer.name }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-row>

  </v-container>
</template>

<script>
import baseApi from "@/baseApi";

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
    selectedFreezer: {},
    freezers: [],
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
  beforeMount() {
    baseApi.get("/api/freezer/freezers")
        .then(result => {
              this.freezers = result.data
            }
        )
        .catch(e => {
              console.error(e + "")
            }
        )
  },
  methods: {
    enableScroll() {
      this.scrollVisibility = true;
    },
    disableScroll() {
      this.scrollVisibility = false;
    },
    setSelectedFreezer(id) {
      let isSelected = false;
      for (const freezer of this.freezers) {
        if (freezer.id === id) {
          this.selectedFreezer = freezer
          this.selectedFreezerColorToChange = freezer.color
          isSelected = true
        }
      }

      if (!isSelected) {
        this.selectedFreezer = {}
        this.selectedFreezerColorToChange = ""
      }
    },
    saveSelectedFreezerColor() {
      const request = {
        id: this.selectedFreezer.id,
        color: this.selectedFreezerColorToChange
      }
      baseApi.post("/api/freezer/change_color", request)
          .then(result => {
                this.selectedFreezer = result.data
                let freezerIndex = this.freezers.findIndex(p => p.id === this.selectedFreezer.id);
                this.freezers[freezerIndex] = this.selectedFreezer
              }
          )
          .catch(e => {
                console.error(e + "")
              }
          )

      this.dialogChangeColor = false
    },
    deleteFreezer() {
      if (this.freezers.length > 1) {
        let selectedFreezerId = this.selectedFreezer.id
        baseApi.delete("/api/freezer/" + selectedFreezerId)
            .then(() => {
                  let indexForRemove = this.freezers.findIndex(p => p.id === this.selectedFreezer.id);
                  this.freezers.splice(indexForRemove, 1)
                  this.setSelectedFreezer({})
                }
            )
            .catch(e => {
                  console.error(e + "")
                }
            )

        this.dialogDeleteFreezer = false
      } else {
        this.alertText = "Can't remove freezer if it only one"
        this.alert = true
        this.dialogDeleteFreezer = false
      }
    },
    addFreezer() {
      const freezer = {
        name: this.addFreezerName,
        color: this.addFreezerColor
      }
      baseApi.post("/api/freezer/add_new", freezer)
          .then(result => {
                this.freezers.push(result.data)
              }
          )
          .catch(e => {
                console.error(e + "")
              }
          )
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