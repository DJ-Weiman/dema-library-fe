import { z } from "zod";

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .min(5, {
        message: "username should have more than 5 characters",
      })
      .max(15, {
        message: "username cannot be longer than 15 characters",
      }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SignInSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: "username should have more than 5 characters",
    })
    .max(15, {
      message: "username cannot be longer than 15 characters",
    }),
  password: z.string(),
});

export const backendErrorDataSchema = z.object({
  message: z.string(),
  status: z.number()
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>
export type SignInSchemaType = z.infer<typeof SignInSchema>
export type BackendErrorData = z.infer<typeof backendErrorDataSchema>

