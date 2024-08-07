import { lazy } from "react";

const Home = lazy(() => import("../pages/index"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Profile = lazy(() => import("../pages/Profile"));
const Purchase = lazy(() => import("../pages/Purchase"));
const Characters = lazy(() => import("../pages/Characters"));
const Arena = lazy(() => import("../pages/Arena"));
const Strategy = lazy(() => import("../pages/Strategy"));
const WarriorsSelection = lazy(() => import("../pages/Warriors"));
const MarketPlace = lazy(() => import("../pages/MarketPlace"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

type Route = {
  path: string;
  title: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
};
type coreRoutes = Route[];

const coreRoutes: coreRoutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/about",
    title: "About",
    component: About,
  },
  {
    path: "/contact",
    title: "Contact",
    component: Contact,
  },
  {
    path: "/profile",
    title: "Profile",
    component: Profile,
  },
  {
    path: "/profile/purchasecharacter",
    title: "Purchase Character",
    component: Purchase,
  },
  {
    path: "/profile/yourcharacters",
    title: "Your Characters",
    component: Characters,
  },
  {
    path: "/arena",
    title: "Arena",
    component: Arena,
  },
  {
    path: "/strategy",
    title: "Strategy",
    component: Strategy,
  },
  {
    path: "/selectWarriors",
    title: "Warriors",
    component: WarriorsSelection,
  },
  {
    path: "/marketplace",
    title: "Marketplace",
    component: MarketPlace,
  },
  {
    path: "/marketplace/:id",
    title: "Product Detail",
    component: ProductDetail,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
  },
];

const routes = [...coreRoutes];
export default routes;
