import Image from 'next/image'
import urlFor from '../lib/sanity'
export default function Certifications({ list }) {
	return (
		<section className='flex flex-col gap-1'>
			<h3>Sertifisering</h3>
			{list.map((item) => {
				return (
					<li
						key={item.name}
						className=' flex gap-4'>
						<Image
							src={urlFor(item.icon.asset._ref).url()}
							alt='icon'
							height={0}
							width={40}
						/>
						{item.name}
					</li>
				)
			})}
		</section>
	)
}
