<template>
  <div>
    <p>Funds: ${{funds()}}</p>
    <ul>
      <!-- <li style="cursor:pointer">Stock Trader</li> -->
      <router-link to="/stocks">Stocks</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <!-- <li style="cursor:pointer">Portfolio</li>
      <li style="cursor:pointer">Stocks</li> -->
    </ul>
    <button @click="endDay">End Day</button>
    <button @click="save">Save</button>
    <button @click="load">Load</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data () {
    const url = 'https://vue-firebase-tutorial-41978.firebaseio.com/stocks.json';
    return {
      url
    }
  },
  methods: {
    ...mapState(['stocks', 'portfolio']),
    ...mapGetters(['funds']),
    ...mapMutations(['endDay', 'updateStocks', 'updatePortfolio']),
    save () {
      this.$resource('stocks.json').update(this.stocks());
      this.$resource('portfolio.json').update(this.portfolio());
    },
    load () {
      this.$resource('stocks.json').get()
        .then(repsonse => repsonse.json())
        .then(json => {
          this.updateStocks(json);
        });
      this.$resource('portfolio.json').get()
        .then(repsonse => repsonse.json())
        .then(json => {
          this.updatePortfolio(json);
        });
    }
  }
}
</script>

<style>
</style>
