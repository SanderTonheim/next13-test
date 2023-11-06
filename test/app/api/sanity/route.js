import { Client } from '@/lib/client'
import groq from 'groq'
import { revalidatePath } from 'next/cache'
import algoliasearch from 'algoliasearch'

export async function POST(req) {
	const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
	const index = client.initIndex('Members')
	const body = await req.json()
	let tags = null
	if (body.tag > 0) {
		tags = [...body.tag]
		return new Response(console.log('ok', tags))
	} else {
		return new Response(console.log('Finner ikke tags'))
	}

	// index.saveObject({ objectID: body._id, name: body.name, slug: body.slug })
	// revalidatePath(`/medlem`)
	// revalidatePath(`/medlem/${body.slug}`)
	// return new Response(console.log(obj))
	// return new Response(console.log('ok'))
}
