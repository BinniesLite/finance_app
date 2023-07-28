const formatCurrency = (amount) => {
  if (typeof amount !== 'number') {
      return "$0.00";
  }
  return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
  });
}

export default formatCurrency;