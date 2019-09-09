<template>
  <div>
    <ul>
      <li style="cursor:pointer">Stock Trader</li>
      <li style="cursor:pointer">Portfolio</li>
      <li style="cursor:pointer">Stocks</li>
    </ul>
    <app-home></app-home>
    <app-portfolio></app-portfolio>
    <app-stock></app-stock>
    <app-stocks></app-stocks>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Portfolio from "./components/Portfolio.vue";
import Stock from "./components/Stock.vue";
import Stocks from "./components/Stocks.vue";

export default {
  components: {
    appHome: Home,
    appPortfolio: Portfolio,
    appStock: Stock,
    appStocks: Stocks
  }
}
</script>

<style>

</style>
