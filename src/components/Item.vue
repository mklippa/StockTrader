<template>
  <div class="col-xs-6">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{title}}</h3>
      </div>
      <div class="panel-body">
        <form
          class="form-inline"
          submit="false"
        >
          <input
            class="form-control"
            type="number"
            placeholder="Quantity"
            v-model="quantity"
          >
          <button
            class="btn btn-info pull-right"
            type="button"
            @click="sellHandler"
          >Sell</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ['item'],
  data () {
    return {
      quantity: undefined
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
      if (!this.quantity) {
        return;
      }
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
