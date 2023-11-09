import algoliasearch from 'algoliasearch'
export async function GET(request) {
	const path = request.nextUrl.origin
	if (path.length > 0) {
		const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
		const index = client.initIndex('Members')

		const body = await request.json()
		console.log(request)
		console.log(body)

		// index.saveObject({ objectID: body._id, name: body.name, tags: body.tag, connections: body.connections, certifications: body.certifications, slug: body.slug }).wait()
		return Response.json({ revalidated: true, now: Date.now() })
	}
	return Response.json({
		revalidated: false,
		path: path,
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
