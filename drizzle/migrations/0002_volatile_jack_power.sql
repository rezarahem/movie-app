DO $$ BEGIN
 CREATE TYPE "userRole" AS ENUM('ADMIN', 'USER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" "userRole" DEFAULT 'USER' NOT NULL;