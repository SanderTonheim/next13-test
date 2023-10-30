'use client'
import Link from 'next/link'
/* --------------------------------- algolia -------------------------------- */
import algoliasearch from 'algoliasearch/lite'
/* --------------------------------- filter --------------------------------- */
import { InstantSearch, Hits, RefinementList } from 'react-instantsearch'
import { useState } from 'react'
import memberIcon from '@/assets/memberIcon.svg'
import Image from 'next/image'

function TagsFilter() {
	const searchClient = algoliasearch('BC0Z4HS7B1', '7c31f7f4e01eaf32e1ce709e3ec8dd4c')

	const [category, setCategory] = useState(false)
	const [certification, setCertification] = useState(false)
	const [connections, setConnections] = useState(false)

	const Hit = ({ hit }) => {
		return (
			<section className='flex my-2 items-center gap-x-2 '>
				<Image
					className='h-7 w-7'
					src={memberIcon}
					alt='member icon picture'
				/>
				<Link href={'/medlem/' + hit.slug}>{hit.name}</Link>
			</section>
		)
	}

	const handler = (e) => {
		if (e.target.checked) {
			setCategory(false)
			setCertification(false)
			setConnections(false)
		} else if (e.target.checked === false) {
			setCategory(false)
			setCertification(false)
			setConnections(false)
		}
	}

	const FilterButton = ({ state, stateValue, text }) => {
		return (
			<button
				className='py-3 rounded-full text-white bg-[#00535a]'
				onClick={() => state(stateValue)}>
				{text}
			</button>
		)
	}

	return (
		<InstantSearch
			indexName='Members'
			searchClient={searchClient}>
			<div className='flex flex-col gap-y-5 p-4 md:flex-row gap-x-5 md:max-w-7xl md:mx-auto md:w-full'>
				<div className='h-10 flex flex-col w-full'>
					<FilterButton
						text={'Kategorier'}
						state={setCategory}
						stateValue={!category}
					/>
					<div
						className='relative p-4 rounded-t-md bg-white rounded-[0_0_16px_16px] border'
						onClick={handler}
						style={{ visibility: category ? 'visible' : 'hidden' }}>
						<RefinementList attribute={'tags.Name'} />
					</div>
				</div>

				<div className='h-10 flex flex-col w-full '>
					<FilterButton
						text={'Sertifiseringer'}
						state={setCertification}
						stateValue={!certification}
					/>

					<div
						className='relative p-4 rounded-t-md bg-white  rounded-[0_0_16px_16px] border'
						onClick={handler}
						style={{ visibility: certification ? 'visible' : 'hidden' }}>
						<RefinementList attribute={'certifications.name'} />
					</div>
				</div>
				<div className='h-10 flex flex-col w-full'>
					<FilterButton
						text={'Tilknyttninger'}
						state={setConnections}
						stateValue={!connections}
					/>
					<div
						className='relative p-4 rounded-t-md bg-white  rounded-[0_0_16px_16px] border'
						onClick={handler}
						style={{ visibility: connections ? 'visible' : 'hidden' }}>
						<RefinementList attribute={'connections.name'} />
					</div>
				</div>
			</div>
			<Hits
				hitComponent={Hit}
				className='hits-list-container px-4 py-4 '
			/>
		</InstantSearch>
	)
}

export default TagsFilter
