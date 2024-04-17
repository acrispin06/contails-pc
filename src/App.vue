<script>
import CocktailTable from './components/cocktail-table.component.vue'
import TheFooter from './components/footer.component.vue'
import CustomToolbar from './components/toolbar.component.vue'

export default {
  components: {
    CocktailTable,
    TheFooter,
    CustomToolbar
  }
}
</script>

<template>
  <div>
    <CustomToolbar />
    <CocktailTable />
    <TheFooter />
  </div>

</template>

<style scoped>

</style>
