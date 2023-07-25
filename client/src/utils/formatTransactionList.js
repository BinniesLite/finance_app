import { getWalletName } from "./getWalletName";

export const formatTransactionList = async (data) => {
    let transactionData = [];
    for (let i = 0; i < data.length; i++) {
      const transaction = data[i];
      const walletName = await getWalletName(transaction.walletId);
      let formatteData = {
        walletName: walletName,
        amount: transaction.amount,
        createdAt: formatDate(transaction.createdAt),
        description: transaction.description,
        type: transaction.type,
      };
      transactionData.push(formatteData);
    }
    return transactionData;
};

export default formatTransactionList;