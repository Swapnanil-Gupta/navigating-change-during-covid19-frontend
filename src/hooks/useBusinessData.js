import { useQuery } from "react-query";
import axios from "@/lib/axios";

export default function useBusinessData({ stateCode, startYear, endYear }) {
  const query = useQuery(
    ["/business-data", stateCode, startYear, endYear],
    async () => {
      try {
        const response = await axios.get("/business-data", {
          params: {
            stateCode,
            startYear,
            endYear,
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
