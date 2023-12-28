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
    component: HomePage,
    noLayoutWrap: true,
    isPrivate: false,
  },
  {
    path: "/transactions",
    component: TransactionPage,
    noLayoutWrap: false,
    isPrivate: true,
  },
  {
    path: "/wallets",
    component: WalletsPage,
    noLayoutWrap: false,
    isPrivate: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    noLayoutWrap: false,
    isPrivate: true,
  },
  {
    path: "/virtualassistant",
    component: Budget,
    noLayoutWrap: false,
    isPrivate: true,
  },
  {
    path: "/reports",
    component: Report,
    noLayoutWrap: false,
    isPrivate: true,
  },
  {
    path: "/profile",
    component: Profile,
    noLayoutWrap: true,
    isPrivate: true,
  }
];