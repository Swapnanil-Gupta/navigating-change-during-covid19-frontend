import useBusinessData from "@/hooks/useBusinessData";
import Loader from "@/components/ui/loader";
import { Chart } from "react-google-charts";

const chartOptions = {
  // title: "Business Establishments Trend",
  pointSize: 5,
  hAxis: { title: "Year", titleTextStyle: { italic: false } },
  vAxis: {
    title: "Count of Business Establishments",
    titleTextStyle: { italic: false },
  },
  explorer: {
    actions: ["dragToZoom", "rightClickToReset"],
    axis: "vertical",
    keepInBounds: true,
    maxZoomIn: 25,
  },
  legend: {
    position: "right",
  },
};

export default function CountBusinessEstablishmentsTrend({
  stateCode,
  startYear,
  endYear,
}) {
  const { isLoading, isError, data, error } = useBusinessData({
    stateCode,
    startYear,
    endYear,
  });

  return (
    <div>
      <h3 className="text-2xl font-semibold">
        Count of Business Establishments Trend
      </h3>
      {isLoading && <Loader className="mx-auto my-8 h-8 w-8" />}
      {!isLoading && !isError && (
        <Chart
          chartType="LineChart"
          width="100%"
          height="800px"
          data={data}
          options={chartOptions}
        />
      )}
      {!isLoading && isError && (
        <p className="mt-4 text-base text-red-600">{error.message}</p>
      )}
    </div>
  );
}
