import { Input, Slider } from "@/ui";
import { useState } from "react";

export const DebounceDemo = () => {
  const [delay, setDelay] = useState(0);
  return (
    <div className="w-100 h-100 bg-white flex flex-col gap-4 rounded-2xl shadow-sm p-6">
      <p className="text-2xl text-center">Debounce Input Playground</p>
      <Input className="w-full" />
      <Slider
        min={0}
        max={5000}
        value={delay}
        label="Debounce Delay"
        unit="ms"
        step={200}
        onChange={(value) => setDelay(value)}
      />
    </div>
  );
};
