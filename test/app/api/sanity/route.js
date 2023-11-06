import { Client } from '@/lib/client'
import groq from 'groq'
import { revalidatePath } from 'next/cache'
import algoliasearch from 'algoliasearch'

export async function POST(req) {
	const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
	const index = client.initIndex('Members')
	const body = await req.json()

	if (!body.tag > 0) {
		console.log('Finner ikke tags')
	} else {
		console.log([...body.tag])
	}

	index.saveObject({ objectID: body._id, name: body.name, slug: body.slug })
	revalidatePath(`/medlem`)
	revalidatePath(`/medlem/${body.slug}`)
	// return new Response(console.log(obj))
	return new Response(console.log(body))
}
