export default {
  stocks: state => state.stocks,
  portfolio: state => state.portfolio,
  price: state => name => {
    const stock = state.stocks.find(s => s.name == name);
    return stock ? stock.price : undefined;
  },
  funds: state => {
    let sum = 0;
    state.portfolio.forEach(item => {
      const stock = state.stocks.find(s => s.name === item.name);
      sum += stock.price * item.quantity;
    });
    return sum;
  }
}
