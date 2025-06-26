import { z } from "zod";

export const Book = z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    genre: z.string(),
    rating: z.number(),
    total_copies: z.number(),
    available_copies: z.number(),
    coverUrl: z.nullable(z.string()),
    summary: z.string()
})

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

export const BackendErrorDataSchema = z.object({
  message: z.string(),
  status: z.number()
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>
export type SignInSchemaType = z.infer<typeof SignInSchema>
export type BackendErrorData = z.infer<typeof BackendErrorDataSchema>



export type BookType = z.infer<typeof Book>
