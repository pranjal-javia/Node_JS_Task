import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const student = pgTable("student", {
	id: serial().primaryKey().notNull(),
	email: varchar({length:255}).notNull().default("abc@gmail.com"),
	name: varchar({ length: 100 }).notNull(),
	password: text().notNull(),
	address: text(),
	collage: varchar({ length: 100 }),
	branch: varchar({ length: 50 }),
});
