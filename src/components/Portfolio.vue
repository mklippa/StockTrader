<template>
  <div>
    <app-item
      v-for="(item,i) in portfolio"
      :key="i"
      :item="item"
    ></app-item>
  </div>
</template>

<script>
import Item from './Item.vue'
import { mapGetters } from "vuex";
export default {
  components: {
    appItem: Item
  },
  computed: mapGetters(['portfolio'])
}
</script>
