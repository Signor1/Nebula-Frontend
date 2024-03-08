import { lazy } from "react";


type Route = {
    path: string;
    title: string;
    component: any;
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
