import Image from 'next/image'
import frontPageFigure from '@/assets/frontPageFigure.png'
import Search from './search'
export default function Title() {
	return (
		<div className='title-background w-full flex-col gap-6 flex justify-center  bg-[#a9ede7] px-4 py-8  '>
			<div className='content flex justify-center items-center font-bold md:justify-between w-full md:max-w-[1280px] md:self-center '>
				<h1 className=' '>Våre samarbeidspartnare</h1>
				<Image
					className='hidden md:block'
					src={frontPageFigure}
					alt=''
				/>
			</div>
			<Search />
		</div>
	)
}
