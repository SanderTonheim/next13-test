import axios from 'axios'
import urlFor from '../lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import mainSponsorIcon from '@/assets/MainSponsor.png'

export default async function MainSponsors() {
	const data = await getMainSponsors()
	return (
		<div className=' flex flex-col items-center gap-5 py-5 px-4 '>
			<div className='heading flex flex-wrap justify-center w-full items-center '>
				<h1 className='font-bold text-2xl'>Hovudsamarbeidspartnare</h1>
				<Image
					src={mainSponsorIcon}
					className='w-16'
				/>
			</div>
			<div className='flex flex-col items-center gap-5 h-fit w-full md:flex-row md:justify-evenly lg:max-w-[1280px] animate-fade-up '>
				{data.map((item) => {
					return (
						<Link
							className='flex-1  border-solid  border-[#3b8f93]  rounded-lg border-4 py-8 px-10 w-full flex justify-center items-center lg:w-80 lg:h-32 md:px-12 md:py-6 md:max-w-[370px]'
							href={'/medlem/' + item.slug.current}
							key={item._id}>
							{/* <div className='w-[190px] h-12'> */}
							<Image
								height={100}
								width={100}
								className='relative h-20 w-full max-w-[190px]'
								// objectFit='contain'
								src={urlFor(item.logo.asset._ref).url()}
								alt='logo picture'
							/>
							{/* </div> */}
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export const getMainSponsors = async () => {
	const URL =
		"https://8rpris03.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22medlem%22%20%26%26%20%20MainSponsor%20%3D%3D%20true%5D%7B%20%20slug%2CsponsorCardText%2C%20name%2C%20%20%20_id%2C%20%20logo%2Ctext%2Ctag%5B%5D-%3E%7B%20'icon'%3Aicon.asset._ref%2C%20'name'%3A%20Name%7D%20%2C%20%20certifications%5B%5D-%3E%2Cconnections%5B%5D-%3E%7BName%2C%20'icon'%3A%20icon.asset._ref%7D%7D"
	const content = await axios.get(URL)
	return content.data.result
}
