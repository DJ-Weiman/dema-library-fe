import { userDetailsResponse } from "@/lib/definitions";
import axiosInstance from "@/lib/getAxiosInstance";
import userDetailsStore from "@/lib/store";
import { useQuery } from "@tanstack/react-query";

export const useGetUserDetails = () => {
  const { token } = userDetailsStore();
  const { data, error } = useQuery({
    queryKey: ["user_details"],
    queryFn: async () => {
      const res = await axiosInstance.get("library/books/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userDetailsData = userDetailsResponse.safeParse(res.data);

      if (userDetailsData.success) return userDetailsData.data;
      else throw new Error(userDetailsData.error.message);
    },
    retry: 2,
  });

  return { data, error };
};
