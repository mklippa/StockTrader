export default {
  buy: (state, payload) => {
    let buying;
    state.portfolio.forEach(item => {
      if (item.name === payload.name) {
        buying = item;
      }
    });
    if (buying === undefined) {
      buying = {
        name: payload.name,
        quantiy: payload.quantiy
      };
      state.portfolio.push(buying);
    } else {
      buying.quantiy += payload.quantiy;
    }
  },
  sell: (state, payload) => {
    state.portfolio.forEach(item => {
      if(item.name === payload.name) {
        if (item.quantiy >= payload.quantiy) {
          item.quantiy -= payload.quantiy;
        } else {
          alert('Invalid operation');
        }
      }
    });
  }
}
