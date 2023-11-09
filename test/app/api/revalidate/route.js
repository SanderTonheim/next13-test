import algoliasearch from 'algoliasearch'
import { revalidatePath } from 'next/cache'

export async function GET(request) {
	const path = request.nextUrl.searchParams.get('path')

	if (path) {
		revalidatePath(`/medlem/${slug}`)
		return Response.json({ revalidated: true, now: Date.now() })
	}
	index.saveObject({ objectID: body._id, name: body.name, tags: body.tag, connections: body.connections, certifications: body.certifications, slug: body.slug }).wait()
	const body = await request.json()
	revalidatePath(`/medlem/${body.slug}`)

	return Response.json({
		revalidated: false,
		now: Date.now(),
		message: body,
	})
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
