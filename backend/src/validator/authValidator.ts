import { z } from "zod"

interface IUser {
  email: string,
  password: string
}

const User = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(12)
});


export const validateUser = (data: IUser) => User.safeParse(data)