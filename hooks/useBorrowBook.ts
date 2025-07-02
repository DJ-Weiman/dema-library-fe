import { BorrowingSucessResponse } from "@/lib/definitions";
import axiosInstance from "@/lib/getAxiosInstance";
import userDetailsStore from "@/lib/store";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useBorrowBook = () => {
  const { token } = userDetailsStore();

  const { mutate, data, error } = useMutation({
    mutationFn: async (borrowingReq: { book_id: string }) => {
      const res = await axiosInstance.post("/library/borrowing", borrowingReq, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res;
    },
    onSuccess: (data) => {
      data;
    },
    onError: (error: AxiosError) => {
      error;
    },
  });

  return { mutate, data, error };
};
