import { faker } from "@faker-js/faker";

export const generateFakeTransactionData = (numberOfData) => {
  const fakeData = [];
  for (let i = 1; i <= numberOfData; i++) {
    fakeData.push({
      id: i,
      name: `Wallet ${i}`,
      amount: Math.floor(Math.random() * 1000) + 1,
    });
  }

  return fakeData;
};

export const generateFakeWalletData = (numberOfData) => {
  const fakeData = [];
  const type = ["credit card", "cash"];
  for (let i = 1; i <= numberOfData; i++) {
    fakeData.push({
      id: i,
      name: `Wallet ${i}`,
      amount: Math.floor(Math.random() * 1000) + 1,
      date: "02/06/23",
      type: "hello",
    });
  }

  return fakeData;
};

export const generateFakeUser = () => {
  const fakeUser = {
    name: faker.person.fullName(),
    balance: Math.floor(Math.random() * 1000) + 1,
    income: Math.floor(Math.random() * 1000) + 1,
    saving: Math.floor(Math.random() * 1000) + 1,
  };
  return fakeUser;
};
