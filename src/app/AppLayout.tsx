import { routesConfig } from "@/routes/routesConfig";
import { Sidebar } from "@/ui/Sidebar";
import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar routeConfig={routesConfig} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
