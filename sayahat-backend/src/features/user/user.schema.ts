import { z } from "zod";

const userSchema = z.object({
  username: z
    .string({
      required_error: "Username field is required",
    })
    .min(3, "The minimum length of username is 3")
    .max(25),
  password: z
    .string({
      required_error: "Password field is required",
    })
    .min(8, "Password must be larger than 8 symbols")
    .max(25, "Password must be shorter than 24 symbols"),
});

export { userSchema };
