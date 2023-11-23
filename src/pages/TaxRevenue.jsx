import { useState } from "react";
import StateDropdown from "@/components/StateDropdown";
import TimeRangeSlider from "@/components/TimeRangeSlider";
import PercentChangeTaxRevenueChart from "@/components/PercentChangeTaxRevenueChart";
import TopTaxCategoriesChart from "@/components/TopTaxCategoriesChart";
import ViewWindowSlider from "@/components/ViewWindowSlider";
import TaxCategorySelector from "@/components/TaxCategorySelector";
import TaxRevenueGeoChart from "@/components/TaxRevenueGeoChart";

const defaults = {
  selectedState: 1,
  includedCategories: ["T20"],
  startYear: 2009,
  endYear: 2022,
  minYear: 2009,
  maxYear: 2022,
  viewWindowMin: null,
  viewWindowMax: null,
};

export default function TaxRevenue() {
  const [selectedState, setSelectedState] = useState(defaults.selectedState);
  const [includedCategories, setIncludedCategories] = useState(
    defaults.includedCategories
  );
  const [startYear, setStartYear] = useState(defaults.startYear);
  const [endYear, setEndYear] = useState(defaults.endYear);
  const [viewWindowMin, setViewWindowMin] = useState(defaults.viewWindowMin);
  const [viewWindowMax, setViewWindowMax] = useState(defaults.viewWindowMax);

  return (
    <main className="flex flex-col gap-y-6">
      <h1 className="font-extrabold tracking-tight text-4xl">Tax Revenue</h1>
      <div className="flex flex-col gap-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          corporis doloribus ducimus perferendis illum, quis molestias tempora
          inventore nulla in quae laborum eum quam nostrum labore pariatur, eos
          a sunt officia doloremque sit, voluptates sapiente expedita?
          Explicabo, ullam, perferendis incidunt, eos sit et illo aliquid porro
          neque quaerat iste! Praesentium, numquam placeat facilis nostrum
          incidunt aliquam, ipsam deleniti aliquid blanditiis distinctio veniam
          saepe voluptates dolor voluptas eos molestiae esse in molestias. Et
          doloremque est exercitationem voluptatibus! Minima minus id ad, modi
          esse accusantium adipisci consectetur eaque reprehenderit, omnis
          cumque placeat accusamus quo natus ducimus vel culpa autem
          repudiandae, odio vero?
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
          <TaxCategorySelector
            selectedCategories={includedCategories}
            onCheckedChange={(checked, categoryCode) => {
              setIncludedCategories((i) =>
                checked
                  ? i.concat(categoryCode)
                  : i.filter((v) => v !== categoryCode)
              );
            }}
            onReset={() => setIncludedCategories(defaults.includedCategories)}
          />
        </div>
      </div>
      <PercentChangeTaxRevenueChart
        stateCode={selectedState}
        includedCategories={includedCategories}
        startYear={startYear}
        endYear={endYear}
        viewWindowMin={viewWindowMin}
        viewWindowMax={viewWindowMax}
      />
      <TopTaxCategoriesChart
        stateCode={selectedState}
        startYear={startYear}
        endYear={endYear}
      />
      <TaxRevenueGeoChart startYear={startYear} endYear={endYear} />

      <div className="flex flex-col gap-y-4">
        <h3 className="font-semibold text-2xl">Trend Analysis</h3>
        <div className="flex flex-col gap-y-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo
            labore sit delectus exercitationem? Fugiat, distinctio dolore maxime
            totam inventore nostrum voluptate laboriosam quibusdam alias aliquam
            tempora nulla, doloribus pariatur iste labore neque suscipit!
            Voluptate atque, natus cumque maiores nostrum dolor consectetur?
            Temporibus enim error aliquam consequuntur eos saepe, nihil quis
            tenetur harum unde quia, rerum fuga. Laboriosam rem aperiam cumque
            dicta nostrum id culpa corporis soluta mollitia unde facere atque
            incidunt, minus, explicabo facilis similique? Tenetur impedit
            maiores id error dicta aliquam sit illo eos nihil eveniet, provident
            aperiam culpa facilis? Debitis voluptatibus ipsa voluptas deserunt,
            adipisci velit aliquam.
          </p>
        </div>
      </div>
    </main>
  );
}
