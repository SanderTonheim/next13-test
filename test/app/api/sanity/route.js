import { revalidatePath, revalidateTag } from 'next/cache'
import algoliasearch from 'algoliasearch'

export async function POST(req) {
	const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
	const index = client.initIndex('Members')
	const body = await req.json()

	const add = (body) => {
		const record = index.saveObject({ objectID: body._id, name: body.name, tags: body.tag, certifications: body.certifications, connections: body.connections, slug: body.slug }).wait()
		return record
	}
	await add(body)
	revalidatePath('/medlem')

	return new Response(console.log(body))
}
