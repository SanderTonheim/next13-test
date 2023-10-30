import { Client } from '@/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(Client)
export default function urlFor(source) {
	return builder.image(source)
}
