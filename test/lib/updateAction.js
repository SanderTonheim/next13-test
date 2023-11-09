'use server'
import { revalidatePath } from 'next/cache'

export async function UpdatePath(slug) {
	await revalidatePath(`/medlem/${slug}`)
	return console.log('updated path', slug)
}
