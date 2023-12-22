import WalletsPage from "@/components/pages/wallet/WalletsPage";
import TransactionPage from "@/components/pages/transaction/TransactionsPage";
import Dashboard from "@/components/pages/dashboard/Dashboard";
import LayoutWrapper from "@/components/layout/wrapper/LayoutWrapper";
import Budget from "@/components/pages/budget/Budget";
import Report from "@/components/pages/report/Report";
import HomePage from "@/components/pages/auth/HomePage/HomePage";
import Profile from "../components/pages/profile/Profile";

export const navigation = [
  {
    path: "/",
    component: <HomePage />,
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
  {
    path: "/profile",
    component: (<Profile/>),
    isPrivate: true,
  }
];