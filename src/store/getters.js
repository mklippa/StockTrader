export default {
  stocks: state => state.stocks,
  portfolio: state => state.portfolio,
  price: state => name => {
    let stock = state.stocks.find(s => s.name == name);
    return stock ? stock.price : undefined;
  }
}
