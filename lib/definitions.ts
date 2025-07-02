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
  summary: z.string(),
});

export const BookPageResponse = z.object({
  content: z.array(Book),
  totalElements: z.number(),
  totalPages: z.number(),
});

export const BorrowingSucessResponse = z.object({
  status: z.string(),
  bookTitle: z.string(),
  authorName: z.string(),
  borrowedAt: z.string(),
  returnDate: z.string()
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
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

export const SignInResponseSchema = z.object({
  username: z.string(),
  token: z.string(),
});

export const BackendErrorDataSchema = z.object({
  message: z.string(),
  status: z.number(),
});

export const userDetailsResponse = z.object({
  name: z.string(),
  email: z.string().email("Invalid email format"), 
  registered_date: z.string(),
  current_borrow_count: z.number().int().nonnegative(), 
  past_borrow_count: z.number().int().nonnegative(),
  remaining_borrow_count: z.number().int().nonnegative(),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type SignInSchemaType = z.infer<typeof SignInSchema>;
export type SignInResponseSchemaType = z.infer<typeof SignInResponseSchema>;
export type BackendErrorData = z.infer<typeof BackendErrorDataSchema>;

export type BookType = z.infer<typeof Book>;
export type BookPageResponseType = z.infer<typeof BookPageResponse>;
export type BorrowingSucessResponseType = z.infer<typeof BorrowingSucessResponse>

export type UserDetailsResponseType = z.infer<typeof userDetailsResponse>
