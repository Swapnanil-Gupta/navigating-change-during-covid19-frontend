import { useQuery } from "react-query";
import axios from "@/lib/axios";

export default function useBusinessIndustries() {
  const query = useQuery(["/industry"], async () => {
    try {
      const response = await axios.get("/industry");
      return response.data;
    } catch (err) {
      throw new Error("Failed to fetch business industries");
    }
  });
  return query;
}
