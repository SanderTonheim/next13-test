import { Client } from '@/lib/client'
import groq from 'groq'
import { revalidatePath } from 'next/cache'
import algoliasearch from 'algoliasearch'
import { log } from 'console'
export async function POST(req) {
	const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
	const index = client.initIndex('Members')
	const { slug } = await req.json()
	try {
		const cmsData = await Client.fetch(groq`*[_type == "medlem" && slug.current == '${slug}'][0]]{
			name, 
			_id,
			certifications[]->{name},
			connections[]->{name},
			tag[]->{Name},
			contactPerson,
			"slug":slug.current,
		}`)
		const filterData = cmsData.map((item) => {
			return console.log(item.name)
			// objectID: item._id,
			// name: item.name,
			// tags: item.tag,
			// certifications: item.certifications,
			// connections: item.connections,
			// slug: item.slug,
		})
		// return index.saveObjects(obj)
		// })
		// console.log(slug.slug)
		// revalidatePath(`/medlem`)
		// revalidatePath(`/medlem/${slug.slug}`)
		return new Response(console.log(slug))
	} catch (err) {
		return new Response(console.log(err))
	}
}
