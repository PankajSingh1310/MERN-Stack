const { z } = require("zod");

// creating an object schema

const signupSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be 3 or more characters long" })
    .max(30, { message: "Name must be 30 or fewer characters long" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be 6 or more characters long" })
    .max(100, { message: "Password must be 100 or fewer characters long" }),
  contact: z.string({required_error: "Contact is required"}),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be 6 or more characters long" })
    .max(100, { message: "Password must be 100 or fewer characters long" })
})

module.exports = {signupSchema, loginSchema};
