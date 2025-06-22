"use client";

import { useRegUser } from "@/hooks/useRegUser";
import { SignUpSchema, SignUpSchemaType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const RegistrationPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate, data, error } = useRegUser()

  const handleRegistration = (userData: SignUpSchemaType) => {

    mutate(userData)

    console.log("Checker : ")

    
    console.log(data)
    console.log(error)

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

      <h1 className="text-xl font-semibold">Create your library account</h1>
      <p>Please complete all the fields below</p>

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
              {errors.username && <p className="text-red-600">{errors.username.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                className="bg-slate-700 rounded-md p-4"
                placeholder="Enter your Email"
                type="email"
                {...register("email")}
              />
              {errors.email && <p className="text-red-600">Invalid Email</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                className="bg-slate-700 rounded-md p-4"
                placeholder="Enter your password"
                type="password"
                {...register("password")}
              />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword">ConfirmPassword:</label>
              <input
                id="confirmPassword"
                className="bg-slate-700 rounded-md p-4"
                placeholder="Confirm entered password"
                type="password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword?.message}</p>}
            </div>

            <button type="submit" className="bg-overview-yellow rounded-md p-4 text-black font-bold">
              Sign Up
            </button>

            <p className="text-center">Already have an account? <Link href='/sign-in' className="text-overview-yellow">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
