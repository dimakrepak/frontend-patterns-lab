import { routesConfig } from "@/routes/routesConfig";
import { NavLink } from "react-router";

interface Props {
  routeConfig: typeof routesConfig;
}

export const Sidebar = ({ routeConfig }: Props) => {
  return (
    <>
      <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">My App</h2>
        <div className="flex flex-col space-y-4">
          {routeConfig.map(({ label, path }) => (
            <NavLink
              key={path}
              to={`${path}`}
              className={({ isActive }) =>
                `${isActive ? "text-blue-400" : "text-white"} hover:text-blue-400`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
