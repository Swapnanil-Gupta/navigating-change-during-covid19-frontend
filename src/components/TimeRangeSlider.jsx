import { useState } from "react";
import { RangeSlider } from "@/components/ui/slider";

export default function TimeRangeSlider({
  minYear,
  maxYear,
  step = 1,
  startYear,
  endYear,
  onValueCommit,
}) {
  const [start, setStart] = useState(startYear);
  const [end, setEnd] = useState(endYear);

  return (
    <div className="flex flex-col gap-y-4">
      <p>
        <span className="font-semibold">Time Range</span>: {start} - {end}
      </p>
      <RangeSlider
        className="max-w-lg"
        value={[start, end]}
        min={minYear}
        max={maxYear}
        step={step}
        onValueChange={([s, e]) => {
          setStart(s);
          setEnd(e);
        }}
        onValueCommit={onValueCommit}
      />
    </div>
  );
}
