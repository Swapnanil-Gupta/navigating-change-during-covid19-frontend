import { useState } from "react";
import StateDropdown from "@/components/StateDropdown";
import TimeRangeSlider from "@/components/TimeRangeSlider";
import PercentEmissionsChart from "@/components/PercentEmissionsChart";
import TopEnergySectorsChart from "@/components/TopEnergySectorsChart";
import ViewWindowSlider from "@/components/ViewWindowSlider";
import EnergySectorSelector from "@/components/EnergySectorSelector";
import EmissionsGeoChart from "@/components/EmissionsGeoChart";

const defaults = {
  selectedState: 1,
  includedSectors: [11, 22, 33, 44, 55],
  startYear: 1970,
  endYear: 2021,
  minYear: 1970,
  maxYear: 2021,
  viewWindowMin: null,
  viewWindowMax: null,
};

export default function Emissions() {
  const [selectedState, setSelectedState] = useState(defaults.selectedState);
  const [includedSectors, setIncludedSectors] = useState(
    defaults.includedSectors
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
            includedSectors={includedSectors}
            onCheckedChange={(checked, sectorCode) => {
              setIncludedSectors((i) =>
                checked
                  ? i.concat(sectorCode)
                  : i.filter((v) => v !== sectorCode)
              );
            }}
            onReset={() => setIncludedSectors([])}
          />
        </div>
      </div>
      <PercentEmissionsChart
        stateCode={selectedState}
        includedSectors={includedSectors}
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
      <EmissionsGeoChart startYear={startYear} endYear={endYear} />
    </main>
  );
}
