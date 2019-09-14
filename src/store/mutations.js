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
  },
  endDay: state => {
    state.stocks.forEach(stock => {
      const plus = Math.random() >= 0.5;
      const value = Math.round(Math.random() * 20)
      if (plus) {
        stock.price += value;
      } else {
        stock.price = Math.max(stock.price - value, 0);
      }
    });
  },
  updateStocks: (state, payload) => {
    state.stocks = payload;
  },
  updatePortfolio: (state, payload) => {
    state.portfolio = payload;
  }
}
