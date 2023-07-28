import WalletsPage from "@/components/pages/wallet/WalletsPage";
import TransactionPage from "@/components/pages/transaction/TransactionsPage";
import SignInPage from "@/components/pages/auth/SignInPage/SignInPage";
import SignUpPage from "@/components/pages/auth/SignUpPage/SignUpPage";
import Dashboard from "@/components/pages/dashboard/Dashboard";
import LayoutWrapper from "@/components/layout/wrapper/LayoutWrapper";
import Budget from "@/components/pages/budget/Budget";
import Report from "@/components/pages/report/Report";
import HomePage from "@/components/pages/auth/HomePage/HomePage";

export const navigation = [
  {
    path: "/",
    component: <HomePage />,
    isPrivate: false,
  },
  {
    path: "/signin",
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
    path: "/virtualassistant",
    component: (
      <LayoutWrapper>
        <Budget />
      </LayoutWrapper>
    ),
    isPrivate: true,
  },
  {
    path: "/reports",
    component: (
      <LayoutWrapper>
        <Report />
      </LayoutWrapper>
    ),
    isPrivate: true,
  },
];