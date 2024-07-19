import { sql } from 'drizzle-orm';
import { pgTable, text, uuid, varchar, timestamp } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/postgres-js';

export const user = pgTable('user', {
	id: uuid('uuid')
		.default(sql`gen_random_uuid()`)
		.primaryKey(),
	username: varchar('username').unique().notNull(),
	password: text('password').notNull(),
	first_name: varchar('first_name'),
	last_name: varchar('last_name'),
	email: varchar('email').unique().notNull(),
	createdAt: timestamp('created_at', { mode: 'date', precision: 3 }).default(sql`now()`),
	updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).$onUpdate(() => new Date())
});
