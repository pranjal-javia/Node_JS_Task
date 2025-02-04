import { pgTable, serial, varchar, text, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const student = pgTable("student", {
	studentId: serial("studentId").primaryKey().notNull(),
	name: varchar({ length: 100 }).notNull(),
	password: text().notNull(),
	address: varchar({ length: 100 }).notNull(),
	collage: varchar({ length: 100 }),
	branch: varchar({ length: 50 }),
	email: varchar({ length: 255 }),
	// projectTitle: varchar({ length: 255 }).notNull(),
});

export const mentore = pgTable("mentore", {
	mentorId: serial("mentorId").primaryKey().notNull(),
	email: varchar({ length: 255 }).notNull(),
	name: varchar({ length: 100 }).notNull(),
	phone: varchar({length: 12}).notNull()
});

export const mentoreAsigned = pgTable("mentore_asigned", {
	asignId: serial("asignId").primaryKey().notNull(),
	studentId: integer("studentId").references(() => student.studentId),
	mentorId: integer("mentorId").references(() => mentore.mentorId),
});