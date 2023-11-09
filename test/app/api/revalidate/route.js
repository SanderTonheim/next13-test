import algoliasearch from 'algoliasearch'
import { revalidatePath } from 'next/cache'

export async function GET(request) {
	const path = 1

	if (path > 0) {
		return Response.json({ revalidated: true, now: Date.now() })
	}

	const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
	const index = client.initIndex('Members')
	const body = await request.json()
	index.saveObject({ objectID: body._id, name: body.name, tags: body.tag, connections: body.connections, certifications: body.certifications, slug: body.slug }).wait()
	revalidatePath(`/medlem/${body.slug}`)

	return Response.json({ message: `${body}` })
}

// export async function POST(request) {

// 	const slug = body.slug

// 	const updateMember = (body) => {
// 		const record = index.saveObject({ objectID: body._id, name: body.name, tags: body.tag, connections: body.connections, certifications: body.certifications, slug: body.slug }).wait()
// 		return record
// 	}
// 	await updateMember(body)

// 	await UpdatePath(slug)

// 	return new Response(console.log(body))
// }
