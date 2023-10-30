import algoliasearch from 'algoliasearch'
import { revalidatePath } from 'next/cache'

export async function POST(request) {
	const client = algoliasearch('CL6X1N5OU8', '27368288330117fe0ba275850c47d3a6')
	const index = client.initIndex('test_members')
	try {
		const { slug } = await request.json()
		index.deleteObject(slug).then(() => {
			// done
		})

		revalidatePath(`/medlem`)

		return new Response(console.log(`path is revaldated. ${slug} was removed`))
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		return new Response(console.log(err))
	}
}
