import { NotFoundPage } from "@/pages/NotFoundPage";
import { DebounceThrottle } from "@/patterns/debounce-throttle/DebounceThrottle";
import { FormManagement } from "@/patterns/form-management/FormManagement";
import { StateManagement } from "@/patterns/state-management/StateManagement";

export const routesConfig = [
  {
    index: true,
    label: "Debounce/Throttle",
    path: "debounce-throttle",
    Component: DebounceThrottle,
  },
  {
    label: "Form Management",
    path: "form-management",
    Component: FormManagement,
  },
  {
    label: "State Management",
    path: "state-management",
    Component: StateManagement,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
];
