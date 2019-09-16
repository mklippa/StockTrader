<template>
  <div class="col-xs-6">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{title}}</h3>
      </div>
      <div class="panel-body">
        <form class="form-inline" submit="false">
          <input
            class="form-control"
            type="number"
            placeholder="Quantity"
            v-model="quantity"
          >
          <button
            class="btn btn-success pull-right"
            type="button"
            @click="buyHandler"
          >Buy</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ['stock'],
  data () {
    return {
      quantity: undefined
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
      if (!this.quantity) {
        return;
      }

      this.buy({
        name: this.stock.name,
        quantity: this.quantity
      });
    }
  }
}
</script>
