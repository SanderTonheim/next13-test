'use client'

import Image from 'next/image'
import logo from '@/assets/logo.png'
import { useEffect, useRef, useState } from 'react'
import menuIcon from '@/assets/menu-icon.png'
import Link from 'next/link'

export default function Navbar() {
	const [open, setOpen] = useState(false)
	const toggle = () => {
		{
			setOpen(!open)
		}
	}

	const refOne = useRef()
	const handleClickOutSide = (e) => {
		if (refOne.current.contains(e.target)) {
		} else {
			setOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutSide)
	}, [])

	return (
		<nav className=' h-fit sticky'>
			<div className='flex justify-between items-center px-3 py-4 max-w-7xl mx-auto'>
				<Link href={'https://bfnr.no/'}>
					<Image
						className='w-52'
						src={logo}
						alt='logo pic'
					/>
				</Link>
				<div
					ref={refOne}
					className='md:hidden'>
					<Image
						src={menuIcon}
						className='w-9'
						onClick={toggle}
						alt='menu icon'
					/>
				</div>
				<ul className='hidden md:block'>
					<ul className='flex items-start w-fit gap-4 py-2 '>
						<Link href='https://bfnr.no/'>Hjem</Link>
						<Link href='/'>Nytt søk</Link>
						<Link href='/medlem'>Medlemsliste</Link>
					</ul>
				</ul>
			</div>

			{open ? (
				<div className=' bg-white flex justify-center fixed w-full'>
					<ul className='flex flex-col items-start w-fit gap-1 py-2 '>
						<Link href='https://bfnr.no/'>Hjem</Link>
						<Link href='/'>Forside</Link>
						<Link href='/medlem'>Medlemsliste</Link>
					</ul>
				</div>
			) : null}
		</nav>
	)
}
