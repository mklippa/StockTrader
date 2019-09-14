<template>
  <div>
    <h1>{{stock.name}} (Price: {{stock.price}})</h1>
    <input
      type="text"
      placeholder="Quantity"
    >
    <button>Buy</button>
  </div>
</template>

<script>
export default {
  props: ['stock']
}
</script>
