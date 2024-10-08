import { db, Dummies } from 'astro:db'
import { nanoid } from 'nanoid'

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Dummies).values([
		{ id: nanoid(), txt: "aenean malesuada sapien"}
	])
}
