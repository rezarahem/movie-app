import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const Post = pgTable('post', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
});
