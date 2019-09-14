<template>
  <div>
    <h1>{{title}}</h1>
    <input
      type="number"
      placeholder="Quantity"
      v-model="quantity"
    >
    <button @click="sellHandler">Sell</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ['item'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    title () {
      return `${this.item.name} (Price: ${this.price()} | Quantity: ${this.item.quantity})`;
    }
  },
  methods: {
    ...mapActions(['sell']),
    sellHandler () {
      this.sell({
        name: this.item.name,
        quantity: this.quantity
      });
    },
    price () {
      return this.$store.getters.price(this.item.name);
    }
  }
}
</script>
