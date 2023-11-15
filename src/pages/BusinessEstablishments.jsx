import { useState } from "react";
import StateDropdown from "@/components/StateDropdown";
import TimeRangeSlider from "@/components/TimeRangeSlider";
import CountBusinessEstablishmentsTrend from "@/components/CountBusinessEstablishmentsTrend";
import TopBusinessIndustriesTrend from "@/components/TopBusinessIndustriesTrend";

export default function BusinessEstablishmentsPage() {
  const [selectedState, setSelectedState] = useState(1);
  const [startYear, setStartYear] = useState(2012);
  const [endYear, setEndYear] = useState(2021);

  return (
    <main className="flex flex-col gap-y-6">
      <h1 className="font-extrabold tracking-tight text-4xl">
        Business Establishments During COVID-19
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
      <div className="flex flex-col gap-y-4 border-2 p-4 rounded-lg">
        <h3 className="text-2xl font-semibold">Controls</h3>
        <StateDropdown
          value={selectedState}
          onValueChange={(val) => setSelectedState(val)}
        />
        <TimeRangeSlider
          startYear={startYear}
          endYear={endYear}
          onValueChange={([start, end]) => {
            setStartYear(start);
            setEndYear(end);
          }}
        />
      </div>
      <CountBusinessEstablishmentsTrend
        stateCode={selectedState}
        startYear={startYear}
        endYear={endYear}
      />
      <TopBusinessIndustriesTrend
        stateCode={selectedState}
        startYear={startYear}
        endYear={endYear}
      />
    </main>
  );
}
