import { Client } from '@/lib/client'
import groq from 'groq'
import { revalidatePath } from 'next/cache'
import algoliasearch from 'algoliasearch'
export async function POST(req) {
	const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
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
		const { slug } = await req.json()
		const filterData = cmsData.map((item) => {
			return console.log(item._id)
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
		return new Response([{ slug }, { filterData }])
	} catch (err) {
		return new Response(console.log(err))
	}
}
