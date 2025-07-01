import {
  SignInResponseSchema,
  SignInResponseSchemaType,
  SignInSchemaType,
} from "@/lib/definitions";
import axiosInstance from "@/lib/getAxiosInstance";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useLoginUser = () => {
  const { mutate, data, error } = useMutation({
    mutationFn: async (formData: SignInSchemaType) => {
      const res = await axiosInstance.post("/library/auth/login", formData);
      const parsedData = SignInResponseSchema.safeParse(res.data);
      if (parsedData.success) {
        return parsedData.data;
      } 
    },
    onError: (error: AxiosError) => {
        console.log(`inside error ${error}`)
      error;
    },
  });

  return { mutate, data, error };
};
