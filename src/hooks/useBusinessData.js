import { useQuery } from "react-query";
import axios from "@/lib/axios";

export default function useBusinessData({
  stateCode,
  excludedIndustries,
  startYear,
  endYear,
}) {
  const query = useQuery(
    ["/business-data", stateCode, excludedIndustries, startYear, endYear],
    async () => {
      try {
        const response = await axios.get("/business-data", {
          params: {
            stateCode,
            startYear,
            endYear,
            excludedIndustries,
          },
        });
        return response.data;
      } catch (err) {
        throw new Error("Failed to fetch business data");
      }
    }
  );
  return query;
}
