'use client'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch'
import Link from 'next/link'
import { useState } from 'react'

export default function Search() {
	const [value, setValue] = useState(0)
	const searchClient = algoliasearch('BC0Z4HS7B1', '7c31f7f4e01eaf32e1ce709e3ec8dd4c')
	const Hit = ({ hit }) => <Link href={'/medlem/' + hit.slug.toLowerCase().toString().replace(/\s/g, '-')}>{hit.name}</Link>

	const onStateChange = (e) => {
		setValue(e.uiState.Members.query)
	}
	return (
		<InstantSearch
			indexName={'Members'}
			searchClient={searchClient}
			onStateChange={onStateChange}>
			<section className='w-full '>
				<SearchBox
					className='SEARCH max-w-[1280px] mx-auto gap-y-3'
					placeholder='Søk etter bedrifter'
				/>
				{value?.length > 2 ? (
					<div className='HITS'>
						<Hits
							className='HITS'
							hitComponent={Hit}
						/>
					</div>
				) : (
					''
				)}
			</section>
		</InstantSearch>
	)
}
