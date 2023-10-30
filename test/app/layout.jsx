import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'
import { Montserrat } from 'next/font/google'

export const metadata = {
	title: 'Medlemsliste',
}

const inter = Montserrat({
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({ children }) {
	return (
		<html
			lang='no'
			className={inter.className}>
			<body className='flex flex-col justify-between min-h-screen'>
				{/* <Navbar /> */}
				<main className='flex flex-1 flex-col'>{children}</main>
				{/* <Footer /> */}
			</body>
		</html>
	)
}
