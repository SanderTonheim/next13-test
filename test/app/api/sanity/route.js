import { revalidatePath } from 'next/cache'
import algoliasearch from 'algoliasearch'

export async function POST(req) {
	const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
	const index = client.initIndex('Members')
	const body = await req.json()

	await index.saveObject({ objectID: body._id, name: body.name, slug: body.slug })
	revalidatePath(`/medlem`)
	// revalidatePath(`/medlem/${body.slug}`)
	return new Response(console.log(body))
}
