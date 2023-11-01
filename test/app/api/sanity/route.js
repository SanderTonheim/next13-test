import { Client } from '@/lib/client'
import groq from 'groq'
import { revalidatePath } from 'next/cache'
import algoliasearch from 'algoliasearch'

export async function POST(req) {
	const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
	const index = client.initIndex('Members')
	const body = await req.json()
	console.log(body)

	// const cmsData = await Client.fetch(groq`*[_type == "medlem" && slug.current == '${slug}'][0]{
	// 	name,
	// 	_id,
	// 	certifications[]->{name},
	// 	connections[]->{name},
	// 	tag[]->{Name},
	// 	contactPerson,
	// 	"slug":slug.current,
	// }`)
	const obj = {
		objectID: body._id,
		name: body.name,
		slug: body.slug,
	}
	index.saveObject(obj)
	// console.log(slug.slug)
	// revalidatePath(`/medlem`)
	// revalidatePath(`/medlem/${slug.slug}`)
	// return new Response(console.log(obj))
	return Response(console.log(body))
}
