import algoliasearch from 'algoliasearch'
import { revalidatePath } from 'next/cache'

export async function POST(request) {
	const client = algoliasearch('BC0Z4HS7B1', '7c31f7f4e01eaf32e1ce709e3ec8dd4c')
	const index = client.initIndex('Members')
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
