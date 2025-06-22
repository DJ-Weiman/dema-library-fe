'use client'

import axiosInstance from "@/app/api/api.js";
import { SignUpSchemaType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { error } from "console";

export const useRegUser = () => {
    // const queryClient = useQueryClient();

    const {mutate, data, error} =  useMutation({
        mutationFn: async (formData: SignUpSchemaType) => {
            const res = await axiosInstance.post("/library/auth/registerUser", formData)
            return res.data
        },
        onSuccess: (data) => {
            console.log("Sign up successfull")
        }, 
        onError: (error) => {
            console.log("Error Signing up")
        }
    })

    return {mutate, data, error}
}