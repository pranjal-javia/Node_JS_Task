const schema = require("../drizzle/schema");
const { db } = require("../config/dbConnection");
const { eq } = require("drizzle-orm");

const getAllStudents = async () => {
  try {
    const students = await db.select().from(schema.student);
    return students;
  } catch (err) {
    console.log(err);
    throw { status: 500, message: "Internal server error" };
  }
};

const getStudent = async (name) => {
  try {
    const student = await db
      .select()
      .from(schema.student)
      .where(eq(schema.student.name, name));
    return student;
  } catch (err) {
    console.log(err);
    throw { status: 500, message: "Internal server error" };
  }
};

const createStudent = async (student) => {
  try {
    const rowsAffected = await db
      .insert(schema.student)
      .values({
        name: student.name,
        password: student.password,
        address: student.address,
        collage: student.collage,
        branch: student.branch,
        email: student.email,
      });
    return rowsAffected;
  } catch (err) {
    console.log(err);
    throw { status: 500, message: "Internal server error" };
  }
};

const updateStudent = async (updatedStudent) => {
  try {
    const rowsAffected = await db
      .update(schema.student)
      .set({address: updatedStudent.address, collage: updatedStudent.collage, branch: updatedStudent.branch})
      .where(eq(schema.student.name, updatedStudent.name));
    return rowsAffected;
  } catch (err) {
    console.log(err);
    throw { status: 500, message: `Internal server error` };
  }
};

const deleteStudent = async (name) => {
  try {
    const rowsAffected = await db.delete(schema.student).where(eq(schema.student.name, name));
    return rowsAffected;
  } catch (err) {
    console.log(err);
    throw { status: 500, message: "Internal server error" };
  }
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
