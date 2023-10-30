import { Client } from '@/lib/client'
import groq from 'groq'
import { revalidatePath } from 'next/cache'
import algoliasearch from 'algoliasearch'
export async function POST(req) {
	const client = algoliasearch('BC0Z4HS7B1', '7c31f7f4e01eaf32e1ce709e3ec8dd4c')
	const index = client.initIndex('Members')
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
		cmsData.map((item) => {
			const obj = {
				objectID: item._id,
				name: item.name,
				tags: item.tag,
				certifications: item.certifications,
				connections: item.connections,
				slug: item.slug,
			}
			return index.saveObjects(obj)
		})
		const slug = await req.json()
		console.log(slug.slug)
		revalidatePath(`/medlem`)
		revalidatePath(`/medlem/${slug.slug}`)
		return new Response(console.log(' slug that got updated', slug.slug))
	} catch (err) {
		return new Response(console.log(err))
	}
}
