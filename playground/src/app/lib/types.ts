import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email('Por favor informe um email valido'),
  password: z.string().min(8, 'Password must be at least 8 characters').max(20, 'Password cannot be more than 20 characters'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwor must match",
  path: ['confirmPassword'],
})

export type TSignUpSchema = z.infer<typeof signUpSchema>