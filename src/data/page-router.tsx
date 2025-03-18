import React from "react";
import { pathUrl } from "./path-url";

const page500 = React.lazy(() => import("../pages/Page500"));
const page404 = React.lazy(() => import("../pages/Page404"));
const airConditionerDashboard = React.lazy(() => import("../pages/AirConditionerDashboard"));

export interface IRouter {
  path: string;
  title: string;
  component: any;
}

export const pageRouter: IRouter[] = [
  {
    path: pathUrl.HOME,
    title: "AirConditionerDashboard",
    component: airConditionerDashboard,
  },
  {
    path: pathUrl.PAGE500,
    title: "Page 500",
    component: page500,
  },
  {
    path: pathUrl.PAGE404,
    title: "Page 400",
    component: page404,
  },
];






