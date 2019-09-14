export default {
  buy: (state, payload) => {
    const name = payload.name;
    const quantity = parseInt(payload.quantity);
    let item = state.portfolio.find(i => i.name === name);
    if (!item) {
      state.portfolio.push({
        name: name,
        quantity: quantity
      });
    } else {
      item.quantity += quantity;
    }
  },
  sell: (state, payload) => {
    const name = payload.name;
    const quantity = parseInt(payload.quantity);
    let item = state.portfolio.find(i => i.name === name);
    if (item) {
      if (item.quantity >= payload.quantity) {
        item.quantity -= quantity;
      } else {
        alert('Invalid operation');
      }
    }
  }
}
