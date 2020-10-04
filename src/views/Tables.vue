<template>
  <div class="tables">
    <v-container fluid v-bind:class="[isScrollVisible ? 'enableScroll':'disableScroll']" class="containerHeight"
                 v-on:click="disableScroll" v-on:mousemove="disableScroll" v-on:wheel="enableScroll">
      <v-row>
        <v-col cols="3">
          <v-dialog
              v-model="dialogAddTable"
              scrollable
              max-width="300px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  class="maxWidth"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  color="secondary"
              >
                Add new
              </v-btn>
            </template>
            <v-card>
              <v-card-title>Add new table</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="addTableName" label="Table name"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-radio-group
                          column
                          v-model="addTableColor"
                      >
                        <v-radio v-for="color in $store.getters.getColors"
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
                >
                  Close
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="addTable"
                >
                  Add
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>

        <!--DELETE TABLE-->
        <v-col cols="3">
          <v-dialog
              v-model="dialogDeleteTable"
              scrollable
              max-width="300px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  class="maxWidth"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  color="secondary"
              >
                Delete selected
              </v-btn>
            </template>
            <v-card>
              <v-card-title>Delete table</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      Do you realy want to delete table '{{ selectedTable.name }}'?
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
                    @click="dialogDeleteTable = false"
                >
                  Close
                </v-btn>
                <v-btn
                    color="error"
                    text
                    @click="deleteTable"
                >
                  Delete
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>

        <!--SET TABLE COLOR-->
        <v-col cols="3">
          <v-dialog
              v-model="dialogChangeColor"
              scrollable
              max-width="300px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  class="maxWidth"
                  color="secondary"
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
                          v-model="selectedTableColorToChange"
                          column
                      >
                        <v-radio v-for="color in $store.getters.getColors"
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
                    @click="saveSelectedTableColor"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>

        <!--SELECTED TABLES-->
        <v-col cols="3">
          <v-btn v-if="getSelectedTable.name" class="maxWidth" v-bind:color="getSelectedTable.color" dark>
            Selected: {{ getSelectedTable.name }}
          </v-btn>
          <v-btn v-else class="maxWidth" color="#000000" dark>
            No one selected
          </v-btn>
        </v-col>
      </v-row>

      <!--TABLES-->
      <v-row>
        <v-col class="justify-center">
          <p class="text-h4 text-center ma-0">Tables</p>
        </v-col>
      </v-row>
      <v-row>
        <TableCard v-for="table in tables"
                   v-bind:key="table.id"
                   v-bind:table="table"
                   v-on:setSelectedTable="setSelectedTable(table.id)">
        </TableCard>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TableCard from "@/components/tables/TableCard";

export default {
  name: "Tables",
  beforeCreate: function () {
    this.$store.commit('setActiveTab', "tables")
  },
  components: {TableCard},
  data: () => ({
    addTableName: "",
    addTableColor: "",
    dialogAddTable: false,
    dialogDeleteTable: false,
    dialogChangeColor: false,
    scrollVisibility: false,
    selectedTable: {
      id: -1,
    },
    selectedTableColorToChange: "",
    tables: [
      {
        id: 1,
        name: "Christmas",
        color: "blue",
        recipes: [
          {
            id: 1,
            name: "Pizza",
            count: 6
          }
        ]
      },
      {
        id: 2,
        name: "Weekends",
        color: "red",
        recipes: [
          {
            id: 1,
            name: "Potato",
            count: 2
          },
          {
            id: 2,
            name: "Pasta",
            count: 1
          }
        ]
      }
    ],
  }),
  computed: {
    isScrollVisible() {
      return this.scrollVisibility
    },
    getSelectedTable() {
      return this.selectedTable
    }
  },
  methods: {
    addTable() {
      const table = {
        id: this.tables.length,
        name: this.addTableName,
        color: this.addTableColor
      }
      this.tables.push(table)
      this.dialogAddTable = false
    },
    setSelectedTable(id) {
      for (const table of this.tables) {
        if (table.id === id) {
          this.selectedTable = table
          this.selectedTableColorToChange = table.color
        }
      }
    },
    deleteTable() {
      if (this.tables.length > 1) {
        let indexForRemove;
        let selectedTableId = this.selectedTable.id
        for (const index in this.tables) {
          if (this.tables[index].id === selectedTableId) {
            indexForRemove = index
          }
        }
        this.tables.splice(indexForRemove, 1)
        this.setSelectedTable(this.tables[0].id)
        this.dialogDeleteTable = false
      } else {
        this.alert = true
      }
    },
    saveSelectedTableColor() {
      this.selectedTable.color = this.selectedTableColorToChange
      let id = this.selectedFreezer.id
      for (const table of this.tables) {
        if (table.id === id) {
          table.color = this.selectedTableColorToChange
        }
      }
      this.dialogChangeColor = false
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
.containerHeight {
  height: 85vh;
  overflow-y: auto;
}
</style>