import { RangeSlider } from "@/components/ui/slider";

export default function TimeRangeSlider({ startYear, endYear, onValueChange }) {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <p>
          <span className="font-semibold">Start year</span>: {startYear}
        </p>
        <p>
          <span className="font-semibold">End year</span>: {endYear}
        </p>
      </div>
      <RangeSlider
        className="max-w-lg"
        defaultValue={[startYear, endYear]}
        min={2012}
        max={2021}
        step={1}
        onValueCommit={onValueChange}
      />
    </>
  );
}
