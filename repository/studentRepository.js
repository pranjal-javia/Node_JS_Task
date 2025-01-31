const {query} = require('../config/dbConnection')

const getAllStudents = async () => {
    try{
        const students = await query('SELECT * FROM Student');
        return students;
    }
    catch(err) {
        console.log(err);
        throw {status: 500, message: "Internal server error"};
    }
}

const getStudent = async (name) => {
    try{
        const queryText = "SELECT * FROM Student WHERE name = $1";
        const student = await query(queryText, [name]);
        return student;
    }
    catch(err){
        console.log(err);
        throw {status: 500, message: "Internal server error"};
    }
}

const createStudent = async (student) => {
    try{
        const queryText = `INSERT INTO Student (name, password, address, collage, branch) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [student.name, student.password, student.address, student.collage, student.branch]; 
        const rowsAffected = await query(queryText, values);
        return rowsAffected;
    }
    catch(err){
        console.log(err);
        throw {status: 500, message: "Internal server error"};
    }
}

const updateStudent = async (updatedStudent) => {
    try{
        const queryText = `UPDATE Student SET address = $1, collage = $2, branch = $3 WHERE name = $4`;
        const values = [updatedStudent.address, updatedStudent.collage, updatedStudent.branch, updatedStudent.name];
        const rowsAffected = await query(queryText, values);
        return rowsAffected;
    }
    catch(err) {
        console.log(err);
        throw {status: 500, message: `Internal server error`};
    }
}

const deleteStudent = async (name) => {
    try{
        const queryText = `DELETE FROM Student WHERE name = $1`;
        const values = [name];
        const rowsAffected = await query(queryText, values);
        return rowsAffected;
    }
    catch(err){
        console.log(err);
        throw {status: 500, message: "Internal server error"};
    }
}

module.exports = {
    getAllStudents,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
};