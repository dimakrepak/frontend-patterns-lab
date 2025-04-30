import { NotFoundPage } from "@/pages/NotFoundPage";
import { DebounceThrottlePage } from "@/pages/patterns/DebounceThrottlePage";
import { FormManagement } from "@/pages/patterns/FormManagement";
import { StateManagement } from "@/pages/patterns/StateManagement";

export const routesConfig = [
  {
    index: true,
    label: "Debounce/Throttle",
    path: "debounce-throttle",
    Component: DebounceThrottlePage,
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
