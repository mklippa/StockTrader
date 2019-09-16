<template>
  <div class="row app-header">
    <div class="col-xs-10 col-xs-offset-1">
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <router-link
            class="navbar-brand"
            to="/"
            exact
          >Stock Trader</router-link>
        </div>
        <div
          class="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul class="nav navbar-nav">
            <router-link
              to="/stocks"
              tag="li"
            ><a href="">Stocks</a></router-link>
            <router-link
              to="/portfolio"
              tag="li"
            ><a href="">Portfolio</a></router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a @click="endDay">End Day</a></li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >Save & Load <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a @click="save">Save</a></li>
                <li><a @click="load">Load</a></li>
              </ul>
            </li>
            <p class="navbar-text"><b>Funds: {{funds()}}</b></p>
          </ul>
        </div>
      </nav>
      <transition name="slide" mode="out-in">
        <router-view class="row"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data () {
    const url = 'https://vue-firebase-tutorial-41978.firebaseio.com/stocks.json';
    return {
      url
    }
  },
  methods: {
    ...mapState(['stocks', 'portfolio']),
    ...mapGetters(['funds']),
    ...mapMutations(['endDay', 'updateStocks', 'updatePortfolio']),
    save () {
      this.$resource('stocks.json').update(this.stocks());
      this.$resource('portfolio.json').update(this.portfolio());
    },
    load () {
      this.$resource('stocks.json').get()
        .then(repsonse => repsonse.json())
        .then(json => {
          this.updateStocks(json);
        });
      this.$resource('portfolio.json').get()
        .then(repsonse => repsonse.json())
        .then(json => {
          this.updatePortfolio(json);
        });
    }
  }
}
</script>

<style scope>
a {
  cursor: pointer;
}
.app-header {
  padding-top: 30px;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in .5s;
  transition: opacity .5s;
}

.slide-leave-active {
  animation: slide-out .5s;
  transition: opacity .5s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-20px);
  }
}
</style>
