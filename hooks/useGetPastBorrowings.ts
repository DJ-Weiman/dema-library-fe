import { PastBorrowingSchema } from "@/lib/definitions";
import axiosInstance from "@/lib/getAxiosInstance";
import userDetailsStore from "@/lib/store";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

export const useGetPastBorrowings = () => {
  const { token } = userDetailsStore();
  const { data, error } = useQuery({
    queryKey: ["past_borrowings"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/library/pastBorrowings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      const pastBorrowingData = z
        .array(PastBorrowingSchema)
        .safeParse(res.data);

      if (pastBorrowingData.success) return pastBorrowingData.data;
      else throw new Error(pastBorrowingData.error.message);
    },
  });

  return { data, error };
};
