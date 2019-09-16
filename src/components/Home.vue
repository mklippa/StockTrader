<template>
  <div>
    <div class="col-xs-12">
      <div class="panel panel-default">
        <div class="panel-body">
          <h1>Trade or View your Portfolio</h1>
          <p>You may Save & Load your data</p>
          <p>Click on 'End Day' to begin a new Day!</p>
          <hr>
          <h3>Your Funds: {{funds()}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    ...mapGetters(['funds'])
  }
}
</script>
