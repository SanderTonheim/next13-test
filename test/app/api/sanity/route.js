import { Client } from '@/lib/client'
import groq from 'groq'
import { revalidatePath } from 'next/cache'
import algoliasearch from 'algoliasearch'
export async function POST(req) {
	// const client = algoliasearch('CL6X1N5OU8', '27368288330117fe0ba275850c47d3a6')
	// const index = client.initIndex('members')
	try {
		const cmsData = await Client.fetch(groq`*[_type == "medlem"]{
			name, 
			_id,
			certifications[]->{name},
			connections[]->{name},
			tag[]->{Name},
			contactPerson,
			"slug":slug.current,
		}`)
		// cmsData.map((item) => {
		// 	const obj = {
		// 		objectID: item._id,
		// 		name: item.name,
		// 		tags: item.tag,
		// 		certifications: item.certifications,
		// 		connections: item.connections,
		// 		slug: item.slug,
		// 	}
		// 	return index.saveObjects(obj)
		// })
		const slug = await req.json()
		console.log(slug.slug)
		// revalidatePath(`/medlem`)
		// revalidatePath(`/medlem/${slug.slug}`)
		return new Response(console.log(' slug that got updated', slug.slug))
	} catch (err) {
		return new Response(console.log(err))
	}
}
