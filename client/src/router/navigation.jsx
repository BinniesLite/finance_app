import WalletsPage from "../components/pages/wallet/WalletsPage";
import TransactionPage from "../components/pages/transaction/TransactionsPage";
import SignInPage from "../components/pages/SignInPage/SignInPage";
import SignUpPage from "../components/pages/SignUpPage/SignUpPage";

import Dashboard from "../components/pages/dashboard/Dashboard";
import LayoutWrapper from "../components/layout/wrapper/LayoutWrapper";
import Budget from "../components/pages/budget/Budget";

export const navigation = [
  {
    path: "/",
    component: <SignInPage />,
    isPrivate: false,
  },
  {
    path: "/signup",
    component: <SignUpPage />,
    isPrivate: false,
  },
  {
    path: "/transactions",
    component: (
      <LayoutWrapper>
        <TransactionPage />
      </LayoutWrapper>
    ),
    isPrivate: true,
  },
  {
    path: "/wallets",
    component: (
      <LayoutWrapper>
        <WalletsPage />
      </LayoutWrapper>
    ),
    isPrivate: true,
  },
  {
    path: "/dashboard",
    component: (
      <LayoutWrapper>
        <Dashboard />
      </LayoutWrapper>
    ),
    isPrivate: true,
  },
  {
    path: "/budgets",
    component: (
      <LayoutWrapper>
        <Budget />
      </LayoutWrapper>
    ),
    isPrivate: true,
  }
];
