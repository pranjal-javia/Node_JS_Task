const {query} = require('../config/dbConnection')

const getAllStudents = async () => {
    try{
        let students = await query('SELECT * FROM Student');
        return students;
    }
    catch(err) {
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
        throw {status: 500, message: "Internal server error"};
    }
}

const createStudent = async (student) => {
    try{
        let queryText = `INSERT INTO Student (name, password, address, collage, branch) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        let values = [student.name, student.password, student.address, student.collage, student.branch]; 
        let rowsAffected = await query(queryText, values);
        return rowsAffected;
    }
    catch(err){
        throw {status: 500, message: "Internal server error"};
    }
}

const updateStudent = async (updatedStudent) => {
    try{
        let queryText = `UPDATE Student SET address = $1, collage = $2, branch = $3 WHERE name = $4`;
        let values = [updatedStudent.address, updatedStudent.collage, updatedStudent.branch, updatedStudent.name];
        let rowsAffected = await query(queryText, values);
        return rowsAffected;
    }
    catch(err) {
        throw {status: 500, message: `Internal server error : ${err}`};
    }
}

const deleteStudent = async (name) => {
    try{
        let queryText = `DELETE FROM Student WHERE name = $1`;
        let values = [name];
        let rowsAffected = await query(queryText, values);
        return rowsAffected;
    }
    catch(err){
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