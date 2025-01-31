const studentService = require("../services/studentServices");

const getAllStudents = async (req, res) => {
    try{
        const students = await studentService.getAllStudents();
        if(students.rowCount > 0){
            res.status(200).send(students.rows);
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
        if(student.rowCount > 0){
            res.status(200).send(student.rows);
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
        const {password} = req.body; 
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,15}$/;
        if(!regex.test(password)){
            res.status(400).send("Password should contain atleast one upper case, one lower case, one special charactor, one digit. Password length sjould be 8 to 15 charector");
        }
        await studentService.createStudent(req.body);
        res.status(201).send("Record added successfully");
    }
    catch(err){
        res.status(err?.status || 500).send(err?.message || "Internal server error");
    }
}

const updatedStudent = async (req, res) => {
    try{
        let rowsAffected = await studentService.updatedStudent(req.body);
        if(rowsAffected.rowCount > 0){
            res.status(204).send("Record updated successfully");
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
        let rowsAffected = await studentService.deleteStudent(req.body.name);
        if(rowsAffected.rowCount > 0){
            res.status(204).send("Record deleted successfully");
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
    updatedStudent,
    deleteStudent
}