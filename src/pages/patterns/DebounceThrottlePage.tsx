import { DebounceDemo } from "@/patterns/debounce/DebounceDemo";

export const DebounceThrottlePage = () => {
  return (
    <div className="flex flex-1 flex-row justify-center">
      <div className="flex flex-col align-center border">
        <p className="text-4xl font-500 mb-4 text-center">
          Debounce vs Throttle
        </p>
        <p className="text-center text-subtle-text">
          Master function rate-limiting for smother UI and better performance.
        </p>
        <div className="flex gap-4 p-4">
          <DebounceDemo />
          <div className="w-100 h-100 bg-white rounded-2xl shadow-ms p-6"></div>
        </div>
      </div>
    </div>
  );
};
