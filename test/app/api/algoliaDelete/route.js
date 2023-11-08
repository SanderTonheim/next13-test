import algoliasearch from 'algoliasearch'
import { revalidatePath } from 'next/cache'

export async function POST(req) {
	const client = algoliasearch('CL6X1N5OU8', 'b5cf6abddecca4efc7e0b6234e818950')
	const index = client.initIndex('Members')
	const { slug } = await req.json()

	index.deleteObject(slug)
	revalidatePath('/medlem')
	return new Response(console.log('path deleted', slug))
}
