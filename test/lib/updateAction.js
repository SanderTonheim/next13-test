'use server'
import { revalidatePath } from 'next/cache'

export async function UpdatePath(slug) {
	revalidatePath(`/medlem/${slug}`)
	return console.log('updated path', slug)
}
