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
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";


export default {
  methods: {
    ...mapGetters(['funds']),
    ...mapMutations(['endDay'])
  }
}
</script>

<style>
</style>
