const studentService = require("../services/studentServices");
// const z = require("zod");
const {creat_student_ZOD_schema, update_student_ZOD_schema, delete_student_ZOD_schema} = require("../validations/studentValidations");

const getAllStudents = async (req, res) => {
    try{
        const students = await studentService.getAllStudents();
        if(students.length > 0){
            res.status(200).send(students);
        }
        else{
            res.status(404).send("No students found");
        }
    }
    catch(err){
        res.status(err.status || 500).send(err.message || "Internal Server Error");
    }
}

const getStudent = async (req, res) => {
    try{
        const student = await studentService.getStudent(req.body.name);
        if(student.length > 0){
            res.status(200).send(student);
        }
        else{
            res.status(404).send("Student not found");
        }
    }
    catch(err){
        res.status(err?.status || 500).send(err?.message || "Internal server error");
    }
}

const createStudent = async (req, res) => {
    try{
        const validation = creat_student_ZOD_schema.safeParse(req.body); 
        if(!validation.success){
            return res.status(400).json({errors: validation.error.format()});
        }
        await studentService.createStudent(req.body);
        res.status(201).send("Record added successfully");
    }
    catch(err){
        res.status(err?.status || 500).send(err?.message || "Internal server error");
    }
}

const updateStudent = async (req, res) => {
    try{
        // const student = z.object({
        //     name: z.string().min(1, "Name is required"),
        //     address: z.string().min(1, "Name is required"),
        //     collage: z.string().min(1, "Collage name is required"),
        //     branch: z.string().min(1, "Branch name is required"),
        // });
        const validation = update_student_ZOD_schema.safeParse(req.body);
        if(!validation.success){
            return res.status(400).json({errors: validation.error.format()});
        }
        const rowsAffected = await studentService.updatedStudent(req.body);
        if(rowsAffected.rowCount > 0){
            res.status(204).send();
        }
        else{
            res.status(404).send("User not found");
        }
    }
    catch(err){
        res.status(err?.status || 500).send(err?.message || "Internal server error");
    }
}

const deleteStudent = async (req, res) => {
    try{
        // const student = z.object({
        //     name: z.string().min(1, "Name is required."),
        // });
        const validation = delete_student_ZOD_schema.safeParse(req.body);
        if(!validation.success){
            return res.status(400).json({errors: validation.error.format()});
        }
        const rowsAffected = await studentService.deleteStudent(req.body.name);
        if(rowsAffected.rowCount > 0){
            res.status(204).send();
        }
        else{
            res.status(404).send("Student not found");
        }
    }
    catch(err){
        res.status(err?.status || 500).send(err?.message || "Internal server error");
    }
}

module.exports = {
    getAllStudents,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
}