<template>
  <div>
    <h1>{{item.name}} (Price: {{item.price}} | Quantity: {{item.quantity}})</h1>
    <input
      type="text"
      placeholder="Quantity"
      v-model="quantity"
    >
    <button @click="sell">Sell</button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    sell() {
      this.$emit('sell');
    }
  }
}
</script>
