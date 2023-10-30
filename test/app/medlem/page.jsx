import Link from 'next/link'
import Search from '../../components/search'
// import icons from '../../assets/icons/index'
// import arrow from '../../assets/arrow.svg'
/* --------------------------------- sanity --------------------------------- */
import groq from 'groq'
import { Client } from '@/lib/client'
import Image from 'next/image'
import TagsFilter from '@/components/tagsFilter'
/* ------------------------------------ Render items on page ----------------------------------- */
export default async function ProfileList() {
	const medlem = await getMembers()
	const isMainSponsor = medlem.filter((mainSponsors) => {
		return mainSponsors
	})

	medlem.sort((a, b) => {
		if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
		else if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
	})

	return (
		<>
			<section className='header flex justify-center items-center flex-col bg-[#a8ede7] py-16 px-8 w-full gap-12'>
				<h1>Medlemsliste</h1>
				<Search />
			</section>

			<TagsFilter />
		</>
	)
}

/* ------------------------------ sanity fetch ------------------------------ */
const getMembers = async () => {
	const medlem = await Client.fetch(groq`*[_type == 'medlem']`)
	return medlem
}
