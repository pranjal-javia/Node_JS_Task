const studentRepository = require("../repository/studentRepository");
const bcrypt = require("bcrypt");

const getAllStudents = async () => {
    try{
        const students = await studentRepository.getAllStudents();
        return students;
    }
    catch(err){
        throw err;
    }
};

const getStudent = async (name) => {
    try{
        let student = await studentRepository.getStudent(name);
        return student; 
    }
    catch(err){
        throw err;
    }
}

const createStudent = async (student) => {
    try{
        const {password} = student;
        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(password, salt);
        student["password"] = hashedPassword;
        const rowsAffected = await studentRepository.createStudent(student);
        return rowsAffected;
    }
    catch(err){
        throw err;
    }
}

const updatedStudent = async (updatedStudent) => {
    try{
        const rowsAffected = await studentRepository.updateStudent(updatedStudent);
        return rowsAffected;
    }
    catch(err){
        throw err;
    }
}

const deleteStudent = async (name) => {
    try{
        const rowsAffected = await studentRepository.deleteStudent(name);
        return rowsAffected;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllStudents,
    createStudent,
    getStudent,
    updatedStudent,
    deleteStudent
};