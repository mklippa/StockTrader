<template>
  <div>
    <app-stock
      v-for="(item,i) in 5"
      :key="i"
    ></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    appStock: Stock
  }
}
</script>