import {z} from 'zod';
export const registerValidator = z.object({
    username: z.string().min(3, 'Username ใส่ 4 ขึ้นไป'),
    password: z.string().min(6, 'Password ใส่ 6 ขึ้นไป'),
    confirmPassword: z.string().min(6, 'Confirm Password ใส่ 6 ขึ้นไป'),
})