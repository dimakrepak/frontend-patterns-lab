import { useDebounce } from "@/hooks/useDebounce";
import { Input, Slider } from "@/ui";
import { useState } from "react";

export const DebounceDemo = () => {
  const [inputValue, setInputValue] = useState("");
  const [fcCount, setFcCount] = useState(0);
  const [delay, setDelay] = useState(300);

  const debouncedChange = useDebounce(setFcCount, delay);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (debouncedChange) debouncedChange((prev: number) => prev + 1);
  };

  return (
    <div className="w-100 h-100 bg-white flex flex-col gap-4 rounded-2xl shadow-sm p-6">
      <p className="text-2xl text-center">Debounce Input Playground</p>
      <Input className="w-full" value={inputValue} onChange={handleChange} />
      <Slider
        min={0}
        max={5000}
        value={delay}
        label="Debounce Delay"
        unit="ms"
        step={200}
        onChange={(value) => setDelay(value)}
      />
      <span>Function calls: {fcCount}</span>
    </div>
  );
};
