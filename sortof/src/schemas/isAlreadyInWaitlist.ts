import {z} from 'zod'

export const isAlreadyInWaitlistSchema = z.object({
    isAlreadyInWaitlist: z.boolean(),
})