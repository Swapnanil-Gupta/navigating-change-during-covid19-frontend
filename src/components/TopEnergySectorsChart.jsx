import useTopEnergySectors from "@/hooks/useTopEnergySectors";
import Loader from "@/components/ui/loader";
import { Chart } from "react-google-charts";

const chartOptions = {};

export default function TopEnergySectors({ stateCode, startYear, endYear }) {
  const { isLoading, isError, data, error } = useTopEnergySectors({
    stateCode,
    startYear,
    endYear,
  });

  return (
    <div>
      <h3 className="text-2xl font-semibold">Ranking of Energy Sectors</h3>
      {isLoading && <Loader className="mx-auto my-8 h-8 w-8" />}
      {!isLoading && !isError && (
        <Chart
          chartType="BarChart"
          width="100%"
          height="800px"
          options={chartOptions}
          data={data}
        />
      )}
      {!isLoading && isError && (
        <p className="mt-4 text-base text-red-600">{error.message}</p>
      )}
    </div>
  );
}
