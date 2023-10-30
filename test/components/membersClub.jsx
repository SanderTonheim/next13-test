import Link from 'next/link'

export default function MembersClub({ link }) {
	return (
		<section className='flex flex-col gap-1'>
			<h3>Medlemsklubben</h3>
			<Link
				className='flex gap-3'
				href={link.clubLink}>
				{link.clubText}
			</Link>
		</section>
	)
}
