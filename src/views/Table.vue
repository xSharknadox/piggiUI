<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <p class="text-h5 text-center">Recipes</p>
        <v-card>
          <v-list>
            <v-list-item>Pizza</v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6">
        <p class="text-h5 text-center">Ingredients</p>
        <v-card>
          <v-list>
            <v-list-item>Potato 2 kg</v-list-item>
            <v-list-item>Tomato 2 kg</v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Table",
  data: () => ({
    recipes: [
      {
        id: 1,
        name: "Pizza",
        ingredients: [
          {
            id: 1,
            name: "Tomato",
            howMuch: 2,
            units: "kg"
          },
          {
            id: 2,
            name: "Meat",
            howMuch: 3,
            units: "kg"
          }
        ]
      },
      {
        id: 2,
        name: "Soup",
        ingredients: [
          {
            id: 1,
            name: "Water",
            howMuch: 2,
            units: "l"
          },
          {
            id: 2,
            name: "Meat",
            howMuch: 1,
            units: "kg"
          }
        ]
      },

    ],
    keys: [
      'Name',
      'Calories',
      'Fat',
      'Carbs',
      'Protein',
      'Sodium',
      'Calcium',
      'Iron',
    ],
    items: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: '12%',
        iron: '6%',
      },
    ],
  }),
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    getRecipesNames() {
      return this.recipes.map(p => p.name)
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number
    },
  },
}
</script>

<style scoped>

</style>