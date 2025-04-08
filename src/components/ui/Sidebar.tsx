import { NavLink } from "react-router";

export const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">My App</h2>
      <nav className="flex flex-col space-y-4">
        <NavLink to="/" className="hover:text-yellow-400">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-yellow-400">
          About
        </NavLink>
        <NavLink to="/services" className="hover:text-yellow-400">
          Services
        </NavLink>
        <NavLink to="/contact" className="hover:text-yellow-400">
          Contact
        </NavLink>
      </nav>
    </div>
  );
};
