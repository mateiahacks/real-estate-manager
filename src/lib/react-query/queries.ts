import { useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "../axios-client";
import { QUERY_KEYS } from "./queryKeys";
import { IRealEstate } from "../../types";

export const useCreateAgent = () => {
  return useMutation({
    mutationFn: (agent: FormData) => axiosClient.post("/agents", agent),
  });
};

export const useCreateRealEstate = () => {
  return useMutation({
    mutationFn: (realEstate: FormData) =>
      axiosClient.post("/real-estates", realEstate),
  });
};

export const useGetRealEstates = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_REAL_ESTATES],
    queryFn: () => axiosClient.get("/real-estates").then((res) => res.data),
  });
};

export const useGetRealEstate = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_REAL_ESTATE],
    queryFn: () =>
      axiosClient
        .get(`/real-estates/${id}`)
        .then((res) => res.data as IRealEstate),
    refetchOnWindowFocus: false,
  });
};

export const useGetAgents = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_AGENTS],
    queryFn: () => axiosClient.get("/agents").then((res) => res.data),
  });
};

export const useGetRegions = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_REGIONS],
    queryFn: () => axiosClient.get("/regions").then((res) => res.data),
  });
};

export const useGetCities = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CITIES],
    queryFn: () => axiosClient.get("/cities").then((res) => res.data),
  });
};
