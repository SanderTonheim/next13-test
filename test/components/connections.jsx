import urlFor from '@/lib/sanity'
import Image from 'next/image'

export default function Connections({ list }) {
	return (
		<section className='flex flex-col gap-1'>
			<h3>Tilknytninger</h3>
			{list.map((item) => {
				return (
					<li
						className='flex gap-3'
						key={item.name}>
						<Image
							src={urlFor(item.icon.asset._ref).url()}
							alt={list[0].name}
							height={20}
							width={20}
						/>
						{list[0].name}
					</li>
				)
			})}
		</section>
	)
}
