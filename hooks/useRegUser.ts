'use client'

import { SignUpSchemaType } from "@/lib/definitions";
import axiosInstance from "@/lib/getAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios";

export const useRegUser = () => {
    const {mutate, data, error} =  useMutation({
        mutationFn: async (formData: SignUpSchemaType) => {
            const res = await axiosInstance.post("/library/auth/registerUser", formData)
            return res
        },
        onSuccess: (data) => {
            data
        }, 
        onError: (error: AxiosError) => {
            error
        }
    })

    return {mutate, data, error}
}