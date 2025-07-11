"use client";

import { useLoginUser } from "@/hooks/useLoginUser";
import {
  BackendErrorDataSchema,
  SignInSchema,
  SignInSchemaType,
} from "@/lib/definitions";
import userDetailsStore from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";


const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate, error, data } = useLoginUser();
  const router = useRouter();
  const { setToken, setUsername } = userDetailsStore();

  const handleRegistration = (data: SignInSchemaType) => {
    mutate(data);
  };

  useEffect(() => {
    if (data) {
      setToken(data.token);
      setUsername(data.username);
      router.push("/");
    }
  }, [data]);

  function getErrorMessage(backendError: AxiosError): string {
    const parsedData = BackendErrorDataSchema.safeParse(
      backendError.response?.data
    );
    if (parsedData.success) return parsedData.data.message;
    else return "Error Encounted, Please Try Again!";
  }

  return (
    <div className="bg-slate-800 flex flex-col min-w-lg gap-4 px-16 py-8 my-16 rounded-2xl">
      <div className="flex gap-2">
        <Image
          src="/icons/logo.svg"
          className="invert"
          alt="logo Icon"
          width={20}
          height={20}
        />
        <p className="text-xl font-bold">DemaLibrary</p>
      </div>

      <h1 className="text-xl font-semibold">Welcome Back!</h1>
      <p>Log back into your account</p>

      <div>
        {error && (
          <p className="text-xl text-red-600">{getErrorMessage(error)}</p>
        )}
      </div>

      <div>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                className="bg-slate-700 rounded-md p-4"
                placeholder="Enter your username"
                type="text"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-600">Invalid username</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password:</label>
              <input
                id="passwrod"
                className="bg-slate-700 rounded-md p-4"
                placeholder="Enter your Password"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-overview-yellow rounded-md p-4 text-black font-bold"
            >
              Login
            </button>

            <p className="text-center">
              Don&apos;t have an account?&nbsp;
               <Link href="/reg" className="text-overview-yellow">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
