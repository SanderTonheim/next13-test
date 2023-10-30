import Title from '@/components/title'
import MainSponsors from '@/components/mainSponsor'
import SecondarySponsors from '@/components/secondarySponsors'
import Link from 'next/link'
import Newsletter from '@/components/newsletter'

export default function Home() {
	return (
		<>
			<Title />
			<MainSponsors />
			<SecondarySponsors />
			<Link
				className='px-8 py-4 bg-[#00535a] text-white w-fit mx-auto my-4'
				href={'/medlem'}>
				Se alle medlemmer
			</Link>
			<Newsletter />
		</>
	)
}
