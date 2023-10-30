import Link from 'next/link'

export default function Error() {
	return (
		<section className='flex flex-col gap-4 justify-center flex-1 items-center'>
			<h1>Denne siden finnes ikke.</h1>
			<Link
				className='underline'
				href={'/'}>
				Tilbake til forsiden
			</Link>
		</section>
	)
}
