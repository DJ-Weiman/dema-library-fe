'use client'

import axiosInstance from "@/app/api/api";
import { SignUpSchemaType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios";

export const useRegUser = () => {
    // const queryClient = useQueryClient();

    const {mutate, data, error} =  useMutation({
        mutationFn: async (formData: SignUpSchemaType) => {
            const res = await axiosInstance.post("/library/auth/registerUser", formData)
            return res
        },
        onSuccess: (data) => {
            console.log("Sign up successfull")
        }, 
        onError: (error: AxiosError) => {
            error
        }
    })

    return {mutate, data, error}
}