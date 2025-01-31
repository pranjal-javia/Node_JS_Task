ALTER TABLE "student" DROP CONSTRAINT "student_email_unique";--> statement-breakpoint
ALTER TABLE "student" ALTER COLUMN "email" SET NOT NULL;