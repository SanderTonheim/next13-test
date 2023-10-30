import Link from 'next/link'

export default function MemberTalk({ link }) {
	return (
		<section className='flex flex-col gap-1'>
			<h3>Medlemspraten</h3>
			<Link
				className='flex gap-3'
				href={link.link}>
				{link.text}
			</Link>
		</section>
	)
}
