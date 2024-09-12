import axiosClient from "../../lib/axios-client";

const getRealEstates = async () => {
  const response = await axiosClient.get("/real-estates");

  if (!response) return;

  return response.data;
};

const realEstateService = {
  getRealEstates,
};

export default realEstateService;
