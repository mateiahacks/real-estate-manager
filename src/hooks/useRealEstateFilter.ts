import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useRealEstateFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const regions = searchParams.get("regions");
  const priceFrom = searchParams.get("priceFrom");
  const priceTo = searchParams.get("priceTo");

  const setFilters = useCallback((filters: any) => {
    setSearchParams((params) => {
      if (filters.regions) {
        params.set("regions", filters.regions);
      }
      if (filters.priceFrom) {
        params.set("priceFrom", filters.priceFrom);
      }
      if (filters.priceTo) {
        params.set("priceTo", filters.priceTo);
      }
      return params;
    });
  }, []);

  const deleteFilter = (name: string) => {
    setSearchParams((params) => {
      params.delete(name);
      return params;
    });
  };

  return {
    priceFrom,
    priceTo,
    regions,
    deleteFilter,
    setFilters,
  };
}
