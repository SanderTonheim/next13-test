import Image from 'next/image'
import urlFor from '@/lib/sanity'

export default function Tags({ list }) {
	return (
		<section className='flex flex-col gap-1'>
			<h2>Tags</h2>
			{list.map((tag) => {
				return (
					<li
						className='flex gap-3'
						key={tag?._id}>
						<Image
							src={urlFor(tag?.icon.asset._ref).url()}
							alt='picture of user icon'
							height={20}
							width={20}
						/>
						{tag?.Name}
					</li>
				)
			})}
		</section>
	)
}
