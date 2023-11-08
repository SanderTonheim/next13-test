import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/lib/sanity'
import Tags from '@/components/tags'
import Certifications from '@/components/certifications'
import Connections from '@/components/connections'
import MemberTalk from '@/components/memberTalk'
import MembersClub from '@/components/membersClub'
import ContactPerson from '@/components/contacts'
import { Client } from '@/lib/client'
import groq from 'groq'
import CompanyMap from '@/components/map'
import MemeberUpdateButton from '@/components/memeberUpdateButton'
import Error from '@/components/404'
import { PortableText } from '@portabletext/react'

export default async function ProfilePage({ params }) {
	const { slug } = params
	const post = await getCompany(slug)
	if (!post) {
		return <Error />
	}
	console.log(post)
	const components = {
		block: {
			// customizing common block types
			h1: ({ children }) => <h1>{children}</h1>,
			blockquote: ({ children }) => <blockquote>{children}</blockquote>,

			// customHeading: ({ children }) => <h2 className='text-lg text-primary text-purple-700'>{children}</h2>,
		},
		list: {
			// customizing common list types
			bullet: ({ children }) => <ul className='list-disc ml-8'>{children}</ul>,
			number: ({ children }) => <ol className='list-inside list-decimal mt-lg'>{children}</ol>,
		},
		marks: {
			// custom renderer for the em / italics decorator
			em: ({ children }) => <em className='font-semibold'>{children}</em>,
		},
	}

	return (
		<>
			<section className='flex flex-col gap-6 px-4 md:py-16 md:px-12 lg:gap-[5rem]  xl:w-full xl:max-w-7xl xl:mx-auto'>
				<div className='CONTENT-CONTAINER flex flex-col items-center gap-4 lg:flex-row-reverse lg:justify-between lg:items-start lg:w-full lg:max-w-7xl'>
					<Image
						src={urlFor(post?.logo?.asset?._ref).url()}
						alt='Logo'
						height={100}
						width={250}
						className='flex'
					/>

					<section className='Text lg:basis-1/2 h-full flex gap-4 flex-col'>
						<PortableText
							value={post?.richText}
							components={components}
						/>
					</section>
				</div>
				<div className='md:flex md:w-full md:justify-between'>
					<section className='flex flex-col gap-2'>
						{post.tag < 1 ? '' : <Tags list={post.tag} />}
						{post.certifications < 1 ? '' : <Certifications list={post.certifications} />}
						{post.connections && <Connections list={post.connections} />}
						{post.medlemspraten < 1 ? '' : <MemberTalk link={post.medlemspraten} />}
						{post.medlemsklubben < 1 ? '' : <MembersClub link={post.medlemsklubben} />}
					</section>

					<section className='flex flex-col gap-4'>
						{post.contactPerson && (
							<ContactPerson
								list={post.contactPerson}
								website={post.website}
								address={post.address}
								sosial={post.sosialMedia}
							/>
						)}
					</section>
				</div>
				<div className='flex justify-center'>
					<MemeberUpdateButton />
				</div>
			</section>
			{post.ActiveMap == true ? (
				<CompanyMap
					lat={post.location?.lat}
					lng={post.location?.lng}
				/>
			) : (
				<></>
			)}
		</>
	)
}

export const getCompany = async (slug) => {
	const data = await Client.fetch(
		groq`
 	  *[_type == "medlem" && slug.current == '${slug}'][0]{
 			name,
 			_id,
 			logo,
 			location,
 			certifications[]->,
 			connections[]->,
 			text,
 			tag[]->,
 			contactPerson,
 			website,
 			address,
 			zip,
 			ActiveMap,
 			medlemspraten,
 			medlemsklubben,
			sosialMedia,
			richText,
			video,
 		}`
	)

	return data
}

export async function generateStaticParams() {
	const posts = await Client.fetch(groq`*[_type == "medlem"]`)
	return posts.map((post) => post.slug.current)
}
