/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBrowserRouter } from "react-router";
import { AppLayout } from "../app/AppLayout";
import { routesConfig } from "./routesConfig";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: routesConfig.map(({ label, ...rest }) => rest),
  },
]);
