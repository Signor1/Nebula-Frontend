import { lazy } from "react";


type Route = {
    path: string;
    title: string;
    component: React.LazyExoticComponent<() => JSX.Element>;
}
type coreRoutes = Route[]

const coreRoutes : coreRoutes = [
    {
        path: "/",
        title: "Home",
        component: 
    }
];

const routes = [...coreRoutes];
export default routes;
