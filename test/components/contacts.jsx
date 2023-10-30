import Link from 'next/link'
import phoneIcon from '@/assets/phoneIcon.svg'
import mailIcon from '@/assets/mailIcon.svg'
import addressIcon from '@/assets/addressIcon.svg'
import websiteIcon from '@/assets/websiteIcon.svg'
import nameIcon from '@/assets/nameIcon.svg'
import Image from 'next/image'
import facebookIcon from '@/assets/facebookIcon.svg'
import linkedinIcon from '@/assets/linkedinIcon.svg'

export default function ContactPerson({ list, website, address, sosial }) {
	return (
		<>
			<h2>Kontakt oss</h2>
			{list?.map((contact) => {
				return (
					<ul
						key={contact._key}
						className='flex flex-col gap-2	'>
						{contact.department?.length > 0 ? <h3>{contact.department}</h3> : ''}

						{contact.name?.length > 0 ? (
							<div className=' flex gap-2'>
								<Image
									src={nameIcon}
									alt='phone Icon'
									height={24}
									width={24}
								/>
								{contact.name}
							</div>
						) : (
							''
						)}
						{contact.phone > 0 ? (
							<div className=' flex gap-2'>
								<Image
									className=''
									src={phoneIcon}
									alt='phone Icon'
									height={24}
									width={24}
								/>
								{contact.phone}
							</div>
						) : (
							''
						)}
						{contact.mail?.length > 0 ? (
							<div className=' flex gap-2'>
								<Image
									className=''
									src={mailIcon}
									alt='phone Icon'
									height={24}
									width={24}
								/>
								{contact.mail}
							</div>
						) : (
							''
						)}

						{address?.length > 0 ? (
							<div className=' flex gap-2'>
								<Image
									className=''
									src={addressIcon}
									alt='phone Icon'
									height={24}
									width={24}
								/>
								{address}
							</div>
						) : (
							''
						)}
						<section className='SOME flex gap-4 mt-4'>
							{website?.length > 0 ? (
								<div className='flex gap-2'>
									<Link
										target='_blank'
										href={website}>
										<Image
											className=''
											src={websiteIcon}
											alt='website icon'
											height={30}
											width={30}
										/>
									</Link>
								</div>
							) : (
								''
							)}
							{sosial?.facebookLink?.length > 0 ? (
								<div className='flex gap-2'>
									<Link href={sosial.facebookLink}>
										<Image
											className=''
											src={facebookIcon}
											alt='facebook page link'
											height={30}
											width={30}
										/>
									</Link>
								</div>
							) : (
								''
							)}
							{sosial?.linkedinLink?.length > 0 ? (
								<div className='flex gap-2'>
									<Link href={sosial.linkedinLink}>
										<Image
											className=''
											src={linkedinIcon}
											alt='facebook page link'
											height={30}
											width={30}
										/>
									</Link>
								</div>
							) : (
								''
							)}
						</section>
					</ul>
				)
			})}
		</>
	)
}
