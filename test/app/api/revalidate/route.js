import algoliasearch from 'algoliasearch'
import { revalidatePath } from 'next/cache'

export async function POST(request) {
	const body = await request.json()

	const updateMember = (body) => {
		index.saveObject({ objectID: body._id, name: body.name, tags: body.tag, connections: body.connections, certifications: body.certifications, slug: body.slug }).wait()
		return
	}
	await updateMember(body)
	revalidatePath('/medlem/[slug]', 'page')

	return new Response(console.log(body))
}
