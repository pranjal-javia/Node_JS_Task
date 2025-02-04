// const z = require("zod");
import { z } from "zod"; 

const regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]/;
export const creat_student_ZOD_schema = z.object({
    name: z.string().min(1, "Name is required"),
    password: z.string().min(8, "Password should have atleast 8 charactors").max(15, "Password should have atmost 15 charactors").regex(regex, "Password should contain atleast one upper case, one lower case, one special charactor, one digit. Password length sjould be 8 to 15 charector"),
    address: z.string().min(1, "Name is required"),
    collage: z.string().min(1, "Collage name is required"),
    branch: z.string().min(1, "Branch name is required"),
    email: z.string().min(1, "Email is required").email({message: "Invalid email address"}), 
});

export const update_student_ZOD_schema = z.object({
    name: z.string().min(1, "Name is required"),
    address: z.string().min(1, "Name is required"),
    collage: z.string().min(1, "Collage name is required"),
    branch: z.string().min(1, "Branch name is required"),
});

export const delete_student_ZOD_schema = z.object({
    name: z.string().min(1, "Name is required."),
});