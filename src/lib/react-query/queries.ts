import { useMutation } from "@tanstack/react-query";
import axiosClient from "../axios-client";

export const useCreateAgent = () => {
  return useMutation({
    mutationFn: (agent: FormData) => axiosClient.post("/agents", agent),
  });
};
