import { useState } from "react";
import StateDropdown from "@/components/StateDropdown";
import TimeRangeSlider from "@/components/TimeRangeSlider";
import PercentBusinessEstablishmentsCharts from "@/components/PercentBusinessEstablishmentsCharts";
import TopBusinessIndustriesChart from "@/components/TopBusinessIndustriesChart";
import ViewWindowSlider from "@/components/ViewWindowSlider";
import BusinessIndustrySelector from "@/components/BusinessIndustrySelector";

const defaults = {
  stateCode: 1,
  excludedIndustries: [],
  startYear: 2010,
  endYear: 2021,
  minYear: 2010,
  maxYear: 2021,
  viewWindowMin: null,
  viewWindowMax: null,
};

export default function BusinessEstablishments() {
  const [selectedState, setSelectedState] = useState(defaults.stateCode);
  const [excludedIndustries, setExcludedIndustries] = useState(
    defaults.excludedIndustries
  );
  const [startYear, setStartYear] = useState(defaults.startYear);
  const [endYear, setEndYear] = useState(defaults.endYear);
  const [viewWindowMin, setViewWindowMin] = useState(defaults.viewWindowMin);
  const [viewWindowMax, setViewWindowMax] = useState(defaults.viewWindowMax);

  return (
    <main className="flex flex-col gap-y-6">
      <h1 className="font-extrabold tracking-tight text-4xl">
        Business Establishments
      </h1>
      <p>
      On this page, you can find information regarding the number of business establishments in the U.S. during 
      the time period 2010 to 2021 for each state. Each business establishment is categorized into a specific 
      industry sector in which there are X different types. With the use of the time period slider bar, state 
      selection, and business sector filter, one can view two different graphs that relay business establishment 
      patterns given the criteria noted.
      </p>

      <p>
      The line graph represents the percentage of total business establishments in the U.S that that sector makes 
      up and overlays this information with the number of Covid-19 cases in that given year per state. This allows 
      one to see any changes that may appear in the number of business establishments per sector as the increase in
      Covid-19 cases surges in the U.S.
      </p>

      <p>
      The bar graph below, similarly, highlights the top 5 business sectors with the highest number of business 
      establishments during the selected time period. This makes it easy to visualize what sectors make up most of 
      the economy during any given time period in terms of number of establishments rather than percentage make-up.
      </p>

      <p>
      These graphs provide insight into how Covid-19 has played a role in the evolving U.S economy and allows users 
      to explore changes that occurred over time in each state. Some of the most significant findings are highlighted 
      below.
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
          <BusinessIndustrySelector
            excludedIndustries={excludedIndustries}
            onCheckedChange={(checked, industryCode) => {
              setExcludedIndustries((i) =>
                checked
                  ? i.filter((v) => v !== industryCode)
                  : i.concat(industryCode)
              );
            }}
            onReset={() => setExcludedIndustries([])}
          />
        </div>
      </div>
      <PercentBusinessEstablishmentsCharts
        stateCode={selectedState}
        excludedIndustries={excludedIndustries}
        startYear={startYear}
        endYear={endYear}
        viewWindowMin={viewWindowMin}
        viewWindowMax={viewWindowMax}
      />
      <TopBusinessIndustriesChart
        stateCode={selectedState}
        startYear={startYear}
        endYear={endYear}
      />

    <h3 className="font-semibold text-xl">Trend Analysis</h3>
    <p>How does the number of confirmed COVID-19 cases in a state affect the number of establishments 
    per business sector of that state over the course of 2019-2022? Which business sectors saw dramatic 
    changes in open or closed businesses?</p>


    </main>
  );
}
