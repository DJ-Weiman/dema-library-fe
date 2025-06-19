"use client";

import { SignInSchema, SignInSchemaType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const page = (props: Props) => {
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

  const handleRegistration = (data: SignInSchemaType) => {
    console.log(data);
  };

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
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                className="bg-slate-700 rounded-md p-4"
                placeholder="Enter your Email"
                type="email"
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
              Don't have an account?{" "}
              <Link href="/reg" className="text-overview-yellow">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
