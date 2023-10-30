import { Add } from '@/actions/addToNewsletter'

export default function Newsletter() {
	return (
		<section className=' h-fit py-10 px-4 bg-[#a9ede7] flex flex-col gap-8'>
			<div className=' flex flex-col gap-6 lg:max-w-7xl lg:w-full lg:self-center '>
				<h2 className='font-bold'>Abonner på nyhetsbrev og få oppdateringer på arrangement</h2>

				<form
					className=' flex flex-col justify-center items-center gap-2 w-full [&_input]:w-full [&_input]:h-11 [&_input]:p-3 [&_input]:placeholder-black md:flex-row md:flex-wrap lg:[&_input]:basis-1/5 lg:[&_input]:flex-1 lg:justify-start'
					action={Add}>
					<input
						id='fname-input'
						name='firstName'
						type='text'
						placeholder='Fornavn'
					/>
					<input
						id='lname-input'
						name='lastName'
						type='text'
						placeholder='Etternavn'
					/>
					<input
						required
						id='email-input'
						name='email'
						type='email'
						placeholder='Epost*'
					/>
					<input
						id='company-input'
						name='company'
						type='text'
						placeholder='Firma'
					/>
					<button
						type='submit'
						className='bg-black text-white flex justify-center items-center w-full py-3 md:basis-52 lg:basis-[314px] lg:self-stretch'>
						Abonner
					</button>
				</form>
			</div>
		</section>
	)
}
