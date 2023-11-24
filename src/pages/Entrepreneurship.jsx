import { useState } from "react";
import StateDropdown from "@/components/StateDropdown";
import TimeRangeSlider from "@/components/TimeRangeSlider";
import NewEstablishmentsChart from "@/components/NewEstablishmentsChart";
// import TopPayrollIndustriesChart from "@/components/TopPayrollIndustriesChart";
import ViewWindowSlider from "@/components/ViewWindowSlider";
import BusinessSizeSelector from "@/components/BusinessSizeSelector";
import BusinessIndustryDropdown from "@/components/BusinessIndustryDropdown";
// import PayrollGeoChart from "@/components/PayrollGeoChart";

const defaults = {
  selectedState: 1,
  selectedIndustry: 11,
  includedSizes: ["<5"],
  startYear: 2010,
  endYear: 2021,
  minYear: 2010,
  maxYear: 2021,
  viewWindowMin: null,
  viewWindowMax: null,
};

export default function Entrepreneurship() {
  const [selectedState, setSelectedState] = useState(defaults.selectedState);
  const [selectedIndustry, setSelectedIndustry] = useState(
    defaults.selectedIndustry
  );
  const [includedSizes, setIncludedSizes] = useState(defaults.includedSizes);
  const [startYear, setStartYear] = useState(defaults.startYear);
  const [endYear, setEndYear] = useState(defaults.endYear);
  const [viewWindowMin, setViewWindowMin] = useState(defaults.viewWindowMin);
  const [viewWindowMax, setViewWindowMax] = useState(defaults.viewWindowMax);

  return (
    <main className="flex flex-col gap-y-6">
      <h1 className="font-extrabold tracking-tight text-4xl">
        Entrepreneurship
      </h1>
      <div className="flex flex-col gap-y-2">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          ipsa quas, expedita aspernatur, doloremque odio quaerat at cupiditate
          voluptas excepturi repudiandae ipsum voluptatum. Sit nisi iure error
          repudiandae excepturi qui sapiente, nemo corporis ex ab quae iusto rem
          et natus ipsum suscipit nesciunt voluptatum magni saepe aliquam quod
          dicta quisquam a maiores. Veritatis asperiores enim reprehenderit
          aperiam earum tempora ullam ut in harum culpa dolores incidunt quis
          cum temporibus quo sapiente facilis repudiandae quisquam, ea eligendi
          neque suscipit explicabo! Consequuntur, labore. Eligendi qui et
          cupiditate nulla quaerat temporibus, molestias incidunt soluta,
          praesentium pariatur voluptas voluptates deserunt illum numquam alias
          deleniti.
        </p>
      </div>

      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold">Controls</h3>
        <div className="grid grid-cols-2 gap-x-8 border-2 p-4 rounded-lg">
          <div className="flex flex-grow flex-col gap-y-4">
            <StateDropdown
              value={selectedState}
              onValueChange={(val) => setSelectedState(val)}
            />
            <BusinessIndustryDropdown
              value={selectedIndustry}
              onValueChange={(val) => setSelectedIndustry(val)}
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
          <BusinessSizeSelector
            selectedSizes={includedSizes}
            onCheckedChange={(checked, sizeCode) => {
              setIncludedSizes((i) =>
                checked ? i.concat(sizeCode) : i.filter((v) => v !== sizeCode)
              );
            }}
            onReset={() => setIncludedSizes(defaults.includedSizes)}
          />
        </div>
      </div>
      <NewEstablishmentsChart
        stateCode={selectedState}
        industryCode={selectedIndustry}
        includedSizes={includedSizes}
        startYear={startYear}
        endYear={endYear}
        viewWindowMin={viewWindowMin}
        viewWindowMax={viewWindowMax}
      />
      {/* <TopPayrollIndustriesChart
        stateCode={selectedState}
        startYear={startYear}
        endYear={endYear}
      /> */}
      {/* <PayrollGeoChart startYear={startYear} endYear={endYear} /> */}

      <div className="flex flex-col gap-y-4">
        <h3 className="font-semibold text-2xl">Trend Analysis</h3>
        <div className="flex flex-col gap-y-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ipsam est voluptatem iste minima voluptate sapiente veniam!
            Recusandae enim, dolores reiciendis incidunt natus nemo sed repellat
            maxime molestiae, odit perferendis! Labore dignissimos eaque sunt
            blanditiis veniam illum eligendi, illo dicta corporis. Quidem,
            itaque quia alias maxime minus consequuntur temporibus vel doloribus
            dolore sit nesciunt doloremque iusto omnis voluptates ad dignissimos
            quisquam. Totam ab numquam quia nostrum fugiat neque possimus
            aliquid, explicabo voluptatibus natus. In quas dignissimos quis
            aliquid laboriosam dolores impedit placeat molestias repellat
            repudiandae aspernatur voluptas voluptatibus ut voluptatum amet
            expedita, necessitatibus architecto, quidem praesentium rem. Quae,
            necessitatibus culpa.
          </p>
        </div>
      </div>
    </main>
  );
}
