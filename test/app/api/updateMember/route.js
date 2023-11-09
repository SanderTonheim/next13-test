import { revalidatePath } from 'next/cache'
import algoliasearch from 'algoliasearch'

export async function POST(request) {
	const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
	const index = client.initIndex('Members')
	const body = await request.json()
	const slug = body.slug
	const path = request.nextUrl
	console.log('path:', path)

	const updateMember = (body) => {
		const record = index.saveObject({ objectID: body._id, name: body.name, tags: body.tag, connections: body.connections, certifications: body.certifications, slug: body.slug }).wait()
		return record
	}
	updateMember(body)
	revalidatePath(`/medlem/${slug}`)

	return new Response(console.log(body))
}
