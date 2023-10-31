import { Client } from '@/lib/client'
import groq from 'groq'
import { revalidatePath } from 'next/cache'
import algoliasearch from 'algoliasearch'

export async function POST(req) {
	const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
	const index = client.initIndex('Members')
	try {
		const { slug } = await req.json()
		console.log(slug)
		const cmsData = await Client.fetch(groq`*[_type == "medlem" && slug.current == '${slug}'][0]{
			name, 
			_id,
			certifications[]->{name},
			connections[]->{name},
			tag[]->{Name},
			contactPerson,
			"slug":slug.current,
		}`)
		console.log(cmsData)
		index.saveObject({
			objectID: cmsData._id,
			name: cmsData.name,
			tags: cmsData.tag,
			certifications: cmsData.certifications,
			connections: cmsData.connections,
			slug: cmsData.slug,
		})

		// revalidatePath(`/medlem`)
		// revalidatePath(`/medlem/${slug.slug}`)
		return new Response(console.log(slug))
	} catch (err) {
		return new Response(console.log(err))
	}
}
