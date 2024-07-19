import type { Config } from 'drizzle-kit';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
	throw new Error('No DATABASE_URL env var found');
}

export default {
	schema: './src/lib/server/schema.ts',
	dbCredentials: {
		url: process.env.DATABASE_URL as string
	},
	dialect: 'postgresql',
	out: './migrations'
} satisfies Config;
