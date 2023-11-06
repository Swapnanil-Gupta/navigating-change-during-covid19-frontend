import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider as RangeSlider } from "@/components/ui/rangeslider";
import { Chart } from "react-google-charts";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(12);
  const [startYear, setStartYear] = useState(2012);
  const [endYear, setEndYear] = useState(2021);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      const response = await axios.get("/state");
      setStates(response.data);
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/business-data", {
          params: {
            stateCode: selectedState,
            startYear,
            endYear,
          },
        });
        const transformedData = response.data.map((d) => Object.values(d));
        transformedData.unshift(Object.keys(response.data[0]));
        setData(transformedData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, [selectedState, startYear, endYear]);

  const options = {
    title: "Business Establishments Trend",
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
  };

  return (
    <div className="py-8">
      <h1 className="mb-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Count of Establishments Trend
      </h1>
      <div className="flex flex-col gap-y-4 mb-4 max-w-lg">
        <div className="flex flex-col gap-y-2">
          <Label className="text-base" htmlFor="state">
            State
          </Label>
          <Select
            value={selectedState}
            onValueChange={(val) => setSelectedState(val)}
          >
            <SelectTrigger id="state" className="w-48">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {states.map((s) => (
                <SelectItem key={s.stateCode} value={s.stateCode}>
                  {s.stateName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2 font-medium">
            <p>Start year: {startYear}</p>
            <p>End year: {endYear}</p>
          </div>
          <RangeSlider
            defaultValue={[startYear, endYear]}
            min={2012}
            max={2021}
            step={1}
            onValueCommit={([start, end]) => {
              setStartYear(start);
              setEndYear(end);
            }}
          />
        </div>
      </div>
      {loading && <p>Loading data...</p>}
      {!loading && (
        <Chart
          chartType="LineChart"
          width="100%"
          height="800px"
          data={data}
          options={options}
        />
      )}
    </div>
  );
}
