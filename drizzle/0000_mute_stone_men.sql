CREATE TABLE "mentore" (
	"mentorId" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "mentore_asigned" (
	"asignId" serial PRIMARY KEY NOT NULL,
	"studentId" integer,
	"mentorId" integer
);
--> statement-breakpoint
CREATE TABLE "student" (
	"studentId" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"password" text NOT NULL,
	"address" varchar(100) NOT NULL,
	"collage" varchar(100),
	"branch" varchar(50),
	"email" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "mentore_asigned" ADD CONSTRAINT "mentore_asigned_studentId_student_studentId_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student"("studentId") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mentore_asigned" ADD CONSTRAINT "mentore_asigned_mentorId_mentore_mentorId_fk" FOREIGN KEY ("mentorId") REFERENCES "public"."mentore"("mentorId") ON DELETE no action ON UPDATE no action;