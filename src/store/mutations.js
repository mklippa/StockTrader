export default {
  buy: (state, payload) => {
    let buying;
    const name = payload.name;
    const quantity = parseInt(payload.quantity);
    state.portfolio.forEach(item => {
      if (item.name === name) {
        buying = item;
      }
    });
    if (buying === undefined) {
      buying = {
        name: name,
        quantity: quantity
      };
      state.portfolio.push(buying);
    } else {
      buying.quantity += quantity;
    }
  },
  sell: (state, payload) => {
    const name = payload.name;
    const quantity = parseInt(payload.quantity);
    state.portfolio.forEach(item => {
      if(item.name === name) {
        if (item.quantity >= payload.quantity) {
          item.quantity -= quantity;
        } else {
          alert('Invalid operation');
        }
      }
    });
  }
}
