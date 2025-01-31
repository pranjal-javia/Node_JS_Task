ALTER TABLE "student" ADD COLUMN "email" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD CONSTRAINT "student_email_unique" UNIQUE("email");