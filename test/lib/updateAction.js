'use server'

export async function UpdatePath(slug) {
	revalidatePath(`/medlem/${slug}`)
	return console.log('updated path', slug)
}
