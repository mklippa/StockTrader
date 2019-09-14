<template>
  <div>
    <h1>{{item.name}} (Price: {{item.price}} | Quantity: {{item.quantity}})</h1>
    <input
      type="text"
      placeholder="Quantity"
    >
    <button>Buy</button>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>
