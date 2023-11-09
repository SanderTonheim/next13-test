// import algoliasearch from 'algoliasearch'
import { revalidatePath } from 'next/cache'

export async function GET(request) {
	const path = request.nextUrl.searchParams.get('path')

	if (path) {
		revalidatePath(path)
		return Response.json({ revalidated: true, now: Date.now() })
	}

	return Response.json({
		revalidated: false,
		now: Date.now(),
		message: path,
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
