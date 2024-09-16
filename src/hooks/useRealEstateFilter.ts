import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useRealEstateFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const regions = searchParams.get("regions");

  const setFilters = useCallback((filters: any) => {
    setSearchParams((params) => {
      if (filters.regions !== undefined) {
        params.set("regions", filters.regions);
      }
      return params;
    });
  }, []);

  return {
    regions,
    setFilters,
  };
}
