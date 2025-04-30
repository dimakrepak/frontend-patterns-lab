import { routesConfig } from "@/routes/routesConfig";
import { Sidebar } from "@/ui/Sidebar";
import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar routeConfig={routesConfig} />
      <div className="flex flex-1 bg-bg p-8">
        <Outlet />
      </div>
    </div>
  );
};
