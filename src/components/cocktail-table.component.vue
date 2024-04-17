<script>
import { CocktailApiService } from '@/cocktails/service/cocktail-api.service.js';

export default {
  data() {
    return {
      cocktails: []
    };
  },
  mounted() {
    this.fetchCocktails();
  },
  methods: {
    async fetchCocktails() {
      try {
        const data = await CocktailApiService.fetchCocktailsByFirstLetter('a');
        this.cocktails = data;
        console.log("Cocktails data:", this.cocktails);
      } catch (error) {
        console.error('Error fetching cocktails:', error);
      }
    },
    dateBodyTemplate(rowData) {
      console.log("Original date data:", rowData.dateModified); // Debug: Check the raw date data
      if (rowData && rowData.dateModified) {
        const date = new Date(rowData.dateModified);
        const formattedDate = date.toISOString().split('T')[0];
        console.log("Formatted date:", formattedDate); // Debug: See the formatted result
        return formattedDate;
      }
      return ''; // Return an empty string if dateModified is not available or valid
    }
  }
}
</script>

<template>
  <div>
    <pv-data-table :value="cocktails" :loading="loading" showGridlines tableStyle="min-width: 50rem" paginator :rows="5">
      <pv-column field="strDrink" header="Name"></pv-column>
      <pv-column field="strInstructions" header="Instructions"></pv-column>
      <pv-column field="dateModified" header="Date" sortable :body="dateBodyTemplate"></pv-column>
      <pv-column field="strGlass" header="Glass"></pv-column>
    </pv-data-table>
  </div>
</template>

<style scoped>

</style>
