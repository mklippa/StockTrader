<template>
  <div>
    <ul>
      <!-- <li style="cursor:pointer">Stock Trader</li> -->
      <router-link to="/stocks">Stocks</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <!-- <li style="cursor:pointer">Portfolio</li>
      <li style="cursor:pointer">Stocks</li> -->
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
}
</script>

<style>
</style>
