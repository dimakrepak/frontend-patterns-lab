import { useRef, useCallback } from "react";

type Props = {
  label: string;
  unit: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

export const Slider = ({
  label,
  unit,
  value,
  onChange,
  min = 0,
  max = 1000,
  step = 1,
}: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      const onMove = (event: PointerEvent) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
        const percent = x / rect.width;
        const rawValue = min + percent * (max - min);
        const steppedValue = Math.round(rawValue / step) * step;
        onChange(steppedValue);
      };

      const onUp = () => {
        window.removeEventListener("pointermove", onMove);

      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);

      onMove(e.nativeEvent);
    },
    [min, max, step, onChange]
  );

  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between">
        <span>{label}</span>
        <span>
          {value} {unit}
        </span>
      </div>

      <div
        ref={trackRef}
        className="relative w-full h-2 bg-gray-200 rounded-full"
        onPointerDown={handlePointerDown}
      >
        <div
          className="absolute h-full bg-primary rounded-full"
          style={{ width: `${percent}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow cursor-pointer"
          style={{ left: `calc(${percent}% - 0.5rem)` }}
        />
      </div>
    </div>
  );
};
