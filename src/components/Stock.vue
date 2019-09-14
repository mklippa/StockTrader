<template>
  <div>
    <h1>{{stock.name}} (Price: {{stock.price}})</h1>
    <input
      type="text"
      placeholder="Quantity"
      v-model="quantity"
    >
    <button @click="buy">Buy</button>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buy() {
      this.$emit('buy')
    }
  }
}
</script>
