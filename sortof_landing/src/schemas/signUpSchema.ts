import {z} from 'zod'

export const usernameValidation = z
   .string()
   .min(2, "Username must be atleast 2 character")
   .max(20, "Username must be less than 20 characters")
   .regex(/^[a-zA-A0-9_]+$/, "Username must not contain special charater")
   

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: "password msut be atleast 6 character"})
})