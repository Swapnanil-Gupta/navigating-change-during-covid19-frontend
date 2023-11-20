import { useState } from "react";
import StateDropdown from "@/components/StateDropdown";
import TimeRangeSlider from "@/components/TimeRangeSlider";
import PercentEmissionsChart from "@/components/PercentEmissionsChart";
import TopEnergySectorsChart from "@/components/TopEnergySectorsChart";
import ViewWindowSlider from "@/components/ViewWindowSlider";
import EnergySectorSelector from "@/components/EnergySectorSelector";

const defaults = {
  stateCode: 1,
  excludedSectors: [],
  startYear: 1976,
  endYear: 2021,
  minYear: 1976,
  maxYear: 2021,
  viewWindowMin: null,
  viewWindowMax: null,
};

export default function Emissions() {
  const [selectedState, setSelectedState] = useState(defaults.stateCode);
  const [excludedSectors, setExcludedSectors] = useState(
    defaults.excludedSectors
  );
  const [startYear, setStartYear] = useState(defaults.startYear);
  const [endYear, setEndYear] = useState(defaults.endYear);
  const [viewWindowMin, setViewWindowMin] = useState(defaults.viewWindowMin);
  const [viewWindowMax, setViewWindowMax] = useState(defaults.viewWindowMax);

  return (
    <main className="flex flex-col gap-y-6">
      <h1 className="font-extrabold tracking-tight text-4xl">
        Fossil Fuel Emissions
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        assumenda labore adipisci, totam, ipsam tenetur, a iusto voluptatibus
        consequatur fuga corporis sequi amet quo illum vero quasi! Ipsum
        architecto incidunt soluta quas, ea iste dignissimos. Doloremque ex ut
        deleniti, quisquam voluptates corrupti earum accusamus. Illum
        necessitatibus veniam, maxime dicta aperiam in blanditiis quidem nulla
        totam velit quaerat fugit doloremque mollitia delectus eligendi debitis
        esse tempore error, praesentium ea ab quae eos iure impedit! Eligendi
        distinctio ipsum facilis ratione obcaecati tempore porro sequi excepturi
        natus quam, ex quisquam atque quia perferendis ut repellat hic minima
        fuga consectetur in doloremque! Sequi, ab?
      </p>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold">Controls</h3>
        <div className="grid grid-cols-2 gap-x-8 border-2 p-4 rounded-lg">
          <div className="flex flex-grow flex-col gap-y-4">
            <StateDropdown
              value={selectedState}
              onValueChange={(val) => setSelectedState(val)}
            />
            <TimeRangeSlider
              minYear={defaults.minYear}
              maxYear={defaults.maxYear}
              startYear={startYear}
              endYear={endYear}
              onValueCommit={([start, end]) => {
                setStartYear(start);
                setEndYear(end);
              }}
            />
            <ViewWindowSlider
              min={0.1}
              max={100}
              onValueCommit={([min, max]) => {
                setViewWindowMin(min);
                setViewWindowMax(max);
              }}
            />
          </div>
          <EnergySectorSelector
            excludedSectors={excludedSectors}
            onCheckedChange={(checked, sectorCode) => {
              setExcludedSectors((i) =>
                checked
                  ? i.filter((v) => v !== sectorCode)
                  : i.concat(sectorCode)
              );
            }}
            onReset={() => setExcludedSectors([])}
          />
        </div>
      </div>
      <PercentEmissionsChart
        stateCode={selectedState}
        excludedSectors={excludedSectors}
        startYear={startYear}
        endYear={endYear}
        viewWindowMin={viewWindowMin}
        viewWindowMax={viewWindowMax}
      />
      <TopEnergySectorsChart
        stateCode={selectedState}
        startYear={startYear}
        endYear={endYear}
      />
    </main>
  );
}
