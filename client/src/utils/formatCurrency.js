const formatCurrency = (amount) => {
  if (amount !== null && amount !== undefined) {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
} else {
    // Handle the case when 'amount' is null or undefined
    // For example, you can return a default value or an error message
    return '$0.00';
}
}

export default formatCurrency;