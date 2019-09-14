<template>
  <div>
    <h1>{{title}}</h1>
    <input
      type="number"
      placeholder="Quantity"
      v-model="quantity"
    >
    <button @click="buyHandler">Buy</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    title () {
      return `${this.stock.name} (Price: ${this.stock.price})`;
    }
  },
  methods: {
    ...mapActions(['buy']),
    buyHandler () {
      this.buy({
        name: this.stock.name,
        quantity: this.quantity
      });
    }
  }
}
</script>
